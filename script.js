const places=[
{name:"গজনী অবকাশ কেন্দ্র",upazila:"ঝিনাইগাতী",category:"প্রকৃতি",lat:25.196,lon:90.014,image:"assets/images.jpeg",desc:"গারো পাহাড় অঞ্চলের অন্যতম পরিচিত ভ্রমণস্থান। টিলা, বন, জলাশয় ও পর্যটন অবকাঠামোর জন্য জনপ্রিয়।",maps:"গজনী অবকাশ কেন্দ্র, ঝিনাইগাতী, শেরপুর"},
{name:"মধুটিলা ইকোপার্ক",upazila:"নালিতাবাড়ী",category:"পার্ক",lat:25.137,lon:90.064,image:"",desc:"পাহাড়ি অরণ্য, টিলা, ভিউ পয়েন্ট ও বিনোদন সুবিধার জন্য পরিচিত ইকোপার্ক।",maps:"Madhutila Eco Park, Nalitabari, Sherpur"},
{name:"পানিহাটা–তারানি পাহাড়",upazila:"নালিতাবাড়ী",category:"প্রকৃতি",lat:25.173,lon:90.112,image:"",desc:"সীমান্তের গারো পাহাড়, ভোগাই নদী ও সবুজ টিলার দৃশ্যের জন্য আকর্ষণীয়।",maps:"Panihata Tarani Pahar, Nalitabari, Sherpur"},
{name:"নয়াবাড়ির টিলা",upazila:"শ্রীবরদী",category:"প্রকৃতি",lat:25.215,lon:89.925,image:"",desc:"গারো পাহাড়ের টিলাভূমি ও প্রাকৃতিক দৃশ্য উপভোগের একটি স্থান।",maps:"Noyabari Tila, Sreebardi, Sherpur"},
{name:"রাজা পাহাড়",upazila:"শ্রীবরদী",category:"প্রকৃতি",lat:25.215,lon:89.885,image:"",desc:"শেরপুরের গারো পাহাড় এলাকার একটি পরিচিত প্রাকৃতিক ভ্রমণ স্পট।",maps:"Raja Pahar, Sreebardi, Sherpur"},
{name:"বাবেলাকোনা",upazila:"শ্রীবরদী",category:"প্রকৃতি",lat:25.230,lon:89.900,image:"",desc:"পাহাড়ি প্রকৃতি ও সীমান্ত অঞ্চলের সবুজ পরিবেশের জন্য পরিচিত।",maps:"Babelakona, Sherpur"},
{name:"DC Park / কালেক্টরেট পার্ক",upazila:"শেরপুর সদর",category:"পার্ক",lat:25.020,lon:90.015,image:"",desc:"শেরপুর শহরের পরিচিত নগর পার্ক; পরিবার ও অবসর কাটানোর জন্য ব্যবহৃত হয়।",maps:"DC Park Sherpur"},
{name:"DC Lake Park",upazila:"শেরপুর সদর",category:"পার্ক",lat:25.022,lon:90.018,image:"",desc:"শহরের মধ্যে লেক ও সবুজ পরিবেশকেন্দ্রিক একটি ঘোরার স্থান।",maps:"DC Lake Park Sherpur"},
{name:"Golden Valley Park",upazila:"শেরপুর সদর",category:"বিনোদন",lat:25.025,lon:90.080,image:"",desc:"বাজিতখিলা এলাকার পরিচিত বিনোদন ও ঘোরার জায়গা।",maps:"Golden Valley Park, Sherpur"},
{name:"Orchid Parjatan Kendra & Resort",upazila:"শেরপুর সদর",category:"বিনোদন",lat:25.010,lon:90.060,image:"",desc:"শেরপুরে অবকাশ ও বিনোদনের জন্য পরিচিত পর্যটন কেন্দ্র ও রিসোর্ট।",maps:"Orchid Parjatan Kendra Sherpur"},
{name:"শের আলী গাজী গেটওয়ে",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.018,lon:90.014,image:"",desc:"শেরপুরের ইতিহাস ও স্থানীয় ঐতিহ্যের সঙ্গে যুক্ত একটি স্মারক স্থাপনা।",maps:"Sher Ali Gazi Gateway Sherpur"},
{name:"মাইসাহেবা জামে মসজিদ",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.018,lon:90.012,image:"",desc:"শেরপুর শহরের ঐতিহ্যবাহী ধর্মীয় স্থাপনাগুলোর একটি।",maps:"Moysaheba Jame Mosque Sherpur"},
{name:"Pone Tin Ani Jomidar Bari",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.022,lon:90.030,image:"",desc:"শেরপুরের জমিদারি ঐতিহ্যের সঙ্গে যুক্ত একটি ঐতিহাসিক স্থাপনা।",maps:"Pone Tin Ani Jomidar Bari Sherpur"},
{name:"বারোমারি মিশন",upazila:"নালিতাবাড়ী",category:"সংস্কৃতি",lat:25.137,lon:90.084,image:"",desc:"নালিতাবাড়ীর ধর্মীয় ও সাংস্কৃতিক ঐতিহ্যের সঙ্গে যুক্ত গুরুত্বপূর্ণ স্থান।",maps:"Baromari Mission Nalitabari Sherpur"},
{name:"কাটাখালী ব্রিজ — মুক্তিযুদ্ধ স্মৃতিচিহ্ন",upazila:"ঝিনাইগাতী",category:"ঐতিহাসিক",lat:25.085,lon:90.035,image:"",desc:"মুক্তিযুদ্ধের স্মৃতির সঙ্গে যুক্ত ঐতিহাসিক স্থান ও স্মৃতিচিহ্ন।",maps:"Katakhali Bridge Liberation War Monument Sherpur"},
{name:"খড়িয়া শ্বেতশুভ্র কাশবন",upazila:"শেরপুর সদর",category:"প্রকৃতি",lat:25.040,lon:90.100,image:"",desc:"কাশফুল ও খোলা প্রাকৃতিক পরিবেশের জন্য স্থানীয়ভাবে পরিচিত একটি ছবি তোলার স্পট।",maps:"Kharia White Kashbon Sherpur"},
{name:"Dikpara Bil",upazila:"শেরপুর সদর",category:"প্রকৃতি",lat:25.030,lon:90.100,image:"",desc:"বিল ও জলাভূমির প্রাকৃতিক দৃশ্য উপভোগের একটি স্থানীয় স্থান।",maps:"Dikpara Bil Sherpur"},
{name:"শহীদ সরণী",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.020,lon:90.010,image:"",desc:"শহরের ইতিহাস ও স্মৃতির সঙ্গে যুক্ত একটি স্থান।",maps:"Shahid Sharani Sherpur"},
{name:"শেরপুর কেন্দ্রীয় শহীদ মিনার",upazila:"শেরপুর সদর",category:"সংস্কৃতি",lat:25.020,lon:90.010,image:"",desc:"ভাষা আন্দোলনের স্মৃতিবাহী সাংস্কৃতিক ও নাগরিক স্থান।",maps:"Sherpur Central Shaheed Minar"},
{name:"পায়রা চত্বর",upazila:"শেরপুর সদর",category:"বিনোদন",lat:25.020,lon:90.005,image:"",desc:"শহরের একটি পরিচিত নাগরিক landmark।",maps:"Pigeons Square Sherpur"}
];

