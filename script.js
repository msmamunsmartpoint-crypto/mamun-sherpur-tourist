const places=[
{name:"গজনী অবকাশ কেন্দ্র",upazila:"ঝিনাইগাতী",category:"প্রকৃতি",lat:25.196,lon:90.014,image:"assets/images.jpeg",desc:"গারো পাহাড় অঞ্চলের অন্যতম পরিচিত ভ্রমণস্থান। টিলা, বন, জলাশয় ও পর্যটন অবকাঠামোর জন্য জনপ্রিয়।",maps:"গজনী অবকাশ কেন্দ্র, ঝিনাইগাতী, শেরপুর"},
{name:"মধুটিলা ইকোপার্ক",upazila:"নালিতাবাড়ী",category:"পার্ক",lat:25.137,lon:90.064,image:"",desc:"পাহাড়ি অরণ্য, টিলা, ভিউ পয়েন্ট ও বিনোদন সুবিধার জন্য পরিচিত ইকোপার্ক।",maps:"Madhutila Eco Park, Nalitabari, Sherpur"},
{name:"পানিহাটা–তারানি পাহাড়",upazila:"নালিতাবাড়ী",category:"প্রকৃতি",lat:25.173,lon:90.112,image:"",desc:"সীমান্তের গারো পাহাড়, ভোগাই নদী ও সবুজ টিলার দৃশ্যের জন্য আকর্ষণীয়।",maps:"Panihata Tarani Pahar, Nalitabari, Sherpur"},
{name:"নয়াবাড়ির টিলা",upazila:"শ্রীবরদী",category:"প্রকৃতি",lat:25.215,lon:89.925,image:"",desc:"গারো পাহাড়ের টিলাভূমি ও প্রাকৃতিক দৃশ্য উপভোগের একটি স্থান।",maps:"Noyabari Tila, Sreebardi, Sherpur"},
{name:"রাজা পাহাড়",upazila:"শ্রীবরদী",category:"প্রকৃতি",lat:25.215,lon:89.885,image:"",desc:"শেরপুরের গারো পাহাড় এলাকার একটি পরিচিত প্রাকৃতিক ভ্রমণ স্পট।",maps:"Raja Pahar, Sreebardi, Sherpur"},
{name:"বাবেলাকোনা",upazila:"শ্রীবরদী",category:"প্রকৃতি",lat:25.23,lon:89.9,image:"",desc:"পাহাড়ি প্রকৃতি ও সীমান্ত অঞ্চলের সবুজ পরিবেশের জন্য পরিচিত।",maps:"Babelakona, Sherpur"},
{name:"DC Park / কালেক্টরেট পার্ক",upazila:"শেরপুর সদর",category:"পার্ক",lat:25.02,lon:90.015,image:"",desc:"শেরপুর শহরের পরিচিত নগর পার্ক; পরিবার ও অবসর কাটানোর জন্য ব্যবহৃত হয়।",maps:"DC Park Sherpur"},
{name:"DC Lake Park",upazila:"শেরপুর সদর",category:"পার্ক",lat:25.022,lon:90.018,image:"",desc:"শহরের মধ্যে লেক ও সবুজ পরিবেশকেন্দ্রিক একটি ঘোরার স্থান।",maps:"DC Lake Park Sherpur"},
{name:"Golden Valley Park",upazila:"শেরপুর সদর",category:"বিনোদন",lat:25.025,lon:90.08,image:"",desc:"বাজিতখিলা এলাকার পরিচিত বিনোদন ও ঘোরার জায়গা।",maps:"Golden Valley Park, Sherpur"},
{name:"Orchid Parjatan Kendra & Resort",upazila:"শেরপুর সদর",category:"বিনোদন",lat:25.01,lon:90.06,image:"",desc:"শেরপুরে অবকাশ ও বিনোদনের জন্য পরিচিত পর্যটন কেন্দ্র ও রিসোর্ট।",maps:"Orchid Parjatan Kendra Sherpur"},
{name:"শের আলী গাজী গেটওয়ে",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.018,lon:90.014,image:"",desc:"শেরপুরের ইতিহাস ও স্থানীয় ঐতিহ্যের সঙ্গে যুক্ত একটি স্মারক স্থাপনা।",maps:"Sher Ali Gazi Gateway Sherpur"},
{name:"মাইসাহেবা জামে মসজিদ",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.018,lon:90.012,image:"",desc:"শেরপুর শহরের ঐতিহ্যবাহী ধর্মীয় স্থাপনাগুলোর একটি।",maps:"Moysaheba Jame Mosque Sherpur"},
{name:"Pone Tin Ani Jomidar Bari",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.022,lon:90.03,image:"",desc:"শেরপুরের জমিদারি ঐতিহ্যের সঙ্গে যুক্ত একটি ঐতিহাসিক স্থাপনা।",maps:"Pone Tin Ani Jomidar Bari Sherpur"},
{name:"বারোমারি মিশন",upazila:"নালিতাবাড়ী",category:"সংস্কৃতি",lat:25.137,lon:90.084,image:"",desc:"নালিতাবাড়ীর ধর্মীয় ও সাংস্কৃতিক ঐতিহ্যের সঙ্গে যুক্ত গুরুত্বপূর্ণ স্থান।",maps:"Baromari Mission Nalitabari Sherpur"},
{name:"কাটাখালী ব্রিজ — মুক্তিযুদ্ধ স্মৃতিচিহ্ন",upazila:"ঝিনাইগাতী",category:"ঐতিহাসিক",lat:25.085,lon:90.035,image:"",desc:"মুক্তিযুদ্ধের স্মৃতির সঙ্গে যুক্ত ঐতিহাসিক স্থান ও স্মৃতিচিহ্ন।",maps:"Katakhali Bridge Liberation War Monument Sherpur"},
{name:"খড়িয়া শ্বেতশুভ্র কাশবন",upazila:"শেরপুর সদর",category:"প্রকৃতি",lat:25.04,lon:90.1,image:"",desc:"কাশফুল ও খোলা প্রাকৃতিক পরিবেশের জন্য স্থানীয়ভাবে পরিচিত একটি ছবি তোলার স্পট।",maps:"Kharia White Kashbon Sherpur"},
{name:"Dikpara Bil",upazila:"শেরপুর সদর",category:"প্রকৃতি",lat:25.03,lon:90.1,image:"",desc:"বিল ও জলাভূমির প্রাকৃতিক দৃশ্য উপভোগের একটি স্থানীয় স্থান।",maps:"Dikpara Bil Sherpur"},
{name:"শহীদ সরণী",upazila:"শেরপুর সদর",category:"ঐতিহাসিক",lat:25.02,lon:90.01,image:"",desc:"শহরের ইতিহাস ও স্মৃতির সঙ্গে যুক্ত একটি স্থান।",maps:"Shahid Sharani Sherpur"},
{name:"শেরপুর কেন্দ্রীয় শহীদ মিনার",upazila:"শেরপুর সদর",category:"সংস্কৃতি",lat:25.02,lon:90.01,image:"",desc:"ভাষা আন্দোলনের স্মৃতিবাহী সাংস্কৃতিক ও নাগরিক স্থান।",maps:"Sherpur Central Shaheed Minar"},
{name:"পায়রা চত্বর",upazila:"শেরপুর সদর",category:"বিনোদন",lat:25.02,lon:90.005,image:"",desc:"শহরের একটি পরিচিত নাগরিক landmark।",maps:"Pigeons Square Sherpur"},
{
  name: "মামুন স্মার্টপয়েন্ট",
  upazila: "শ্রীবরদী",
  address: "কক্সবাজার সুপারমার্কেট, চর শিমুল চূড়া, শ্রীবরদী - শেরপুর",
  category: "সেবা কেন্দ্র",
  lat: 25.110843,
  lon: 89.899210,
  image: "",
  desc: "মোবাইল ও কম্পিউটার সার্ভিসিং, সফটওয়্যার, অনলাইন আবেদন, SIM-সংক্রান্ত সেবা, মোবাইল রিচার্জ, প্রিন্টিং, টাইপিং এবং স্মার্টফোন ও অ্যাক্সেসরিজ কেনাবেচা।",
  maps: "https://maps.app.goo.gl/qgSpxiU7q64mVKug8"
}
];

