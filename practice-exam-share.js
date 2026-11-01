/* Versioned binary result links. Correct answers are implicit; exceptions retain selections. */
(function (root, factory) {
  'use strict';
  const api = factory(typeof module === 'object' && module.exports ? require('./practice-exam-core.js') : root.AI200Exam);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.AI200ExamShare = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (rules) {
  'use strict';
  const VERSION = 1, MAX_LENGTH = 8192, fingerprints = new WeakMap();
  const invalid = () => { throw new Error('This result link is invalid or incomplete.'); };
  const bitsFor = count => Math.max(1, Math.ceil(Math.log2(count)));
  function fingerprint(bank) {
    if (!fingerprints.has(bank)) {
      // Exclusion/pool changes do not invalidate older completed exams. Question
      // order, wording, keys and case content do: indices must never be remapped.
      const input = new TextEncoder().encode(JSON.stringify([bank.bankId, bank.questions, bank.contexts]));
      let hash = 14695981039346656037n;
      for (const byte of input) hash = BigInt.asUintN(64, (hash ^ BigInt(byte)) * 1099511628211n);
      fingerprints.set(bank, Array.from({length:8}, (_, i) => Number(hash >> BigInt((7-i)*8) & 255n)));
    }
    return fingerprints.get(bank);
  }
  function checksum(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit=0; bit<8; bit++) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }
  class Writer {
    constructor() { this.bytes = []; this.position = 0; }
    write(value, bits) {
      if (!Number.isInteger(value) || value < 0 || value >= 2 ** bits) invalid();
      for (let bit=bits-1; bit>=0; bit--) {
        const index = this.position >> 3;
        this.bytes[index] = (this.bytes[index] || 0) | ((value >>> bit & 1) << (7-(this.position & 7)));
        this.position++;
      }
    }
  }
  class Reader {
    constructor(bytes) { this.bytes=bytes; this.position=0; }
    read(bits) {
      if (this.position + bits > this.bytes.length * 8) invalid();
      let value=0;
      for (let bit=0; bit<bits; bit++,this.position++) value = value*2 + (this.bytes[this.position >> 3] >> (7-(this.position & 7)) & 1);
      return value;
    }
    finish() {
      const remaining = this.bytes.length*8-this.position;
      if (remaining > 7 || remaining && this.read(remaining) !== 0) invalid();
    }
  }
  function base64(bytes) {
    const text = typeof Buffer !== 'undefined' ? Buffer.from(bytes).toString('base64') : btoa(String.fromCharCode(...bytes));
    return text.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  }
  function unbase64(text) {
    if (typeof text !== 'string' || !text.length || text.length > MAX_LENGTH || !/^[A-Za-z0-9_-]+$/.test(text) || text.length%4 === 1) invalid();
    const padded = text.replace(/-/g,'+').replace(/_/g,'/') + '='.repeat((4-text.length%4)%4);
    let bytes;
    try { bytes = typeof Buffer !== 'undefined' ? Uint8Array.from(Buffer.from(padded,'base64')) : Uint8Array.from(atob(padded), char=>char.charCodeAt(0)); }
    catch { invalid(); }
    if (base64(bytes) !== text || bytes.length < 24) invalid();
    return bytes;
  }
  function writeAnswer(writer, question, answer) {
    const type = rules.questionType(question);
    if (type === 'choice') {
      if (question.options.length > 30) invalid();
      let mask=0;
      question.options.forEach((option,i)=>{if(answer.includes(option.id))mask += 2**i;});
      writer.write(mask,question.options.length);
    } else if (type === 'order') {
      writer.write(answer.length,bitsFor(question.correctAnswers.length+1));
      answer.forEach(id=>writer.write(question.options.findIndex(option=>option.id===id),bitsFor(question.options.length)));
    } else question.slots.forEach((slot,i)=>{
      const options = type === 'dropdown' ? slot.options : question.options;
      writer.write(answer[i] ? options.findIndex(option=>option.id===answer[i])+1 : 0,bitsFor(options.length+1));
    });
  }
  function readAnswer(reader, question) {
    const type = rules.questionType(question);
    let answer;
    if (type === 'choice') {
      if (question.options.length > 30) invalid();
      const mask=reader.read(question.options.length);
      answer=question.options.filter((_,i)=>mask & 2**i).map(option=>option.id);
    } else if (type === 'order') {
      const count=reader.read(bitsFor(question.correctAnswers.length+1));
      if (count>question.correctAnswers.length) invalid();
      answer=Array.from({length:count},()=>{
        const option=question.options[reader.read(bitsFor(question.options.length))];
        if(!option)invalid(); return option.id;
      });
    } else answer=question.slots.map(slot=>{
      const options=type==='dropdown'?slot.options:question.options, index=reader.read(bitsFor(options.length+1));
      if(index>options.length)invalid(); return index?options[index-1].id:'';
    });
    if (!rules.validAnswer(question,answer) || !rules.hasAnswer(answer)) invalid();
    return answer;
  }
  function encode(bank, attempt) {
    if (!rules.validAttempt(attempt,bank) || attempt.submittedAt === null) throw new Error('Finish the exam before sharing its results.');
    const end=attempt.timedOut?attempt.deadline:attempt.submittedAt;
    if (end===null || end<attempt.startedAt) invalid();
    const completed=Math.floor(attempt.submittedAt/1000),elapsed=Math.round((end-attempt.startedAt)/1000);
    if (completed<elapsed || attempt.timedOut && !elapsed) invalid();
    const byId=new Map(bank.questions.map((question,index)=>[question.id,{question,index}]));
    const selected=attempt.ids.map(id=>byId.get(id));
    const writer=new Writer(), flagged=attempt.flagged.length>0;
    writer.write(VERSION,8); writer.write((attempt.timedOut?1:0)|(flagged?2:0),8);
    fingerprint(bank).forEach(byte=>writer.write(byte,8));
    writer.write(completed,32); writer.write(elapsed,32); writer.write(selected.length,16);
    selected.forEach(item=>writer.write(item.index,bitsFor(bank.questions.length)));
    selected.forEach(({question})=>writer.write(rules.hasAnswer(attempt.answers[question.id])?0:1,1));
    if(flagged)selected.forEach(({question})=>writer.write(attempt.flagged.includes(question.id)?1:0,1));
    const exceptions=[];
    selected.forEach(({question},index)=>{
      const answer=attempt.answers[question.id]||[];
      const alternative=rules.questionType(question)==='order' && answer.join(',')!==question.correctAnswers.join(',');
      if(rules.hasAnswer(answer) && (!rules.isCorrect(question,answer)||alternative))exceptions.push({question,index,answer});
    });
    writer.write(exceptions.length,16);
    exceptions.forEach(({question,index,answer})=>{writer.write(index,bitsFor(selected.length));writeAnswer(writer,question,answer);});
    const bytes=writer.bytes, crc=checksum(bytes);
    for(let shift=24;shift>=0;shift-=8)bytes.push(crc>>>shift&255);
    const result=base64(bytes);
    if(result.length>MAX_LENGTH)throw new Error('This result is too large to share as a link.');
    return result;
  }
  function decode(token, banks) {
    const bytes=unbase64(token),body=bytes.slice(0,-4),tail=new Reader(bytes.slice(-4));
    if(checksum(body)!==tail.read(32))invalid();
    const reader=new Reader(body);
    if(reader.read(8)!==VERSION)throw new Error('This result link uses an unsupported format.');
    const flags=reader.read(8);if(flags & ~3)invalid();
    const signature=Array.from({length:8},()=>reader.read(8));
    const bank=banks.find(candidate=>fingerprint(candidate).every((byte,i)=>byte===signature[i]));
    if(!bank)throw new Error('This result uses a different question bank version.');
    const completed=reader.read(32),elapsed=reader.read(32),count=reader.read(16);
    if(!count||count>bank.questions.length||elapsed>completed||(flags&1)&&!elapsed)invalid();
    const questions=Array.from({length:count},()=>{
      const question=bank.questions[reader.read(bitsFor(bank.questions.length))];if(!question)invalid();return question;
    });
    if(new Set(questions.map(q=>q.id)).size!==count)invalid();
    const unanswered=questions.map(()=>reader.read(1)),marked=flags&2?questions.map(()=>reader.read(1)):[];
    const submittedAt=completed*1000;
    const attempt={version:1,bankId:bank.bankId,ids:questions.map(q=>q.id),answers:{},flagged:questions.filter((_,i)=>marked[i]).map(q=>q.id),checked:[],index:0,
      startedAt:submittedAt-elapsed*1000,deadline:flags&1?submittedAt:null,submittedAt,timedOut:Boolean(flags&1)};
    questions.forEach((question,i)=>{if(!unanswered[i])attempt.answers[question.id]=question.correctAnswers.slice();});
    const exceptions=reader.read(16);if(exceptions>count)invalid();
    let previous=-1;
    for(let i=0;i<exceptions;i++){
      const index=reader.read(bitsFor(count));
      if(index>=count||index<=previous||unanswered[index])invalid();previous=index;
      attempt.answers[questions[index].id]=readAnswer(reader,questions[index]);
    }
    reader.finish();
    if(!rules.validAttempt(attempt,bank))invalid();
    return {bank,attempt};
  }
  return {encode,decode};
});
