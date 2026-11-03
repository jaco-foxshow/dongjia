/* 墨墨的作品朗讀室：老師確認文字後朗讀；照片在瀏覽器中辨識。 */
let momoPhotoUrl = null;
let momoUtterance = null;
let momoOcrBusy = false;

function readerPage() {
  document.title = '墨墨朗讀室｜菄家奇幻寫作學院';
  return `${header('reader')}<main class="container reader-container">
    <div class="reader-head"><span class="eyebrow">THE INK MONSTER'S READING ROOM</span>
      <h1>墨墨的作品朗讀室</h1>
      <p>作文完成後，由老師操作上傳或輸入文字、確認內容，再讓墨墨念出學生自己的作品。</p></div>
    <div class="reader-layout">
      <section class="reader-editor" aria-label="作文輸入">
        <div class="reader-card"><div class="reader-step"><span>01</span><h2>把作品交給墨墨</h2></div>
          <div class="reader-input-grid"><div><label class="reader-file-label" for="momo-photo">📷 拍照／選擇作文照片</label>
            <input id="momo-photo" type="file" accept="image/*" capture="environment">
            <button class="secondary" data-action="momo-ocr" id="momo-ocr-button">辨識照片中的文字</button>
            <p class="reader-hint">首次辨識需要網路下載繁體中文模型。手寫字可能辨識錯誤，請對照原稿修正。</p>
            <img id="momo-preview" class="reader-preview" alt="作文照片預覽" hidden></div>
          <div class="reader-or">或</div><div class="reader-manual"><strong>⌨ 手動輸入</strong>
            <p>老師可以直接打字，也可以把辨識結果放到下方修改。</p></div></div></div>
        <div class="reader-card"><div class="reader-step"><span>02</span><h2>老師核對文字</h2></div>
          <label for="momo-essay">我的作文內容</label>
          <textarea id="momo-essay" rows="11" placeholder="請在這裡輸入作文，或辨識照片後核對文字。"></textarea>
          <div class="reader-editor-bottom"><span id="momo-count">0 字</span>
            <button class="secondary" data-action="momo-download">下載文字備份</button></div>
          <p class="reader-privacy">本網站不會將作文和照片儲存到伺服器。離開或重新整理前，請先下載需要保留的文字。</p></div>
      </section>
      <aside class="reader-stage" aria-label="墨墨朗讀操作"><div class="reader-stage-inner">
        <span class="reader-stage-tag">✦ 墨墨正在等你的故事 ✦</span>
        ${momoMarkup('momo-reader-character momo-wiggle')}
        <p id="momo-status" class="reader-status" role="status" aria-live="polite">老師確認文字後，按下朗讀，墨墨就會念給你聽！</p>
        <div class="reader-speaker-buttons">
          <button class="primary" data-action="momo-read">▶ 請墨墨朗讀</button>
          <button class="secondary" data-action="momo-pause">暫停／繼續</button>
          <button class="secondary" data-action="momo-stop">■ 停止</button>
        </div>
        <label class="reader-rate-label" for="momo-rate">朗讀速度 <span id="momo-rate-value">0.9 倍</span></label>
        <input type="range" id="momo-rate" min="0.7" max="1.2" value="0.9" step="0.1">
        <p class="reader-hint reader-speech-note">使用裝置內建的中文語音。實際音色取決於電腦或手機是否安裝中文語音。</p>
      </div></aside>
    </div></main>${footer()}`;
}

