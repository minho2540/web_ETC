(function(){const h=document.head,ref=h.querySelector('link[href$="etc.css"]');
['https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&display=swap','https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css','https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'].forEach(u=>{const l=document.createElement('link');l.rel='stylesheet';l.href=u;ref?h.insertBefore(l,ref):h.appendChild(l)})})();
const API='https://script.google.com/macros/s/AKfycby797aOM1Wn4u9Z9Urn22JjvgK9f9UzBTsjFzFmVd-pE41i4tzxtCPlA08C7PJm2UH8/exec';
const PAGES=[['index.html','🏠 แอปของฉัน','หลัก'],['library.html','📚 คลังความรู้','หลัก'],
['recipes.html','🍜 สูตรอาหาร','ชีวิตประจำวัน'],['health.html','💪 สุขภาพ','ชีวิตประจำวัน'],['money.html','💵 การเงิน','ชีวิตประจำวัน'],['garden.html','🌱 สวนครัว','ชีวิตประจำวัน'],['herbs.html','🌿 สมุนไพร','ชีวิตประจำวัน'],
['thailand.html','🗺 เที่ยวไทย','เที่ยว'],['travel-world.html','✈ ต่างประเทศ','เที่ยว'],['geography.html','🌍 ภูมิศาสตร์','เที่ยว'],
['english.html','🔤 อังกฤษ','ภาษา'],['japanese.html','🇯🇵 ญี่ปุ่น','ภาษา'],['korean.html','🇰🇷 เกาหลี','ภาษา'],
['tech.html','💻 เทคโนโลยี','วิทย์และเทค'],['science.html','🔬 วิทยาศาสตร์','วิทย์และเทค'],['space.html','🪐 ดาราศาสตร์','วิทย์และเทค'],['animals.html','🐘 สัตว์','วิทย์และเทค'],
['history.html','🏯 ประวัติศาสตร์','วัฒนธรรม'],['art.html','🎨 ศิลปะ','วัฒนธรรม'],['music.html','🎵 ดนตรี','วัฒนธรรม'],['sports.html','⚽ กีฬา','วัฒนธรรม'],['festivals.html','🎉 เทศกาล','วัฒนธรรม'],
['maze.html','🌀 เขาวงกต','เกม'],['labyrinth.html','🚪 ประตู','เกม']];
const NOEDIT=['index.html','maze.html','labyrinth.html'];
const EDITABLE=PAGES.map(p=>p[0]).filter(f=>!NOEDIT.includes(f));
const CUR=location.pathname.split('/').pop()||'index.html';
let th='light';try{th=localStorage.getItem('etcth')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch(e){}
document.documentElement.dataset.theme=th;document.documentElement.dataset.bsTheme=th;
function thm(){th=th=='dark'?'light':'dark';try{localStorage.setItem('etcth',th)}catch(e){}document.documentElement.dataset.theme=th;document.documentElement.dataset.bsTheme=th}
function adm(){try{return JSON.parse(sessionStorage.getItem('etcadmin'))}catch(e){return null}}
async function apiPost(b){const a=adm()||{};const r=await fetch(API,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify(Object.assign({u:a.u,p:a.p},b))});const t=await r.text();try{return JSON.parse(t)}catch(e){return{}}}
function logout(){try{sessionStorage.removeItem('etcadmin')}catch(e){}location.href='index.html'}
function menu(o){document.getElementById('dr').classList.toggle('open',!!o);document.getElementById('ov').classList.toggle('open',!!o)}
function loginBox(){if(document.getElementById('lg'))return;
document.body.insertAdjacentHTML('beforeend','<div id="lg" class="mdl"><div class="card"><h3>🔐 เข้าสู่ระบบผู้ดูแล</h3><input id="lu" placeholder="ชื่อผู้ใช้" autocapitalize="none"><input id="lp" type="password" placeholder="รหัสผ่าน" onkeydown="if(event.key===\'Enter\')doLogin()"><p id="lm" class="out"></p><button class="btn btn-primary" onclick="doLogin()">เข้าสู่ระบบ</button><button class="btn btn-secondary" onclick="document.getElementById(\'lg\').remove()">ยกเลิก</button></div></div>');
document.getElementById('lu').focus()}
async function doLogin(){const u=document.getElementById('lu').value.trim(),p=document.getElementById('lp').value,m=document.getElementById('lm');m.textContent='กำลังตรวจสอบ...';
try{const t=await fetch(API,{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({a:'login',u,p})}).then(x=>x.text());let r={};try{r=JSON.parse(t)}catch(e){}
if(r.v!==2){m.textContent='Apps Script ยังไม่ได้อัปเดตเป็นเวอร์ชัน 2 (ดูวิธีใน README)';return}
if(!r.ok){m.textContent='ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';return}
sessionStorage.setItem('etcadmin',JSON.stringify({u,p}));location.href='admin.html'}catch(e){m.textContent='เชื่อมต่อเซิร์ฟเวอร์ไม่ได้'}}
function bindQ(){const q=document.getElementById('q');if(q)q.oninput=()=>document.querySelectorAll('.item').forEach(e=>e.hidden=!e.textContent.toLowerCase().includes(q.value.toLowerCase()))}
function applyHtml(h){const m=document.querySelector('main');if(m&&h!=null){m.innerHTML=h;bindQ()}}
function loadContent(){if(!EDITABLE.includes(CUR))return;let c=null;try{c=localStorage.getItem('etcc_'+CUR)}catch(e){}if(c)applyHtml(c);
fetch(API+'?p='+encodeURIComponent(CUR)).then(r=>r.json()).then(d=>{if(d.v!==2)return;
if(d.html!=null){try{localStorage.setItem('etcc_'+CUR,d.html)}catch(e){}if(d.html!==c)applyHtml(d.html)}
else if(c){try{localStorage.removeItem('etcc_'+CUR)}catch(e){}location.reload()}}).catch(()=>{})}
addEventListener('DOMContentLoaded',()=>{const a=adm();
const gs=[...new Set(PAGES.map(p=>p[2]))];
const dr='<aside id="dr">'+gs.map(g=>'<div class="gh">'+g+'</div><div class="list-group list-group-flush mb-2">'+PAGES.filter(p=>p[2]==g).map(p=>`<a href="${p[0]}" class="list-group-item list-group-item-action${p[0]==CUR?' active':''}">${p[1]}</a>`).join('')+'</div>').join('')+(a?'<div class="gh">ผู้ดูแล</div><div class="list-group list-group-flush"><a href="admin.html" class="list-group-item list-group-item-action'+(CUR=='admin.html'?' active':'')+'">⚙ หน้าแอดมิน</a></div>':'')+'</aside><div id="ov" onclick="menu(0)"></div>';
const hd='<header id="top"><button class="hb mb" onclick="menu(1)" aria-label="เมนู">☰</button>'+(a?'<a class="hb" href="admin.html"><i class="bi bi-gear"></i> แอดมิน</a><button class="hb" onclick="logout()"><i class="bi bi-box-arrow-right"></i> ออก</button>':'<button class="hb" onclick="loginBox()"><i class="bi bi-person-circle"></i> เข้าสู่ระบบ</button>')+'<a class="logo" href="index.html">ETC</a><span class="sp"></span><span class="hb">🪙 <b id="cn">'+coins()+'</b></span><button class="hb" onclick="thm()" aria-label="สลับธีม">🌓</button></header>';
document.body.insertAdjacentHTML('afterbegin',hd+dr);
document.body.insertAdjacentHTML('beforeend','<footer><button class="btn btn-primary" onclick="door()">🚪 ประตูสุ่ม</button><br>ETC</footer>'+(a&&EDITABLE.includes(CUR)?'<a class="fab btn btn-primary" href="admin.html?p='+CUR+'"><i class="bi bi-pencil-square"></i> แก้ไขหน้านี้</a>':''));
const on=document.querySelector('#dr .active'),d=document.getElementById('dr');if(on)d.scrollTop=Math.max(0,on.offsetTop-120);
bindQ();loadContent();bsify(document.body);new MutationObserver(m=>m.forEach(x=>x.addedNodes.forEach(bsify))).observe(document.body,{childList:true,subtree:true})});
function door(){const o=PAGES.filter(p=>p[0]!=CUR);addCoin(1);location.href=o[Math.floor(Math.random()*o.length)][0]}
function coins(){try{return +localStorage.getItem('etccoins')||0}catch(e){return 0}}
function addCoin(n){try{localStorage.setItem('etccoins',coins()+n)}catch(e){}const e=document.getElementById('cn');if(e)e.textContent=coins()}
function spendCoin(n){if(coins()<n)return false;try{localStorage.setItem('etccoins',coins()-n)}catch(e){}const e=document.getElementById('cn');if(e)e.textContent=coins();return true}
try{const a=localStorage.getItem('etcaccent');if(a)document.documentElement.style.setProperty('--pri',a)}catch(e){}
function bsify(r){if(!r||r.nodeType!==1)return;const q=t=>[...(r.matches&&r.matches(t)?[r]:[]),...r.querySelectorAll(t)];
q('.b').forEach(e=>{if(e.classList.contains('btn'))return;e.classList.add('btn',e.classList.contains('d')?'btn-danger':e.classList.contains('g')?'btn-secondary':'btn-primary');if(e.closest('.row'))e.classList.add('btn-sm')});
q('input:not([type=checkbox]):not([type=radio]):not([type=range]),textarea').forEach(e=>e.classList.add('form-control'));
q('select').forEach(e=>e.classList.add('form-select'));
q('table').forEach(e=>e.classList.add('table'))}