const key="mamunSherpurVisitedV4";
let visited=JSON.parse(localStorage.getItem(key)||"[]");
const facebookUrl="https://www.facebook.com/fbyourmamun";
const whatsappUrl="https://wa.me/8801410452007";

const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
const safe=s=>String(s??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'");
const isVisited=n=>visited.includes(n);
const mapUrl=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const videoUrl=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q+" Sherpur");

function toggleVisited(n){
  visited=isVisited(n)?visited.filter(x=>x!==n):[...visited,n];
  localStorage.setItem(key,JSON.stringify(visited)); render(); stats();
}
function photoStyle(p){return p.image?`background-image:linear-gradient(#0000,#0009),url('${p.image}')`:"";}

function detailData(p){
  let highlights=[];
  if(p.category==="প্রকৃতি") highlights=["প্রাকৃতিক দৃশ্য","সবুজ পরিবেশ","ছবি তোলার সুযোগ","স্থানীয় ভূপ্রকৃতি"];
  else if(p.category==="পার্ক") highlights=["পার্কের পরিবেশ","বিনোদন সুবিধা","পরিবার নিয়ে সময় কাটানোর সুযোগ","ছবি তোলার জায়গা"];
  else if(p.category==="ঐতিহাসিক") highlights=["ঐতিহাসিক স্মৃতি","স্থানীয় ঐতিহ্য","স্থাপনা/স্মৃতিচিহ্ন","ছবি তোলার সুযোগ"];
  else if(p.category==="সংস্কৃতি") highlights=["স্থানীয় সংস্কৃতি","ঐতিহ্যবাহী পরিবেশ","সাংস্কৃতিক গুরুত্ব","ছবি তোলার সুযোগ"];
  else highlights=["বিনোদন সুবিধা","পরিবার নিয়ে সময় কাটানোর সুযোগ","ছবি তোলার স্থান"];
  return {
    intro:p.desc,
    history:"এই স্থানের ইতিহাসের আরও তথ্য স্থানীয়/সরকারি উৎস দিয়ে যাচাই করে যোগ করা যাবে।",
    highlights,
    howToGo:`শেরপুর শহর থেকে ${p.upazila} উপজেলার দিকে গিয়ে স্থানীয় অটো, সিএনজি বা রিজার্ভ গাড়িতে এই স্থানে যাওয়া যায়। Google Maps বাটন থেকে অবস্থান দেখে রুট ঠিক করুন।`,
    transport:`শেরপুর শহর → ${p.upazila} → স্থানীয় যানবাহন → ${p.name}।`,
    bestTime:"সাধারণত দিনের আলোতে ভ্রমণ সুবিধাজনক। আবহাওয়া ও স্থানীয় পরিস্থিতি আগে যাচাই করুন।",
    entryFee:"বর্তমান প্রবেশমূল্য/টিকিট থাকলে ভ্রমণের আগে কর্তৃপক্ষের কাছ থেকে যাচাই করুন।",
    facilities:["স্থানীয় পরিবহন","কাছাকাছি বাজার/দোকান","প্রয়োজন অনুযায়ী স্থানীয় খাবারের ব্যবস্থা"],
    food:"কাছাকাছি বাজার বা স্থানীয় খাবারের দোকানে খাবারের ব্যবস্থা সম্পর্কে আগে জেনে নিন।",
    stay:"নিকটবর্তী উপজেলা বা শেরপুর শহরে থাকার ব্যবস্থা খুঁজে নেওয়া সুবিধাজনক।",
    safety:"স্থানীয় প্রশাসন/নিরাপত্তা নির্দেশনা মেনে চলুন। পাহাড়, নদী, সীমান্ত বা নির্জন এলাকায় সতর্ক থাকুন।",
    tips:["দিনের আলোতে ভ্রমণ করুন","পানি ও প্রয়োজনীয় ওষুধ সঙ্গে রাখুন","প্রকৃতি ও ঐতিহ্য রক্ষা করুন","ময়লা ফেলবেন না"],
    gallery:p.image?[p.image]:[]
  };
}
function detailList(arr){return arr&&arr.length?"<ul>"+arr.map(x=>"<li>"+esc(x)+"</li>").join("")+"</ul>":"<p>তথ্য শিগগির যোগ করা হবে।</p>";}