function setMomoStatus(message) {
  const el = document.getElementById('momo-status');
  if (el) el.textContent = message;
}
function setMomoSpeaking(speaking) {
  const el = document.querySelector('.momo-reader-character');
  if (el) el.classList.toggle('momo-speaking', speaking);
}
function stopMomoSpeech() {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  momoUtterance = null;
  setMomoSpeaking(false);
  setMomoStatus('朗讀已停止。可以修改作品後重新朗讀。');
}
function startMomoSpeech() {
  const words = document.getElementById('momo-essay')?.value.trim();
  if (!words) { setMomoStatus('請先輸入作文文字。'); return; }
  if (!('speechSynthesis' in window)) { setMomoStatus('這個瀏覽器沒有朗讀功能，請改用新版 Chrome、Edge 或 Safari。'); return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(words);
  utterance.lang = 'zh-TW';
  utterance.rate = Number(document.getElementById('momo-rate')?.value) || .9;
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(v => /^zh[-_]TW/i.test(v.lang)) || voices.find(v => /^zh/i.test(v.lang)) || null;
  utterance.onstart = () => { if (momoUtterance !== utterance) return; setMomoSpeaking(true); setMomoStatus('墨墨正在朗讀你的作品……'); };
  utterance.onend = () => { if (momoUtterance !== utterance) return; momoUtterance=null; setMomoSpeaking(false); setMomoStatus('讀完了！你最喜歡自己寫的哪一句呢？'); };
  utterance.onerror = event => {
    if (momoUtterance !== utterance) return;
    momoUtterance=null; setMomoSpeaking(false);
    setMomoStatus(event.error === 'canceled' ? '朗讀已停止。' : '無法朗讀，請檢查中文語音設定或換一個瀏覽器。');
  };
  momoUtterance = utterance;
  setMomoStatus('墨墨準備開口了……');
  speechSynthesis.speak(utterance);
}
function toggleMomoPause() {
  if (!momoUtterance || !('speechSynthesis' in window)) { setMomoStatus('請先開始朗讀。'); return; }
  if (speechSynthesis.paused) { speechSynthesis.resume(); setMomoSpeaking(true); setMomoStatus('墨墨繼續朗讀……'); }
  else { speechSynthesis.pause(); setMomoSpeaking(false); setMomoStatus('墨墨先休息一下。'); }
}
function loadMomoOcrScript() {
  if (window.Tesseract?.createWorker) return Promise.resolve();
  if (window.momoOcrLoading) return window.momoOcrLoading;
  window.momoOcrLoading = new Promise((resolve,reject) => {
    const script=document.createElement('script');
    script.src='https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
    script.onload=()=>window.Tesseract?.createWorker ? resolve() : reject(new Error('OCR unavailable'));
    script.onerror=()=>reject(new Error('OCR unavailable'));
    document.head.appendChild(script);
  }).catch(error=>{window.momoOcrLoading=null;throw error;});
  return window.momoOcrLoading;
}
async function recognizeMomoPhoto() {
  const file = document.getElementById('momo-photo')?.files?.[0];
  const button = document.getElementById('momo-ocr-button');
  if (!file) { setMomoStatus('請先選擇作文照片。'); return; }
  if (momoOcrBusy) return;
  momoOcrBusy=true; if(button)button.disabled=true;
  let worker=null;
  try {
    setMomoStatus('正在下載繁體中文辨識工具，第一次可能需要稍等……');
    await loadMomoOcrScript();
    worker=await Tesseract.createWorker('chi_tra',1,{logger:m=>{
      if (m.status === 'recognizing text') setMomoStatus('正在辨識照片……'+Math.round((m.progress||0)*100)+'%');
    }});
    const result=await worker.recognize(file);
    const text=(result.data.text||'').trim();
    if(!text) { setMomoStatus('沒有辨識出文字。請換一張明亮、平整的照片，或手動輸入。'); return; }
    const editor=document.getElementById('momo-essay');
    if (editor) {
      if (editor.value.trim() && !confirm('辨識結果會取代目前文字，確定繼續嗎？')) {
        setMomoStatus('已保留原本輸入的文字。'); return;
      }
      editor.value=text;
      editor.dispatchEvent(new Event('input',{bubbles:true}));
    }
    setMomoStatus('辨識完成！請老師對照原稿逐字確認，修正後再朗讀。');
  } catch (_) {
    setMomoStatus('照片辨識失敗，可能是網路或模型下載問題。仍可使用手動輸入。');
  } finally {
    if(worker) try {await worker.terminate();}catch(_){}
    momoOcrBusy=false; if(button)button.disabled=false;
  }
}

document.addEventListener('change', event => {
  if (event.target.id !== 'momo-photo') return;
  if (momoPhotoUrl) URL.revokeObjectURL(momoPhotoUrl);
  const file=event.target.files?.[0];
  momoPhotoUrl=file ? URL.createObjectURL(file) : null;
  const preview=document.getElementById('momo-preview');
  if (preview) {preview.src=momoPhotoUrl||'';preview.hidden=!file;}
  setMomoStatus(file ? '照片已選好。按下辨識後，請老師核對內容。' : '尚未選擇照片。');
});
document.addEventListener('input', event => {
  if (event.target.id === 'momo-essay') {
    const el=document.getElementById('momo-count');
    if(el)el.textContent=event.target.value.replace(/\s/g,'').length+' 字';
  }
  if (event.target.id === 'momo-rate') {
    const el=document.getElementById('momo-rate-value');
    if(el)el.textContent=event.target.value+' 倍';
  }
});