const key="mamunSherpurVisitedV2";
let visited=JSON.parse(localStorage.getItem(key)||"[]");

const facebookUrl="https://www.facebook.com/fbyourmamun";
const whatsappUrl="https://wa.me/8801410452007";
const siteUrl=location.origin+location.pathname;

/* Compact boxed map */
const extraStyle=document.createElement("style");
extraStyle.textContent=`
#mapWrap{
width:min(100%,900px);
margin:18px auto;
padding:8px;
background:rgba(255,255,255,.96);
border:1px solid rgba(16,185,129,.28);
border-radius:18px;
box-shadow:0 8px 28px rgba(0,0,0,.18);
}
#map{
height:320px!important;
min-height:320px!important;
max-height:320px!important;
width:100%!important;
border-radius:12px!important;
overflow:hidden;
}
#mamunCommunity{
max-width:900px;
margin:24px auto;
padding:20px;
border-radius:18px;
background:#fff;
box-shadow:0 8px 28px rgba(0,0,0,.10);
}
.mamun-community-title{margin:0 0 8px;font-size:24px}
.mamun-community-sub{margin:0 0 16px;color:#666}
.mamun-location-form{display:grid;gap:10px;margin:16px 0}
.mamun-location-form input,.mamun-location-form textarea,.mamun-location-form select{
width:100%;box-sizing:border-box;padding:12px;border:1px solid #ddd;border-radius:10px;font:inherit;
}
.mamun-location-form button{
padding:12px 16px;border:0;border-radius:10px;background:#25D366;color:#fff;font-weight:700;cursor:pointer;
}
.mamun-facebook-comments{
margin-top:22px;padding-top:18px;border-top:1px solid #eee;
}
.mamun-footer{
margin-top:28px;padding:22px 15px;text-align:center;background:#061c14;color:#fff;
}
.mamun-footer b{color:#35e58b}
@media(max-width:600px){
#map{height:260px!important;min-height:260px!important;max-height:260px!important}
#mamunCommunity{margin:18px 10px;padding:16px}
.mamun-community-title{font-size:21px}
}
`;
document.head.appendChild(extraStyle);

