package org.tubalabs.products;

import com.azure.core.util.BinaryData;
import com.azure.storage.blob.BlobContainerClient;
import com.azure.storage.blob.models.BlobHttpHeaders;
import com.azure.storage.blob.options.BlobParallelUploadOptions;
import org.springframework.context.annotation.Profile;
import org.springframework.http.*;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.nio.ByteBuffer;
import java.nio.charset.*;
import java.security.MessageDigest;
import java.util.*;

@Controller @Profile("!inspect")
class ProductsController {
    private final Store store;
    private final BlobContainerClient blobs;
    ProductsController(Store store, BlobContainerClient blobs) { this.store = store; this.blobs = blobs; }
    @GetMapping("/") String uploadPage(Model model) { model.addAttribute("products", store.products()); return "upload"; }
    @GetMapping("/chat") String chatPage(Model model) { model.addAttribute("products", store.products()); return "chat"; }
    @GetMapping("/api/csrf") @ResponseBody Map<String,String> csrf(CsrfToken token) {
        return Map.of("token", token.getToken(), "headerName", token.getHeaderName());
    }
    @GetMapping("/api/products") @ResponseBody Object products() { return store.products(); }
    @GetMapping("/api/products/{id}") @ResponseBody Object product(@PathVariable UUID id) {
        return store.product(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @PostMapping(value="/api/products", consumes=MediaType.MULTIPART_FORM_DATA_VALUE) @ResponseBody
    ResponseEntity<Store.Product> uploadApi(@RequestParam String name, @RequestParam MultipartFile manual) throws Exception {
        return ResponseEntity.status(201).body(upload(name, manual));
    }
    @PostMapping(value="/products", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
    String uploadForm(@RequestParam String name, @RequestParam MultipartFile manual) throws Exception {
        upload(name, manual); return "redirect:/";
    }
    private Store.Product upload(String name, MultipartFile manual) throws Exception {
        String filename = Objects.toString(manual.getOriginalFilename(), "");
        if (name == null || name.isBlank() || name.length() > 120 || !filename.endsWith(".txt") || manual.isEmpty() || manual.getSize() > 131072)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Use a name (1..120 characters) and a UTF-8 .txt manual up to 128 KiB");
        byte[] data = manual.getBytes();
        try {
            String text = StandardCharsets.UTF_8.newDecoder().onMalformedInput(CodingErrorAction.REPORT).decode(ByteBuffer.wrap(data)).toString();
            if (text.isBlank() || text.indexOf('\0') >= 0) throw new CharacterCodingException();
        } catch (CharacterCodingException error) { throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Manual must contain UTF-8 text without NUL bytes"); }
        String sha = HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(data));
        Store.Product product = store.createProduct(name.strip(), sha);
        try {
            var options = new BlobParallelUploadOptions(BinaryData.fromBytes(data))
                    .setHeaders(new BlobHttpHeaders().setContentType("text/plain; charset=utf-8"))
                    .setMetadata(Map.of("productid", product.id().toString(), "manualid", product.manualId().toString(), "sha256", sha));
            // UUID paths are new and immutable. Refuse replacement explicitly.
            options.setRequestConditions(new com.azure.storage.blob.models.BlobRequestConditions().setIfNoneMatch("*"));
            blobs.getBlobClient(product.blobName()).uploadWithResponse(options, null, com.azure.core.util.Context.NONE);
            return product;
        } catch (Exception error) {
            store.failUpload(product.id());
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Upload failed. Check Products status and server logs.");
        }
    }
    record Question(String question, UUID productId) {}
    @PostMapping(value="/api/questions", consumes=MediaType.APPLICATION_JSON_VALUE) @ResponseBody
    ResponseEntity<Store.Chat> ask(@RequestBody Question input) {
        if (input.question() == null || input.question().isBlank() || input.question().length() > 1000)
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Question must be 1..1000 characters");
        if (input.productId() != null && store.product(input.productId()).filter(p -> p.status().equals("ready")).isEmpty())
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Wait for the selected manual to be ready");
        return ResponseEntity.accepted().body(store.createQuestion(input.question().strip(), input.productId()));
    }
    @GetMapping("/api/questions/{id}") @ResponseBody Object question(@PathVariable UUID id) {
        store.expire();
        return store.chat(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
    @ExceptionHandler(ResponseStatusException.class) @ResponseBody ResponseEntity<Map<String,String>> badRequest(ResponseStatusException error) {
        return ResponseEntity.status(error.getStatusCode()).body(Map.of("error", Objects.toString(error.getReason(), "Request failed")));
    }
}