function openFullDetails(p){
  if(!p)return;
  const d=detailData(p), hero=d.gallery[0]||"";
  const gallery=d.gallery.map(x=>`<img src="${esc(x)}" alt="${esc(p.name)}">`).join("");
  document.getElementById("modalBody").innerHTML=`
  <div class="mst-detail">
    <h2>📍 ${esc(p.name)}</h2>
    <div class="chips"><span class="chip">${esc(p.category)}</span><span class="chip">${esc(p.upazila)}</span></div>
    ${hero?`<div class="mst-hero" style="background-image:url('${esc(hero)}')"></div>`:""}
    <div class="mst-box"><h3>📝 পূর্ণ বিস্তারিত</h3><p>${esc(d.intro)}</p></div>
    <div class="mst-grid">
      <div class="mst-box"><h3>📖 ইতিহাস</h3><p>${esc(d.history)}</p></div>
      <div class="mst-box"><h3>👀 দেখার মতো কী কী আছে?</h3>${detailList(d.highlights)}</div>
      <div class="mst-box"><h3>🚗 কীভাবে যাবেন?</h3><p>${esc(d.howToGo)}</p></div>
      <div class="mst-box"><h3>🚌 যাতায়াত</h3><p>${esc(d.transport)}</p></div>
      <div class="mst-box"><h3>🕐 উপযুক্ত সময়</h3><p>${esc(d.bestTime)}</p></div>
      <div class="mst-box"><h3>🎟️ প্রবেশ মূল্য</h3><p>${esc(d.entryFee)}</p></div>
      <div class="mst-box"><h3>🏪 সুবিধা</h3>${detailList(d.facilities)}</div>
      <div class="mst-box"><h3>🍽️ খাবার</h3><p>${esc(d.food)}</p></div>
      <div class="mst-box"><h3>🏨 থাকার ব্যবস্থা</h3><p>${esc(d.stay)}</p></div>
      <div class="mst-box"><h3>⚠️ নিরাপত্তা</h3><p>${esc(d.safety)}</p></div>
      <div class="mst-box"><h3>💡 ভ্রমণ টিপস</h3>${detailList(d.tips)}</div>
    </div>
    ${gallery?`<div class="mst-box"><h3>📸 Gallery</h3><div class="mst-gallery">${gallery}</div></div>`:""}
    <div class="mst-actions">
      <a class="mst-primary" target="_blank" href="${mapUrl(p.maps)}">🗺️ Google Maps</a>
      <a target="_blank" href="${videoUrl(p.name)}">▶️ YouTube</a>
      <button onclick="toggleVisited('${safe(p.name)}');openFullDetails(places.find(x=>x.name==='${safe(p.name)}'))">${isVisited(p.name)?"↩️ আনমার্ক":"✅ আমি ঘুরেছি"}</button>
      <button onclick="sharePlace('${safe(p.name)}')">↗️ Share</button>
      <button onclick="window.print()">🖨️ Print</button>
    </div>
  </div>`;
  document.getElementById("modal").classList.add("show");
}
function openByName(n){const p=places.find(x=>x.name===n);if(p)openFullDetails(p);}
function closeModal(){document.getElementById("modal").classList.remove("show");}
function sharePlace(n){
  const u=location.href.split("#")[0]+"#places";
  if(navigator.share)navigator.share({title:"MAMUN SHERPUR TOURIST — "+n,text:"শেরপুরের "+n,url:u}).catch(()=>{});
  else if(navigator.clipboard)navigator.clipboard.writeText(u).then(()=>alert("লিংক কপি হয়েছে"));
}
function markers(){
  layer.clearLayers();
  places.forEach(p=>{
    const m=L.marker([p.lat,p.lon]).addTo(layer);
    m.bindPopup(`<b>${esc(p.name)}</b><br>${esc(p.upazila)}<br><br><button onclick="openByName('${safe(p.name)}')">বিস্তারিত দেখুন</button>`);
  });
}
function render(){
  const q=(document.getElementById("search")?.value||"").toLowerCase().trim();
  const c=document.getElementById("cat")?.value||"all";
  const u=document.getElementById("up")?.value||"all";
  const cards=document.getElementById("cards"); if(!cards)return;
  const arr=places.filter(p=>(c==="all"||p.category===c)&&(u==="all"||p.upazila===u)&&(!q||p.name.toLowerCase().includes(q)||p.upazila.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)));
  cards.innerHTML=arr.map(p=>`
    <article class="card ${isVisited(p.name)?"visited":""}">
      <div class="photo" style="${photoStyle(p)}"><div class="loc">📍 ${esc(p.name)}<br><small>${esc(p.upazila)}, শেরপুর</small></div></div>
      <div class="body"><h3>${esc(p.name)}</h3>
      <div class="chips"><span class="chip">${esc(p.category)}</span><span class="chip">${esc(p.upazila)}</span></div>
      <p>${esc(p.desc)}</p><div class="buttons">
      <button class="small primary" onclick="openByName('${safe(p.name)}')">বিস্তারিত</button>
      <button class="small" onclick="toggleVisited('${safe(p.name)}')">${isVisited(p.name)?"✓ ঘোরা হয়েছে":"আমি ঘুরেছি"}</button>
      <a class="small" target="_blank" href="${mapUrl(p.maps)}">📍 Map</a>
      </div></div></article>`).join("")||"<p>কোনো স্থান পাওয়া যায়নি।</p>";
}
function stats(){
  const v=places.filter(p=>isVisited(p.name)).length;
  if(document.getElementById("total"))document.getElementById("total").textContent=places.length;
  if(document.getElementById("visited"))document.getElementById("visited").textContent=v;
  if(document.getElementById("coverage"))document.getElementById("coverage").textContent=Math.round(v/places.length*100)+"%";
}