/* Put the map inside a compact box without changing the existing HTML file. */
(function wrapMap(){
const mapEl=document.getElementById("map");
if(mapEl && !document.getElementById("mapWrap")){
const wrap=document.createElement("div");
wrap.id="mapWrap";
mapEl.parentNode.insertBefore(wrap,mapEl);
wrap.appendChild(mapEl);
}
})();

const map=L.map("map").setView([25.06,90.03],10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);
const layer=L.layerGroup().addTo(map);

const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const safe=s=>String(s).replace(/'/g,"\\'");
const isVisited=n=>visited.includes(n);
const mapUrl=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const videoUrl=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q+" Sherpur");

function toggleVisited(n){
visited=isVisited(n)?visited.filter(x=>x!==n):[...visited,n];
localStorage.setItem(key,JSON.stringify(visited));
render();
stats();
}

function photoStyle(p){
return p.image?`background-image:linear-gradient(#0000,#0009),url('${p.image}')`:"";
}

function openModal(p){
document.getElementById("modalBody").innerHTML=`
<h2>${esc(p.name)}</h2>
<div class="modalimg" style="${photoStyle(p)}"></div>
<div class="chips"><span class="chip">${esc(p.category)}</span><span class="chip">${esc(p.upazila)}</span></div>
<p>${esc(p.desc)}</p>
<p><b>📍 এলাকা:</b> ${esc(p.upazila)}, শেরপুর</p>
<div class="buttons">
<a class="small primary" target="_blank" href="${mapUrl(p.maps)}">🗺️ Google Maps</a>
<a class="small" target="_blank" href="${videoUrl(p.name)}">▶️ YouTube ভিডিও</a>
<button class="small" onclick="toggleVisited('${safe(p.name)}');closeModal()"> ${isVisited(p.name)?"↩️ আনমার্ক":"✅ আমি ঘুরেছি"}</button>
<button class="small" onclick="sharePlace('${safe(p.name)}')">↗️ Share</button>
<button class="small" onclick="window.print()">🖨️ Print</button>
</div>
`;
document.getElementById("modal").classList.add("show");
}

function closeModal(){document.getElementById("modal").classList.remove("show");}

function sharePlace(n){
const u=location.href.split("#")[0];
if(navigator.share)navigator.share({title:"MAMUN SHERPUR TOURIST — "+n,text:"শেরপুরের "+n,url:u+"#places"});
else navigator.clipboard?.writeText(u+"#places").then(()=>alert("লিংক কপি হয়েছে"));
}

function markers(){
layer.clearLayers();
places.forEach(p=>{
const m=L.marker([p.lat,p.lon]).addTo(layer);
m.bindPopup(`<b>${esc(p.name)}</b><br>${esc(p.upazila)}<br><button onclick="openByName('${safe(p.name)}')">বিস্তারিত</button>`);
});
}

function openByName(n){
const p=places.find(x=>x.name===n);
if(p)openModal(p);
}

function render(){
const q=document.getElementById("search").value.toLowerCase().trim();
const c=document.getElementById("cat").value;
const u=document.getElementById("up").value;
const arr=places.filter(p=>
(c==="all"||p.category===c)&&
(u==="all"||p.upazila===u)&&
(!q||p.name.toLowerCase().includes(q)||p.upazila.toLowerCase().includes(q))
);
document.getElementById("cards").innerHTML=arr.map(p=>`
<article class="card ${isVisited(p.name)?"visited":""}">
<div class="photo" style="${photoStyle(p)}"><div class="loc">📍 ${esc(p.name)}<br><small>${esc(p.upazila)}, শেরপুর</small></div></div>
<div class="body">
<h3>${esc(p.name)}</h3>
<div class="chips"><span class="chip">${esc(p.category)}</span><span class="chip">${esc(p.upazila)}</span></div>
<p>${esc(p.desc)}</p>
<div class="buttons">
<button class="small primary" onclick="openByName('${safe(p.name)}')">বিস্তারিত</button>
<button class="small" onclick="toggleVisited('${safe(p.name)}')">${isVisited(p.name)?"✓ ঘোরা হয়েছে":"আমি ঘুরেছি"}</button>
<a class="small" target="_blank" href="${mapUrl(p.maps)}">📍 Map</a>
</div>
</div></article>`).join("")||"<p>কোনো স্থান পাওয়া যায়নি।</p>";
}

function stats(){
const v=places.filter(p=>isVisited(p.name)).length;
document.getElementById("total").textContent=places.length;
document.getElementById("visited").textContent=v;
document.getElementById("coverage").textContent=Math.round(v/places.length*100)+"%";
}

