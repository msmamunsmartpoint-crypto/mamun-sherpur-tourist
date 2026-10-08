/* ============================================================
   MAMUN SHERPUR TOURIST — COMPLETE script.js
   শুধু এই পুরো ফাইলটি কপি করে GitHub-এর script.js-এ Paste করুন।
   ============================================================ */

const places = [
  {
    name:"গজনী অবকাশ কেন্দ্র", upazila:"ঝিনাইগাতী", category:"প্রকৃতি",
    lat:25.196, lon:90.014, image:"assets/images.jpeg",
    desc:"গারো পাহাড় অঞ্চলের অন্যতম পরিচিত ভ্রমণস্থান। পাহাড়, টিলা, বন, জলাশয় ও পর্যটন অবকাঠামোর জন্য জনপ্রিয়।",
    maps:"গজনী অবকাশ কেন্দ্র, ঝিনাইগাতী, শেরপুর",
    details:{
      intro:"গজনী অবকাশ কেন্দ্র ঝিনাইগাতী উপজেলার গারো পাহাড় অঞ্চলের অন্যতম পরিচিত পর্যটন কেন্দ্র। প্রকৃতি, পাহাড়ি টিলা, জলাশয় ও ভিউ পয়েন্টের কারণে এটি শেরপুরের জনপ্রিয় ভ্রমণস্থানের একটি।",
      history:"গজনী অবকাশ কেন্দ্র শেরপুরের পর্যটন বিকাশের সঙ্গে দীর্ঘদিন ধরে যুক্ত একটি পরিচিত স্থান।",
      highlights:["গারো পাহাড়","টিলা ও সবুজ বন","জলাশয়","ভিউ পয়েন্ট","ছবি তোলার সুন্দর স্থান","বিনোদন সুবিধা"],
      howToGo:"শেরপুর শহর থেকে ঝিনাইগাতীর দিকে গিয়ে স্থানীয় অটো, সিএনজি বা রিজার্ভ গাড়িতে গজনী অবকাশ কেন্দ্রে যাওয়া যায়।",
      transport:"শেরপুর শহর → ঝিনাইগাতী → গজনী অবকাশ কেন্দ্র।",
      bestTime:"শীত ও শুষ্ক মৌসুম সাধারণত আরামদায়ক। বর্ষায় প্রকৃতি সুন্দর থাকে, তবে রাস্তার অবস্থা আগে যাচাই করা ভালো।",
      entryFee:"বর্তমান প্রবেশমূল্য ও রাইডের মূল্য ভ্রমণের আগে কর্তৃপক্ষের কাছ থেকে যাচাই করুন।",
      facilities:["পার্কিং","খাবারের দোকান","বিনোদন সুবিধা","ছবি তোলার স্থান"],
      food:"কাছাকাছি স্থানীয় বাজার ও শেরপুর শহরে খাবারের ব্যবস্থা পাওয়া যায়।",
      stay:"শেরপুর শহর বা ঝিনাইগাতী এলাকায় থাকার ব্যবস্থা নেওয়া যায়।",
      safety:"পাহাড়ি এলাকায় নির্ধারিত পথ অনুসরণ করুন এবং সন্ধ্যার পর সতর্ক থাকুন।",
      tips:["সকালে যাত্রা শুরু করুন","পানি সঙ্গে রাখুন","আরামদায়ক জুতা পরুন","ময়লা ফেলবেন না"],
      gallery:["assets/images.jpeg"]
    }
  },
  {
    name:"মধুটিলা ইকোপার্ক", upazila:"নালিতাবাড়ী", category:"পার্ক",
    lat:25.137, lon:90.064, image:"",
    desc:"পাহাড়ি অরণ্য, টিলা, ভিউ পয়েন্ট ও বিনোদন সুবিধার জন্য পরিচিত ইকোপার্ক।",
    maps:"Madhutila Eco Park, Nalitabari, Sherpur",
    details:{
      intro:"নালিতাবাড়ী উপজেলার সীমান্তবর্তী গারো পাহাড় অঞ্চলের একটি বড় বনভিত্তিক পর্যটন কেন্দ্র। টিলা, বন, লেক, ভিউ পয়েন্ট ও বিনোদন সুবিধার কারণে এটি জনপ্রিয়।",
      history:"মধুটিলা অঞ্চলকে ইকোপার্ক হিসেবে পর্যটন ব্যবহারের জন্য উন্নত করা হয়েছে।",
      highlights:["গারো পাহাড় ও টিলা","ওয়াচ টাওয়ার","লেক","শিশুদের বিনোদন","পিকনিক স্পট","বন ও জীববৈচিত্র্য"],
      howToGo:"শেরপুর শহর থেকে নালিতাবাড়ীর দিকে গিয়ে স্থানীয় অটো, সিএনজি বা রিজার্ভ গাড়িতে মধুটিলা ইকোপার্কে যাওয়া যায়।",
      transport:"শেরপুর → নালিতাবাড়ী → মধুটিলা ইকোপার্ক।",
      bestTime:"শীত ও শুষ্ক মৌসুম ভ্রমণের জন্য আরামদায়ক।",
      entryFee:"বর্তমান প্রবেশমূল্য ও রাইডের মূল্য আগে যাচাই করুন।",
      facilities:["পার্কিং","খাবারের ব্যবস্থা","পিকনিক স্পট","শিশুদের বিনোদন","বিশ্রামের জায়গা"],
      food:"মধুটিলা ও নালিতাবাড়ী এলাকার স্থানীয় খাবারের দোকান পাওয়া যায়।",
      stay:"নালিতাবাড়ী বা শেরপুর শহরে থাকা সুবিধাজনক।",
      safety:"বনাঞ্চলে নির্ধারিত পথ অনুসরণ করুন এবং বন্যপ্রাণী থেকে দূরত্ব বজায় রাখুন।",
      tips:["পুরো পার্ক ঘুরতে সময় রাখুন","পানি সঙ্গে রাখুন","শিশুদের নজরে রাখুন","প্রকৃতি নষ্ট করবেন না"],
      gallery:[]
    }
  },
  {
    name:"পানিহাটা–তারানি পাহাড়", upazila:"নালিতাবাড়ী", category:"প্রকৃতি",
    lat:25.173, lon:90.112, image:"",
    desc:"সীমান্তের গারো পাহাড়, ভোগাই নদী ও সবুজ টিলার দৃশ্যের জন্য আকর্ষণীয়।",
    maps:"Panihata Tarani Pahar, Nalitabari, Sherpur",
    details:{
      intro:"নালিতাবাড়ী সীমান্ত এলাকার পাহাড়, ভোগাই নদী ও সবুজ প্রকৃতির জন্য পরিচিত একটি আকর্ষণীয় ভ্রমণস্থান।",
      history:"স্থানটি সীমান্তবর্তী গারো পাহাড় ও ভোগাই নদীর প্রাকৃতিক পরিবেশের সঙ্গে যুক্ত।",
      highlights:["তারানি পাহাড়","ভোগাই নদী","সীমান্তের পাহাড়ি দৃশ্য","সবুজ টিলা","ছবি তোলার স্থান"],
      howToGo:"শেরপুর শহর থেকে নালিতাবাড়ী হয়ে পানিহাটা-তারানি পাহাড়ের দিকে যাওয়া যায়। স্থানীয় অটো, সিএনজি বা রিজার্ভ গাড়ি ব্যবহার করা সুবিধাজনক।",
      transport:"শেরপুর → নালিতাবাড়ী → পানিহাটা–তারানি পাহাড়।",
      bestTime:"শীত ও পরিষ্কার আবহাওয়ায় পাহাড় ও নদীর দৃশ্য উপভোগ করা ভালো।",
      entryFee:"স্থানীয়ভাবে কোনো ফি থাকলে ভ্রমণের আগে যাচাই করুন।",
      facilities:["স্থানীয় পরিবহন","খাবারের ব্যবস্থা সীমিত","প্রকৃতি উপভোগের স্থান"],
      food:"নালিতাবাড়ী বাজার থেকে প্রয়োজনীয় খাবার ও পানি নিয়ে যাওয়া ভালো।",
      stay:"নালিতাবাড়ী বা শেরপুর শহরে থাকা যায়।",
      safety:"সীমান্ত এলাকা হওয়ায় স্থানীয় প্রশাসন ও নিরাপত্তা নির্দেশনা মেনে চলুন।",
      tips:["সকালে যাওয়া ভালো","পানি সঙ্গে রাখুন","সংবেদনশীল সীমান্ত এলাকায় প্রবেশ করবেন না","ময়লা ফেলবেন না"],
      gallery:[]
    }
  },
  {
    name:"নয়াবাড়ির টিলা", upazila:"শ্রীবরদী", category:"প্রকৃতি",
    lat:25.215, lon:89.925, image:"",
    desc:"গারো পাহাড়ের টিলাভূমি ও প্রাকৃতিক দৃশ্য উপভোগের একটি স্থান।",
    maps:"Noyabari Tila, Sreebardi, Sherpur",
    details:{
      intro:"শ্রীবরদীর গারো পাহাড় অঞ্চলের টিলাভূমি ও সবুজ প্রকৃতি উপভোগের একটি সুন্দর স্থান।",
      history:"স্থানীয় পাহাড়ি ভূপ্রকৃতি ও গারো পাহাড় অঞ্চলের প্রাকৃতিক ঐতিহ্যের সঙ্গে যুক্ত।",
      highlights:["টিলা","পাহাড়ি সবুজ","প্রাকৃতিক দৃশ্য","ছবি তোলার স্থান"],
      howToGo:"শ্রীবরদী উপজেলা হয়ে স্থানীয় যানবাহনে নয়াবাড়ির টিলার দিকে যাওয়া যায়।",
      transport:"শেরপুর → শ্রীবরদী → স্থানীয় যানবাহন → নয়াবাড়ির টিলা।",
      bestTime:"শীত ও শুষ্ক মৌসুম।",
      entryFee:"নির্দিষ্ট প্রবেশমূল্য থাকলে স্থানীয়ভাবে যাচাই করুন।",
      facilities:["স্থানীয় বাজার","স্থানীয় পরিবহন"],
      food:"যাত্রার আগে খাবার ও পানি সঙ্গে রাখা ভালো।",
      stay:"শ্রীবরদী বা শেরপুর শহরে থাকা সুবিধাজনক।",
      safety:"পাহাড়ি ঢালে সাবধানে চলুন।",
      tips:["দিনের আলোতে ভ্রমণ করুন","স্থানীয়দের পরামর্শ নিন","প্রকৃতি পরিষ্কার রাখুন"],
      gallery:[]
    }
  },
  {
    name:"রাজা পাহাড়", upazila:"শ্রীবরদী", category:"প্রকৃতি",
    lat:25.215, lon:89.885, image:"",
    desc:"শেরপুরের গারো পাহাড় এলাকার একটি পরিচিত প্রাকৃতিক ভ্রমণ স্পট।",
    maps:"Raja Pahar, Sreebardi, Sherpur",
    details:{
      intro:"শ্রীবরদীর গারো পাহাড় এলাকার প্রাকৃতিক সৌন্দর্য উপভোগের একটি পরিচিত স্থান।",
      history:"গারো পাহাড়ের স্থানীয় প্রাকৃতিক ও পাহাড়ি পরিবেশের অংশ।",
      highlights:["পাহাড়","সবুজ বন","টিলা","প্রাকৃতিক ভিউ"],
      howToGo:"শ্রীবরদী হয়ে স্থানীয় যানবাহনে রাজা পাহাড় এলাকায় যাওয়া যায়।",
      transport:"শেরপুর → শ্রীবরদী → রাজা পাহাড়।",
      bestTime:"শীত ও শুষ্ক মৌসুম।",
      entryFee:"স্থানীয়ভাবে যাচাই করুন।",
      facilities:["স্থানীয় বাজার","স্থানীয় যানবাহন"],
      food:"প্রয়োজনীয় খাবার ও পানি সঙ্গে রাখা ভালো।",
      stay:"শ্রীবরদী বা শেরপুর শহর।",
      safety:"পাহাড়ি এলাকায় সতর্ক থাকুন।",
      tips:["দিনের মধ্যে ঘুরে ফিরুন","স্থানীয় নির্দেশনা মানুন","ময়লা ফেলবেন না"],
      gallery:[]
    }
  },
  {
    name:"বাবেলাকোনা", upazila:"শ্রীবরদী", category:"প্রকৃতি",
    lat:25.230, lon:89.900, image:"",
    desc:"পাহাড়ি প্রকৃতি ও সীমান্ত অঞ্চলের সবুজ পরিবেশের জন্য পরিচিত।",
    maps:"Babelakona, Sherpur",
    details:{
      intro:"শ্রীবরদীর পাহাড়ি ও সীমান্তবর্তী পরিবেশের একটি পরিচিত প্রাকৃতিক স্থান।",
      history:"গারো পাহাড় অঞ্চলের স্থানীয় প্রাকৃতিক ও সাংস্কৃতিক পরিবেশের সঙ্গে যুক্ত।",
      highlights:["পাহাড়ি প্রকৃতি","সবুজ বন","সীমান্তের দৃশ্য","স্থানীয় সংস্কৃতি"],
      howToGo:"শ্রীবরদী উপজেলা হয়ে স্থানীয় যানবাহনে বাবেলাকোনা এলাকায় যাওয়া যায়।",
      transport:"শেরপুর → শ্রীবরদী → বাবেলাকোনা।",
      bestTime:"শীত ও শুষ্ক মৌসুম।",
      entryFee:"স্থানীয়ভাবে যাচাই করুন।",
      facilities:["স্থানীয় বাজার","স্থানীয় পরিবহন"],
      food:"আগে থেকে খাবার ও পানি সঙ্গে রাখুন।",
      stay:"শ্রীবরদী বা শেরপুর শহর।",
      safety:"সীমান্ত এলাকায় স্থানীয় নির্দেশনা মেনে চলুন।",
      tips:["দিনের আলোতে ভ্রমণ করুন","স্থানীয়দের সম্মান করুন","প্রকৃতি রক্ষা করুন"],
      gallery:[]
    }
  }
];