const css=document.createElement("style");
css.textContent=`
.mapbox{border-radius:18px!important;overflow:hidden!important}.map{height:320px!important}
.mst-detail{color:#fff}.mst-detail h2{font-size:28px;margin:0 0 8px}.mst-hero{height:280px;border-radius:14px;margin:14px 0;background-size:cover;background-position:center;background-color:#0b2b1e}
.mst-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.mst-box{padding:15px;border-radius:14px;background:#f4faf7;color:#123;border:1px solid #d9eee4;margin-top:12px}.mst-box h3{margin:0 0 8px;font-size:17px}.mst-box p,.mst-box li{line-height:1.7}
.mst-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.mst-gallery img{width:100%;height:150px;object-fit:cover;border-radius:10px}.mst-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.mst-actions a,.mst-actions button{border:0;border-radius:9px;padding:10px 13px;text-decoration:none;cursor:pointer;font:inherit;background:#e8f1ed;color:#123}.mst-actions .mst-primary{background:#20d982;color:#062016}
#mamunCommunity{max-width:900px;margin:24px auto;padding:20px;border-radius:18px;background:#fff;color:#123;box-sizing:border-box}.mamun-location-form{display:grid;gap:10px}.mamun-location-form input,.mamun-location-form textarea,.mamun-location-form select{width:100%;box-sizing:border-box;padding:12px;border:1px solid #ddd;border-radius:10px;font:inherit}.mamun-location-form button{padding:12px;border:0;border-radius:10px;background:#25D366;color:#fff;font-weight:700;cursor:pointer}
.mamun-footer{margin-top:28px;padding:22px 15px;text-align:center;background:#061c14;color:#fff}.mamun-footer b{color:#35e58b}
#mamunContactButtons{position:fixed;right:18px;bottom:18px;z-index:99999;display:flex;flex-direction:column;gap:10px}.mamun-contact-btn{width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff!important;font-size:24px;font-weight:bold;box-shadow:0 5px 18px #0005;border:2px solid #fff}.mamun-facebook{background:#1877f2}.mamun-whatsapp{background:#25D366}
@media(max-width:700px){.map{height:250px!important}.mst-detail h2{font-size:22px}.mst-hero{height:210px}.mst-grid{grid-template-columns:1fr}.mst-gallery{grid-template-columns:repeat(2,1fr)}.mst-gallery img{height:120px}#cards{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important}.card .photo{height:145px!important}.card .body{padding:11px!important}.card h3{font-size:16px!important}.card p{font-size:12px!important}}
@media(max-width:380px){#cards{grid-template-columns:1fr!important}}
`;
document.head.appendChild(css);

