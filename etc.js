const PAGES=[['index.html','🏠 แอป'],['library.html','📚 คลังความรู้'],['recipes.html','🍜 สูตรอาหาร'],['thailand.html','🗺 เที่ยวไทย'],['health.html','💪 สุขภาพ'],['money.html','💵 การเงิน'],['english.html','🔤 อังกฤษ'],['tech.html','💻 เทคโนโลยี'],['history.html','🏯 ประวัติศาสตร์'],['space.html','🪐 ดาราศาสตร์'],['maze.html','🌀 เขาวงกต'],['labyrinth.html','🚪 ประตู'],['science.html','🔬 วิทยาศาสตร์'],['travel-world.html','✈ ต่างประเทศ'],['garden.html','🌱 สวนครัว'],['geography.html','🌍 ภูมิศาสตร์'],['japanese.html','🇯🇵 ญี่ปุ่น'],['animals.html','🐘 สัตว์'],['music.html','🎵 ดนตรี'],['sports.html','⚽ กีฬา'],['art.html','🎨 ศิลปะ'],['korean.html','🇰🇷 เกาหลี'],['herbs.html','🌿 สมุนไพร'],['festivals.html','🎉 เทศกาล']];
let th='light';try{th=localStorage.getItem('etcth')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}catch(e){}
document.documentElement.dataset.theme=th;
function thm(){th=th=='dark'?'light':'dark';try{localStorage.setItem('etcth',th)}catch(e){}document.documentElement.dataset.theme=th}
addEventListener('DOMContentLoaded',()=>{const cur=location.pathname.split('/').pop()||'index.html';
document.body.insertAdjacentHTML('afterbegin','<header><b>ETC</b><span>🪙 <span id="cn">'+coins()+'</span> <button onclick="thm()">🌓</button></span></header><nav>'+PAGES.map(p=>`<a href="${p[0]}" class="${p[0]==cur?'on':''}">${p[1]}</a>`).join('')+'</nav>');
document.body.insertAdjacentHTML('beforeend','<footer><button onclick="door()">🚪 ประตูสุ่ม</button><br>ETC · ทุกหน้าอยู่ในโฟลเดอร์เดียวกัน</footer>');
const q=document.getElementById('q');if(q)q.oninput=()=>document.querySelectorAll('.item').forEach(e=>e.hidden=!e.textContent.toLowerCase().includes(q.value.toLowerCase()))});

function door(){const c=location.pathname.split('/').pop()||'index.html',o=PAGES.filter(p=>p[0]!=c);addCoin(1);location.href=o[Math.floor(Math.random()*o.length)][0]}
function coins(){try{return +localStorage.getItem('etccoins')||0}catch(e){return 0}}
function addCoin(n){try{localStorage.setItem('etccoins',coins()+n)}catch(e){}const e=document.getElementById('cn');if(e)e.textContent=coins()}
function spendCoin(n){if(coins()<n)return false;try{localStorage.setItem('etccoins',coins()-n)}catch(e){}const e=document.getElementById('cn');if(e)e.textContent=coins();return true}
try{const a=localStorage.getItem('etcaccent');if(a)document.documentElement.style.setProperty('--pri',a)}catch(e){}