/* সহজে আরও স্থান যোগ করার Template:
{
 name:"নতুন স্থানের নাম",
 upazila:"উপজেলা",
 category:"প্রকৃতি",
 lat:25.000, lon:90.000,
 image:"assets/photo.jpg",
 desc:"ছোট পরিচিতি",
 maps:"Google Maps search text",
 details:{
   intro:"বিস্তারিত পরিচিতি",
   history:"ইতিহাস",
   highlights:["দেখার জায়গা ১","দেখার জায়গা ২"],
   howToGo:"কীভাবে যাবেন",
   transport:"কোন যানবাহনে যাবেন",
   bestTime:"কখন যাবেন",
   entryFee:"প্রবেশ মূল্য",
   facilities:["সুবিধা ১","সুবিধা ২"],
   food:"খাবারের ব্যবস্থা",
   stay:"থাকার ব্যবস্থা",
   safety:"নিরাপত্তা",
   tips:["টিপস ১","টিপস ২"],
   gallery:["assets/photo1.jpg","assets/photo2.jpg"]
 }
}
*/

const key="mamunSherpurVisitedV3";
let visited=JSON.parse(localStorage.getItem(key)||"[]");

const facebookUrl="https://www.facebook.com/fbyourmamun";
const whatsappUrl="https://wa.me/8801410452007";