/* FIX: index.html has duplicate id="map". Use the actual Leaflet DIV. */
const mapEl=document.querySelector("section#map .map")||document.querySelector(".map");
if(!mapEl){throw new Error("MAMUN SHERPUR TOURIST: Leaflet map element not found");}
const map=L.map(mapEl).setView([25.06,90.03],10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(map);
const layer=L.layerGroup().addTo(map);

function addContactButtons(){
  if(document.getElementById("mamunContactButtons"))return;
  const box=document.createElement("div");box.id="mamunContactButtons";
  box.innerHTML=`<a class="mamun-contact-btn mamun-facebook" href="${facebookUrl}" target="_blank" rel="noopener">f</a><a class="mamun-contact-btn mamun-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener">☏</a>`;
  document.body.appendChild(box);
}
function addCommunity(){
  if(document.getElementById("mamunCommunity"))return;
  const s=document.createElement("section");s.id="mamunCommunity";
  s.innerHTML=`<h2>💬 ভ্রমণকারীদের কমিউনিটি</h2><p>নতুন শেরপুরের লোকেশন জানাতে নিচের ফর্ম ব্যবহার করুন। প্রস্তাবটি আপনার WhatsApp-এ যাবে।</p>
  <h3>📍 নতুন লোকেশন প্রস্তাব করুন</h3><form class="mamun-location-form" id="mamunLocationForm">
  <input id="locName" required placeholder="লোকেশনের নাম"><input id="locArea" required placeholder="উপজেলা / এলাকা">
  <select id="locCategory"><option>প্রকৃতি</option><option>ঐতিহাসিক</option><option>পার্ক</option><option>সংস্কৃতি</option><option>বিনোদন</option></select>
  <input id="locMap" placeholder="Google Maps লিংক"><textarea id="locInfo" rows="4" placeholder="লোকেশন সম্পর্কে তথ্য"></textarea>
  <button type="submit">🟢 লোকেশন প্রস্তাব পাঠান</button></form><hr><h3>💬 মন্তব্য</h3><p>সবার জন্য স্থায়ী মন্তব্য ব্যবস্থা Firebase যোগ করার পর চালু হবে।</p>`;
  document.body.appendChild(s);
  document.getElementById("mamunLocationForm").addEventListener("submit",e=>{
    e.preventDefault();
    const msg=`নতুন শেরপুর লোকেশন প্রস্তাব\n\n📍 নাম: ${locName.value}\n🏠 এলাকা: ${locArea.value}\n🏷️ ক্যাটাগরি: ${locCategory.value}\n🗺️ Maps: ${locMap.value||"নেই"}\n📝 তথ্য: ${locInfo.value||"নেই"}`;
    window.open(whatsappUrl+"?text="+encodeURIComponent(msg),"_blank");
  });
}
function addFooter(){
  if(document.getElementById("mamunFooter"))return;
  const f=document.createElement("footer");f.id="mamunFooter";f.className="mamun-footer";
  f.innerHTML=`© ${new Date().getFullYear()} MAMUN SHERPUR TOURIST — Developer by <b>Mamun SmartPoint</b>`;
  document.body.appendChild(f);
}

["search","cat","up"].forEach(id=>{const el=document.getElementById(id);if(el){el.addEventListener("input",render);el.addEventListener("change",render);}});
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
addContactButtons();addCommunity();addFooter();markers();render();stats();
const modal=document.getElementById("modal");if(modal)modal.addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