/* Facebook + WhatsApp floating buttons */
function addContactButtons(){
if(document.getElementById("mamunContactButtons"))return;
const style=document.createElement("style");
style.textContent=`
#mamunContactButtons{position:fixed;right:18px;bottom:18px;z-index:99999;display:flex;flex-direction:column;gap:10px}
.mamun-contact-btn{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff!important;font-size:24px;font-weight:bold;box-shadow:0 5px 18px rgba(0,0,0,.30);border:2px solid #fff}
.mamun-facebook{background:#1877f2}.mamun-whatsapp{background:#25D366}
@media(max-width:600px){#mamunContactButtons{right:12px;bottom:12px;gap:8px}.mamun-contact-btn{width:46px;height:46px;font-size:21px}}
`;
document.head.appendChild(style);
const box=document.createElement("div");
box.id="mamunContactButtons";
box.innerHTML=`
<a class="mamun-contact-btn mamun-facebook" href="${facebookUrl}" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
<a class="mamun-contact-btn mamun-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" title="WhatsApp">☏</a>`;
document.body.appendChild(box);
}

/* Community section:
   - Facebook Comments lets visitors comment through Facebook.
   - Location suggestions are sent to Mamun via WhatsApp for approval.
   Static GitHub Pages cannot automatically save arbitrary visitor submissions
   without a database/backend. */
function addCommunity(){
if(document.getElementById("mamunCommunity"))return;

const section=document.createElement("section");
section.id="mamunCommunity";
section.innerHTML=`
<h2 class="mamun-community-title">💬 ভ্রমণকারীদের কমিউনিটি</h2>
<p class="mamun-community-sub">আপনার অভিজ্ঞতা লিখুন এবং শেরপুরের নতুন ভ্রমণস্থান প্রস্তাব করুন।</p>

<h3>📍 নতুন লোকেশন যোগ করার প্রস্তাব</h3>
<form class="mamun-location-form" id="mamunLocationForm">
<input id="locName" required placeholder="লোকেশনের নাম">
<input id="locArea" required placeholder="উপজেলা / এলাকা">
<select id="locCategory">
<option value="প্রকৃতি">প্রকৃতি</option>
<option value="ঐতিহাসিক">ঐতিহাসিক</option>
<option value="পার্ক">পার্ক</option>
<option value="বিনোদন">বিনোদন</option>
<option value="সংস্কৃতি">সংস্কৃতি</option>
</select>
<input id="locMap" placeholder="Google Maps লিংক (যদি থাকে)">
<textarea id="locInfo" rows="3" placeholder="লোকেশন সম্পর্কে সংক্ষিপ্ত তথ্য"></textarea>
<button type="submit">🟢 লোকেশন প্রস্তাব পাঠান</button>
</form>

<div class="mamun-facebook-comments">
<h3>💬 মন্তব্য করুন</h3>
<div class="fb-comments" data-href="${siteUrl}" data-width="100%" data-numposts="10"></div>
</div>
`;
document.body.appendChild(section);

document.getElementById("mamunLocationForm").addEventListener("submit",e=>{
e.preventDefault();
const name=document.getElementById("locName").value.trim();
const area=document.getElementById("locArea").value.trim();
const cat=document.getElementById("locCategory").value;
const maps=document.getElementById("locMap").value.trim();
const info=document.getElementById("locInfo").value.trim();

const text=
"নতুন শেরপুর লোকেশন প্রস্তাব%0A%0A"+
"📍 নাম: "+encodeURIComponent(name)+"%0A"+
"🏠 এলাকা: "+encodeURIComponent(area)+"%0A"+
"🏷️ ক্যাটাগরি: "+encodeURIComponent(cat)+"%0A"+
"🗺️ Maps: "+encodeURIComponent(maps||"নেই")+"%0A"+
"📝 তথ্য: "+encodeURIComponent(info||"নেই");

window.open(whatsappUrl+"?text="+text,"_blank");
});

const fb=document.createElement("script");
fb.async=true;
fb.defer=true;
fb.crossOrigin="anonymous";
fb.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
document.body.appendChild(fb);
}

/* Footer */
function addFooter(){
if(document.getElementById("mamunFooter"))return;
const footer=document.createElement("footer");
footer.id="mamunFooter";
footer.className="mamun-footer";
footer.innerHTML=`<div>© ${new Date().getFullYear()} MAMUN SHERPUR TOURIST</div><div>Developer by <b>Mamun SmartPoint</b></div>`;
document.body.appendChild(footer);
}

["search","cat","up"].forEach(id=>{
const element=document.getElementById(id);
if(element){
element.addEventListener("input",render);
element.addEventListener("change",render);
}
});

document.getElementById("year").textContent=new Date().getFullYear();

addContactButtons();
addCommunity();
addFooter();
markers();
render();
stats();

document.getElementById("modal").addEventListener("click",e=>{
if(e.target.id==="modal")closeModal();
});