const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[m]));
const safe=s=>String(s??"").replace(/\\/g,"\\\\").replace(/'/g,"\\'");
const isVisited=n=>visited.includes(n);
const mapUrl=q=>"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(q);
const videoUrl=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q+" Sherpur");

function photoStyle(p){
  return p.image
    ? `background-image:linear-gradient(#0000,#0009),url('${p.image}')`
    : "";
}

function toggleVisited(n){
  visited=isVisited(n)
    ? visited.filter(x=>x!==n)
    : [...visited,n];
  localStorage.setItem(key,JSON.stringify(visited));
  render();
  stats();
}

function sharePlace(n){
  const u=location.href.split("#")[0];
  if(navigator.share){
    navigator.share({
      title:"MAMUN SHERPUR TOURIST — "+n,
      text:"শেরপুরের "+n,
      url:u+"#places"
    }).catch(()=>{});
  }else{
    navigator.clipboard?.writeText(u+"#places")
      .then(()=>alert("লিংক কপি হয়েছে"));
  }
}

function detailList(arr){
  if(!arr || !arr.length) return "<p>তথ্য শিগগির যোগ করা হবে।</p>";
  return "<ul>"+arr.map(x=>`<li>${esc(x)}</li>`).join("")+"</ul>";
}

function openFullDetails(p){
  if(!p) return;

  const d=p.details||{};
  const gallery=(d.gallery||[]).filter(Boolean);

  const galleryHTML=gallery.length
    ? `<div class="mst-box"><h3>📸 ছবিগুলো</h3>
       <div class="mst-gallery">
       ${gallery.map(src=>`<img src="${esc(src)}" alt="${esc(p.name)}">`).join("")}
       </div></div>`
    : "";

  const hero=gallery[0]||p.image||"";

  document.getElementById("modalBody").innerHTML=`
    <div class="mst-detail">
      <h2>📍 ${esc(p.name)}</h2>

      <div class="chips">
        <span class="chip">${esc(p.category)}</span>
        <span class="chip">${esc(p.upazila)}</span>
      </div>

      ${hero
        ? `<div class="mst-hero" style="background-image:url('${esc(hero)}')"></div>`
        : ""}

      <div class="mst-box">
        <h3>📝 বিস্তারিত পরিচিতি</h3>
        <p>${esc(d.intro||p.desc)}</p>
      </div>

      <div class="mst-grid">

        <div class="mst-box">
          <h3>📖 ইতিহাস</h3>
          <p>${esc(d.history||"তথ্য শিগগির যোগ করা হবে।")}</p>
        </div>

        <div class="mst-box">
          <h3>👀 দেখার মতো কী কী আছে?</h3>
          ${detailList(d.highlights)}
        </div>

        <div class="mst-box">
          <h3>🚗 কীভাবে যাবেন?</h3>
          <p>${esc(d.howToGo||"তথ্য শিগগির যোগ করা হবে।")}</p>
        </div>

        <div class="mst-box">
          <h3>🚌 যাতায়াত</h3>
          <p>${esc(d.transport||"স্থানীয় যানবাহন ব্যবহার করা যায়।")}</p>
        </div>

        <div class="mst-box">
          <h3>🕐 ভ্রমণের উপযুক্ত সময়</h3>
          <p>${esc(d.bestTime||"ভ্রমণের আগে আবহাওয়া যাচাই করুন।")}</p>
        </div>

        <div class="mst-box">
          <h3>🎟️ প্রবেশ মূল্য</h3>
          <p>${esc(d.entryFee||"বর্তমান মূল্য আগে যাচাই করুন।")}</p>
        </div>

        <div class="mst-box">
          <h3>🏪 কী কী সুবিধা আছে?</h3>
          ${detailList(d.facilities)}
        </div>

        <div class="mst-box">
          <h3>🍽️ খাবারের ব্যবস্থা</h3>
          <p>${esc(d.food||"স্থানীয় খাবারের ব্যবস্থা সম্পর্কে আগে জেনে নিন।")}</p>
        </div>

        <div class="mst-box">
          <h3>🏨 থাকার ব্যবস্থা</h3>
          <p>${esc(d.stay||"নিকটবর্তী উপজেলা বা শেরপুর শহরে থাকার ব্যবস্থা খুঁজে নিন।")}</p>
        </div>

        <div class="mst-box">
          <h3>⚠️ নিরাপত্তা</h3>
          <p>${esc(d.safety||"স্থানীয় নিরাপত্তা নির্দেশনা মেনে চলুন।")}</p>
        </div>

        <div class="mst-box">
          <h3>💡 ভ্রমণ টিপস</h3>
          ${detailList(d.tips)}
        </div>

      </div>

      ${galleryHTML}

      <div class="mst-actions">
        <a class="mst-primary" target="_blank" href="${mapUrl(p.maps)}">🗺️ Google Maps</a>
        <a target="_blank" href="${videoUrl(p.name)}">▶️ YouTube</a>
        <button onclick="toggleVisited('${safe(p.name)}');openFullDetails(places.find(x=>x.name==='${safe(p.name)}'))">
          ${isVisited(p.name)?"↩️ আনমার্ক":"✅ আমি ঘুরেছি"}
        </button>
        <button onclick="sharePlace('${safe(p.name)}')">↗️ Share</button>
        <button onclick="window.print()">🖨️ Print</button>
      </div>
    </div>
  `;

  document.getElementById("modal").classList.add("show");
}

function closeModal(){
  document.getElementById("modal").classList.remove("show");
}

function openByName(n){
  const p=places.find(x=>x.name===n);
  if(p) openFullDetails(p);
}

function markers(){
  layer.clearLayers();

  places.forEach(p=>{
    const m=L.marker([p.lat,p.lon]).addTo(layer);
    m.bindPopup(`
      <b>${esc(p.name)}</b><br>
      ${esc(p.upazila)}<br><br>
      <button onclick="openByName('${safe(p.name)}')">বিস্তারিত দেখুন</button>
    `);
  });
}

function render(){
  const search=document.getElementById("search");
  const cat=document.getElementById("cat");
  const up=document.getElementById("up");
  const cards=document.getElementById("cards");

  if(!search||!cat||!up||!cards)return;

  const q=search.value.toLowerCase().trim();
  const c=cat.value;
  const u=up.value;

  const arr=places.filter(p=>
    (c==="all"||p.category===c) &&
    (u==="all"||p.upazila===u) &&
    (!q||
      p.name.toLowerCase().includes(q)||
      p.upazila.toLowerCase().includes(q)||
      p.category.toLowerCase().includes(q)
    )
  );

  cards.innerHTML=arr.map(p=>`
    <article class="card ${isVisited(p.name)?"visited":""}">
      <div class="photo" style="${photoStyle(p)}">
        <div class="loc">
          📍 ${esc(p.name)}<br>
          <small>${esc(p.upazila)}, শেরপুর</small>
        </div>
      </div>

      <div class="body">
        <h3>${esc(p.name)}</h3>

        <div class="chips">
          <span class="chip">${esc(p.category)}</span>
          <span class="chip">${esc(p.upazila)}</span>
        </div>

        <p>${esc(p.desc)}</p>

        <div class="buttons">
          <button class="small primary" onclick="openByName('${safe(p.name)}')">
            বিস্তারিত
          </button>

          <button class="small" onclick="toggleVisited('${safe(p.name)}')">
            ${isVisited(p.name)?"✓ ঘোরা হয়েছে":"আমি ঘুরেছি"}
          </button>

          <a class="small" target="_blank" href="${mapUrl(p.maps)}">
            📍 Map
          </a>
        </div>
      </div>
    </article>
  `).join("") || "<p>কোনো স্থান পাওয়া যায়নি।</p>";
}

function stats(){
  const total=document.getElementById("total");
  const vis=document.getElementById("visited");
  const cov=document.getElementById("coverage");

  const v=places.filter(p=>isVisited(p.name)).length;

  if(total) total.textContent=places.length;
  if(vis) vis.textContent=v;
  if(cov) cov.textContent=Math.round(v/places.length*100)+"%";
}

/* ============================================================
   MAP — ছোট Box
   ============================================================ */

const mainStyle=document.createElement("style");
mainStyle.textContent=`

#mapWrap{
  width:min(100%,900px);
  margin:18px auto;
  padding:8px;
  background:#fff;
  border:1px solid rgba(16,185,129,.35);
  border-radius:18px;
  box-shadow:0 8px 28px rgba(0,0,0,.18);
  box-sizing:border-box;
}

#map{
  height:320px!important;
  min-height:320px!important;
  max-height:320px!important;
  width:100%!important;
  border-radius:12px!important;
  overflow:hidden;
}

.mst-detail{
  max-width:900px;
  margin:auto;
  color:#123;
}

.mst-detail h2{
  margin:0 0 8px;
  font-size:28px;
}

.mst-hero{
  width:100%;
  height:280px;
  margin:14px 0;
  border-radius:16px;
  background-size:cover;
  background-position:center;
  background-color:#0b2b1e;
}

.mst-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px;
  margin-top:12px;
}

.mst-box{
  padding:15px;
  border-radius:14px;
  background:#f4faf7;
  border:1px solid #d9eee4;
  margin-top:12px;
}

.mst-box h3{
  margin:0 0 8px;
  font-size:17px;
}

.mst-box p{
  margin:0;
  line-height:1.7;
}

.mst-box ul{
  margin:0;
  padding-left:20px;
  line-height:1.7;
}

.mst-gallery{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:8px;
}

.mst-gallery img{
  width:100%;
  height:150px;
  object-fit:cover;
  border-radius:10px;
}

.mst-actions{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:16px;
}

.mst-actions a,
.mst-actions button{
  border:0;
  border-radius:9px;
  padding:10px 13px;
  text-decoration:none;
  cursor:pointer;
  font:inherit;
  background:#e8f1ed;
  color:#123;
}

.mst-actions .mst-primary{
  background:#20d982;
  color:#062016;
}

#mamunCommunity{
  max-width:900px;
  margin:24px auto;
  padding:20px;
  border-radius:18px;
  background:#fff;
  box-shadow:0 8px 28px rgba(0,0,0,.10);
  box-sizing:border-box;
}

.mamun-community-title{
  margin:0 0 8px;
  font-size:24px;
}

.mamun-community-sub{
  margin:0 0 16px;
  color:#666;
}

.mamun-location-form{
  display:grid;
  gap:10px;
  margin:16px 0;
}

.mamun-location-form input,
.mamun-location-form textarea,
.mamun-location-form select{
  width:100%;
  box-sizing:border-box;
  padding:12px;
  border:1px solid #ddd;
  border-radius:10px;
  font:inherit;
}

.mamun-location-form button{
  padding:12px 16px;
  border:0;
  border-radius:10px;
  background:#25D366;
  color:#fff;
  font-weight:700;
  cursor:pointer;
}

.mamun-facebook-comments{
  margin-top:22px;
  padding-top:18px;
  border-top:1px solid #eee;
}

.mamun-footer{
  margin-top:28px;
  padding:22px 15px;
  text-align:center;
  background:#061c14;
  color:#fff;
}

.mamun-footer b{
  color:#35e58b;
}

@media(max-width:700px){

  #cards{
    display:grid!important;
    grid-template-columns:repeat(2,minmax(0,1fr))!important;
    gap:12px!important;
  }

  .card{
    width:100%!important;
    min-width:0!important;
  }

  .card .photo{
    height:145px!important;
    min-height:145px!important;
  }

  .card .body{
    padding:11px!important;
  }

  .card h3{
    font-size:16px!important;
  }

  .card p{
    font-size:12px!important;
    line-height:1.45!important;
  }

  .card .small{
    font-size:11px!important;
    padding:7px 8px!important;
  }

  #mapWrap{
    width:calc(100% - 20px)!important;
    margin:16px auto!important;
  }

  #map{
    height:250px!important;
    min-height:250px!important;
    max-height:250px!important;
  }

  .mst-detail h2{
    font-size:22px;
  }

  .mst-hero{
    height:210px;
  }

  .mst-grid{
    grid-template-columns:1fr;
  }

  .mst-gallery{
    grid-template-columns:repeat(2,minmax(0,1fr));
  }

  .mst-gallery img{
    height:120px;
  }

  #mamunCommunity{
    width:calc(100% - 20px);
    margin:18px auto;
    padding:16px;
  }
}

@media(max-width:380px){
  #cards{
    grid-template-columns:1fr!important;
  }
}

`;

document.head.appendChild(mainStyle);

/* Wrap existing map */
(function wrapMap(){
  const mapEl=document.getElementById("map");
  if(mapEl && !document.getElementById("mapWrap")){
    const wrap=document.createElement("div");
    wrap.id="mapWrap";
    mapEl.parentNode.insertBefore(wrap,mapEl);
    wrap.appendChild(mapEl);
  }
})();

/* ============================================================
   CONTACT BUTTONS
   ============================================================ */

function addContactButtons(){
  if(document.getElementById("mamunContactButtons"))return;

  const box=document.createElement("div");
  box.id="mamunContactButtons";

  box.innerHTML=`
    <a class="mamun-contact-btn mamun-facebook"
       href="${facebookUrl}"
       target="_blank"
       rel="noopener noreferrer"
       title="Facebook">f</a>

    <a class="mamun-contact-btn mamun-whatsapp"
       href="${whatsappUrl}"
       target="_blank"
       rel="noopener noreferrer"
       title="WhatsApp">☏</a>
  `;

  document.body.appendChild(box);
}

/* ============================================================
   NEW LOCATION SUGGESTION + COMMENTS PLACEHOLDER
   ============================================================ */

function addCommunity(){
  if(document.getElementById("mamunCommunity"))return;

  const section=document.createElement("section");
  section.id="mamunCommunity";

  section.innerHTML=`
    <h2 class="mamun-community-title">💬 ভ্রমণকারীদের কমিউনিটি</h2>

    <p class="mamun-community-sub">
      নতুন ভ্রমণস্থান জানাতে পারেন। আপনার প্রস্তাব সরাসরি WhatsApp-এ পাঠানো হবে।
    </p>

    <h3>📍 নতুন লোকেশন প্রস্তাব করুন</h3>

    <form class="mamun-location-form" id="mamunLocationForm">

      <input id="locName" required
        placeholder="লোকেশনের নাম">

      <input id="locArea" required
        placeholder="উপজেলা / এলাকা">

      <select id="locCategory">
        <option value="প্রকৃতি">প্রকৃতি</option>
        <option value="ঐতিহাসিক">ঐতিহাসিক</option>
        <option value="পার্ক">পার্ক</option>
        <option value="বিনোদন">বিনোদন</option>
        <option value="সংস্কৃতি">সংস্কৃতি</option>
      </select>

      <input id="locMap"
        placeholder="Google Maps লিংক (যদি থাকে)">

      <textarea id="locInfo" rows="4"
        placeholder="লোকেশন সম্পর্কে তথ্য"></textarea>

      <button type="submit">
        🟢 লোকেশন প্রস্তাব পাঠান
      </button>

    </form>

    <div class="mamun-facebook-comments">
      <h3>💬 মন্তব্য</h3>
      <p>
        স্থায়ী সবার জন্য মন্তব্য ব্যবস্থা চালু করতে Firebase/অনলাইন Database
        সংযোগ করতে হবে। সেটি পরে যোগ করা যাবে।
      </p>
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

    const msg=
      "নতুন শেরপুর লোকেশন প্রস্তাব\n\n"+
      "📍 নাম: "+name+"\n"+
      "🏠 এলাকা: "+area+"\n"+
      "🏷️ ক্যাটাগরি: "+cat+"\n"+
      "🗺️ Maps: "+(maps||"নেই")+"\n"+
      "📝 তথ্য: "+(info||"নেই");

    window.open(
      whatsappUrl+"?text="+encodeURIComponent(msg),
      "_blank"
    );
  });
}

/* ============================================================
   FOOTER
   ============================================================ */

function addFooter(){
  if(document.getElementById("mamunFooter"))return;

  const footer=document.createElement("footer");
  footer.id="mamunFooter";
  footer.className="mamun-footer";

  footer.innerHTML=`
    <div>© ${new Date().getFullYear()} MAMUN SHERPUR TOURIST</div>
    <div>Developer by <b>Mamun SmartPoint</b></div>
  `;

  document.body.appendChild(footer);
}

/* ============================================================
   START
   ============================================================ */

["search","cat","up"].forEach(id=>{
  const el=document.getElementById(id);

  if(el){
    el.addEventListener("input",render);
    el.addEventListener("change",render);
  }
});

const year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();

const map=L.map("map").setView([25.06,90.03],10);

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {attribution:"© OpenStreetMap contributors"}
).addTo(map);

const layer=L.layerGroup().addTo(map);

addContactButtons();
addCommunity();
addFooter();
markers();
render();
stats();

const modal=document.getElementById("modal");

if(modal){
  modal.addEventListener("click",e=>{
    if(e.target.id==="modal")closeModal();
  });
}
