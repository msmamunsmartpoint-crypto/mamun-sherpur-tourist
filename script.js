const places = [
  {
    id: "u7xar3",
    name: "গজনী অবকাশ কেন্দ্র",
    upazila: "ঝিনাইগাতী",
    category: "প্রকৃতি",
    lat: 25.196,
    lon: 90.014,
    image: "assets/images.jpeg",
    description: "শেরপুরের অন্যতম জনপ্রিয় পাহাড়ি পর্যটনকেন্দ্র। পাহাড়, বন ও প্রাকৃতিক সৌন্দর্যের জন্য বিখ্যাত।"
  },
  {
    id: "u2",
    name: "মধুটিলা ইকোপার্ক",
    upazila: "নালিতাবাড়ী",
    category: "পার্ক",
    lat: 25.137,
    lon: 90.064,
    image: "",
    description: "পাহাড়ি বন, সবুজ প্রকৃতি ও মনোরম পরিবেশে ঘোরার জন্য পরিচিত একটি দর্শনীয় স্থান।"
  },
  {
    id: "u3",
    name: "পানিহাটা–তারানি পাহাড়",
    upazila: "নালিতাবাড়ী",
    category: "প্রকৃতি",
    lat: 25.173,
    lon: 90.112,
    image: "",
    description: "পাহাড় ও সীমান্তঘেঁষা প্রাকৃতিক সৌন্দর্যের জন্য ভ্রমণপ্রেমীদের কাছে আকর্ষণীয়।"
  },
  {
    id: "u4",
    name: "নয়াবাড়ির টিলা",
    upazila: "শ্রীবরদী",
    category: "প্রকৃতি",
    lat: 25.215,
    lon: 89.925,
    image: "",
    description: "শ্রীবরদী এলাকার সুন্দর টিলা ও সবুজ প্রকৃতির একটি দর্শনীয় স্থান।"
  },
  {
    id: "u5",
    name: "রাজা পাহাড়",
    upazila: "শ্রীবরদী",
    category: "প্রকৃতি",
    lat: 25.215,
    lon: 89.885,
    image: "",
    description: "পাহাড়ি পরিবেশ ও প্রাকৃতিক দৃশ্য উপভোগের জন্য পরিচিত।"
  },
  {
    id: "u6",
    name: "বাবেলাকোনা",
    upazila: "শ্রীবরদী",
    category: "প্রকৃতি",
    lat: 25.230,
    lon: 89.900,
    image: "",
    description: "পাহাড়ি অঞ্চল ও প্রকৃতির নৈসর্গিক সৌন্দর্যে ঘেরা একটি আকর্ষণীয় এলাকা।"
  },
  {
    id: "u7",
    name: "DC Park / কালেক্টরেট পার্ক",
    upazila: "শেরপুর সদর",
    category: "পার্ক",
    lat: 25.020,
    lon: 90.015,
    image: "",
    description: "শেরপুর শহরের পরিচিত পার্ক ও বিনোদনস্থল।"
  },
  {
    id: "u8",
    name: "DC Lake Park",
    upazila: "শেরপুর সদর",
    category: "পার্ক",
    lat: 25.022,
    lon: 90.018,
    image: "",
    description: "লেক ও সবুজ পরিবেশ ঘেরা শহরের একটি মনোরম স্থান।"
  },
  {
    id: "u9",
    name: "Golden Valley Park",
    upazila: "শেরপুর সদর",
    category: "বিনোদন",
    lat: 25.025,
    lon: 90.080,
    image: "",
    description: "পরিবার ও বন্ধুদের সঙ্গে সময় কাটানোর জন্য বিনোদনমূলক স্থান।"
  },
  {
    id: "u10",
    name: "Orchid Parjatan Kendra & Resort",
    upazila: "শেরপুর সদর",
    category: "বিনোদন",
    lat: 25.010,
    lon: 90.060,
    image: "",
    description: "অবকাশ যাপন ও বিনোদনের জন্য পর্যটনকেন্দ্র ও রিসোর্ট।"
  },
  {
    id: "u11",
    name: "শের আলী গাজী গেটওয়ে",
    upazila: "শেরপুর সদর",
    category: "ঐতিহাসিক",
    lat: 25.018,
    lon: 90.014,
    image: "",
    description: "শেরপুরের ঐতিহাসিক ও পরিচিত স্থাপনাগুলোর একটি।"
  },
  {
    id: "u12",
    name: "মাইসাহেবা জামে মসজিদ",
    upazila: "শেরপুর সদর",
    category: "ঐতিহাসিক",
    lat: 25.018,
    lon: 90.012,
    image: "",
    description: "শেরপুর শহরের ঐতিহ্যবাহী ধর্মীয় স্থাপনাগুলোর একটি।"
  },
  {
    id: "u13",
    name: "Pone Tin Ani Jomidar Bari",
    upazila: "শেরপুর সদর",
    category: "ঐতিহাসিক",
    lat: 25.022,
    lon: 90.030,
    image: "",
    description: "জমিদারি আমলের ঐতিহ্য ও স্থাপত্যের স্মৃতি বহনকারী স্থান।"
  },
  {
    id: "u14",
    name: "বারোমারি মিশন",
    upazila: "নালিতাবাড়ী",
    category: "সংস্কৃতি",
    lat: 25.137,
    lon: 90.084,
    image: "",
    description: "শেরপুরের নালিতাবাড়ী এলাকার পরিচিত ধর্মীয় ও সাংস্কৃতিক স্থান।"
  },
  {
    id: "u15",
    name: "কাটাখালী ব্রিজ",
    upazila: "ঝিনাইগাতী",
    category: "ঐতিহাসিক",
    lat: 25.085,
    lon: 90.035,
    image: "",
    description: "মুক্তিযুদ্ধের স্মৃতিবিজড়িত ঐতিহাসিক স্থান।"
  },
  {
    id: "u16",
    name: "খড়িয়া শ্বেতশুভ্র কাশবন",
    upazila: "শেরপুর সদর",
    category: "প্রকৃতি",
    lat: 25.040,
    lon: 90.100,
    image: "",
    description: "কাশফুলে ভরা মনোরম প্রাকৃতিক পরিবেশ, বিশেষ করে শরৎকালে আকর্ষণীয়।"
  },
  {
    id: "u17",
    name: "Dikpara Bil",
    upazila: "শেরপুর সদর",
    category: "প্রকৃতি",
    lat: 25.030,
    lon: 90.100,
    image: "",
    description: "প্রকৃতি ও জলাভূমির সৌন্দর্য উপভোগের জন্য একটি মনোরম এলাকা।"
  },
  {
    id: "u18",
    name: "শহীদ সরণী",
    upazila: "শেরপুর সদর",
    category: "ঐতিহাসিক",
    lat: 25.020,
    lon: 90.010,
    image: "",
    description: "শেরপুরের গুরুত্বপূর্ণ স্মৃতি ও ইতিহাসের সঙ্গে যুক্ত স্থান।"
  },
  {
    id: "u19",
    name: "শেরপুর কেন্দ্রীয় শহীদ মিনার",
    upazila: "শেরপুর সদর",
    category: "সংস্কৃতি",
    lat: 25.020,
    lon: 90.010,
    image: "",
    description: "ভাষা আন্দোলনের স্মৃতি ও সাংস্কৃতিক চেতনার প্রতীক।"
  },
  {
    id: "u20",
    name: "পায়রা চত্বর",
    upazila: "শেরপুর সদর",
    category: "বিনোদন",
    lat: 25.020,
    lon: 90.005,
    image: "",
    description: "শেরপুর শহরের পরিচিত নগরস্থান ও মানুষের মিলনস্থল।"
  }
];


/* =========================================================
   FACEBOOK + WHATSAPP
   ========================================================= */

const facebookUrl =
  "https://www.facebook.com/fbyourmamun";

const whatsappNumber =
  "8801410452007";

const whatsappUrl =
  "https://wa.me/" + whatsappNumber;


/* =========================================================
   VISITED SYSTEM
   ========================================================= */

const storageKey =
  "mamunSherpurVisitedV2";

let visited = [];

try {

  visited =
    JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

  if (!Array.isArray(visited)) {
    visited = [];
  }

} catch (error) {

  visited = [];

}


/* =========================================================
   HELPERS
   ========================================================= */

function $(id) {
  return document.getElementById(id);
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function normalize(value) {

  return String(value || "")
    .toLowerCase()
    .trim();

}


function mapsUrl(place) {

  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      place.name +
      ", " +
      place.upazila +
      ", Sherpur, Bangladesh"
    )
  );

}


function youtubeUrl(place) {

  return (
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(
      place.name + " Sherpur"
    )
  );

}


function shareUrl(place) {

  return (
    location.origin +
    location.pathname +
    "#" +
    encodeURIComponent(place.id)
  );

}


function isVisited(id) {

  return visited.includes(id);

}


function saveVisited() {

  localStorage.setItem(
    storageKey,
    JSON.stringify(visited)
  );

}


function toggleVisited(id) {

  if (isVisited(id)) {

    visited =
      visited.filter(
        item => item !== id
      );

  } else {

    visited.push(id);

  }

  saveVisited();

  updateStats();

  renderPlaces();

}


/* =========================================================
   MAP
   ========================================================= */

let map = null;

let markerLayer = null;

let touristIcon = null;


function createTouristIcon() {

  return L.divIcon({

    className:
      "mamun-tourist-marker",

    html: `
      <div style="
        width:36px;
        height:36px;
        border-radius:50% 50% 50% 0;
        background:#20c878;
        border:3px solid #ffffff;
        box-shadow:0 4px 12px rgba(0,0,0,.35);
        transform:rotate(-45deg);
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing:border-box;
      ">
        <span style="
          transform:rotate(45deg);
          font-size:18px;
          line-height:1;
        ">📍</span>
      </div>
    `,

    iconSize: [36, 36],

    iconAnchor: [18, 36],

    popupAnchor: [0, -32]

  });

}


function initMap() {

  const mapElement =
    $("map");

  if (
    !mapElement ||
    typeof L === "undefined"
  ) {
    return;
  }


  /* Map compact size */

  mapElement.style.height =
    window.innerWidth <= 700
      ? "300px"
      : "350px";


  mapElement.style.borderRadius =
    "18px";

  mapElement.style.overflow =
    "hidden";


  map =
    L.map(
      "map",
      {
        zoomControl: true,
        scrollWheelZoom: true,
        minZoom: 10,
        maxZoom: 16
      }
    ).setView(
      [25.06, 90.03],
      11
    );


  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        "© OpenStreetMap contributors",
      maxZoom: 19
    }
  ).addTo(map);


  /* Sherpur focused boundary */

  const sherpurBounds =
    L.latLngBounds(
      [24.94, 89.78],
      [25.34, 90.20]
    );


  map.setMaxBounds(
    sherpurBounds
  );

  map.options.maxBoundsViscosity =
    0.75;


  markerLayer =
    L.layerGroup()
      .addTo(map);


  touristIcon =
    createTouristIcon();


  renderMarkers();


  setTimeout(
    () => map.invalidateSize(),
    300
  );

}


/* =========================================================
   MAP POPUP
   ========================================================= */

function popupHTML(place) {

  const visitedText =
    isVisited(place.id)
      ? "✓ ঘোরা হয়েছে"
      : "আমি ঘুরেছি";


  return `
    <div style="
      min-width:220px;
      max-width:280px;
      font-family:Arial,'Noto Sans Bengali',sans-serif;
    ">

      ${
        place.image
          ? `
            <img
              src="${escapeHTML(place.image)}"
              alt="${escapeHTML(place.name)}"
              style="
                width:100%;
                height:130px;
                object-fit:cover;
                border-radius:12px;
                margin-bottom:8px;
              "
              onerror="
                this.style.display='none'
              "
            >
          `
          : ""
      }

      <div style="
        font-size:16px;
        font-weight:800;
        margin-bottom:5px;
      ">
        ${escapeHTML(place.name)}
      </div>

      <div style="
        font-size:13px;
        color:#666;
        margin-bottom:8px;
      ">
        📍 ${escapeHTML(place.upazila)}
        ·
        ${escapeHTML(place.category)}
      </div>

      <div style="
        font-size:13px;
        line-height:1.55;
        margin-bottom:10px;
      ">
        ${escapeHTML(place.description)}
      </div>

      <div style="
        display:flex;
        gap:6px;
        flex-wrap:wrap;
      ">

        <button
          onclick="toggleVisited('${place.id}')"
          style="
            border:0;
            border-radius:8px;
            padding:7px 10px;
            background:#20c878;
            color:#fff;
            cursor:pointer;
            font-weight:700;
          "
        >
          ${visitedText}
        </button>

        <a
          href="${mapsUrl(place)}"
          target="_blank"
          rel="noopener"
          style="
            text-decoration:none;
            border-radius:8px;
            padding:7px 10px;
            background:#f1f3f5;
            color:#222;
            font-weight:700;
          "
        >
          🗺️ Maps
        </a>

      </div>

    </div>
  `;

}


function renderMarkers(list = places) {

  if (!markerLayer) {
    return;
  }


  markerLayer.clearLayers();


  list.forEach(place => {

    const marker =
      L.marker(
        [place.lat, place.lon],
        {
          icon: touristIcon
        }
      ).addTo(
        markerLayer
      );


    marker.bindPopup(
      popupHTML(place)
    );

  });

}


/* =========================================================
   SEARCH
   ========================================================= */

function getSearchValue() {

  const input =
    $("searchInput") ||
    $("search") ||
    $("searchBox");

  return input
    ? normalize(input.value)
    : "";

}


function getCategoryValue() {

  const select =
    $("categoryFilter") ||
    $("category") ||
    $("filterCategory");

  return select
    ? select.value
    : "সব";

}


function getUpazilaValue() {

  const select =
    $("upazilaFilter") ||
    $("upazila") ||
    $("filterUpazila");

  return select
    ? select.value
    : "সব";

}


function filteredPlaces() {

  const search =
    getSearchValue();

  const category =
    getCategoryValue();

  const upazila =
    getUpazilaValue();


  return places.filter(place => {

    const searchMatch =
      !search ||
      normalize(place.name)
        .includes(search) ||
      normalize(place.upazila)
        .includes(search) ||
      normalize(place.category)
        .includes(search);


    const categoryMatch =
      !category ||
      category === "সব" ||
      category === "all" ||
      place.category === category;


    const upazilaMatch =
      !upazila ||
      upazila === "সব" ||
      upazila === "all" ||
      place.upazila === upazila;


    return (
      searchMatch &&
      categoryMatch &&
      upazilaMatch
    );

  });

}


function applyFilters() {

  const list =
    filteredPlaces();

  renderPlaces(list);

  renderMarkers(list);

  updateStats(list);

}


/* =========================================================
   PLACE CARDS
   Uses existing index.html classes/design
   ========================================================= */

function cardHTML(place) {

  const checked =
    isVisited(place.id);


  return `
    <article
      class="place-card"
      data-place-id="${escapeHTML(place.id)}"
    >

      <div class="place-image-wrap">

        ${
          place.image
            ? `
              <img
                class="place-image"
                src="${escapeHTML(place.image)}"
                alt="${escapeHTML(place.name)}"
                loading="lazy"
                onerror="
                  this.style.display='none';
                  this.parentElement.classList.add('no-image')
                "
              >
            `
            : `
              <div class="place-placeholder">
                📍
              </div>
            `
        }

      </div>


      <div class="place-content">

        <div class="place-badges">

          <span class="place-category">
            ${escapeHTML(place.category)}
          </span>

          <span class="place-upazila">
            ${escapeHTML(place.upazila)}
          </span>

        </div>


        <h3>
          ${escapeHTML(place.name)}
        </h3>


        <p>
          ${escapeHTML(place.description)}
        </p>


        <div class="place-actions">

          <button
            class="
              visited-btn
              ${checked ? "active" : ""}
            "
            onclick="
              toggleVisited('${place.id}')
            "
          >
            ${
              checked
                ? "✓ ঘোরা হয়েছে"
                : "আমি ঘুরেছি"
            }
          </button>


          <a
            class="map-btn"
            href="${mapsUrl(place)}"
            target="_blank"
            rel="noopener"
          >
            🗺️ Maps
          </a>


          <a
            class="youtube-btn"
            href="${youtubeUrl(place)}"
            target="_blank"
            rel="noopener"
          >
            ▶ ভিডিও
          </a>


          <button
            class="share-btn"
            onclick="
              sharePlace('${place.id}')
            "
          >
            ↗ শেয়ার
          </button>

        </div>

      </div>

    </article>
  `;

}


function renderPlaces(
  list = filteredPlaces()
) {

  const container =
    $("placesGrid") ||
    $("places") ||
    $("placeGrid") ||
    $("cards");


  if (!container) {
    return;
  }


  container.innerHTML =
    list.length
      ? list.map(
          cardHTML
        ).join("")
      : `
        <div style="
          grid-column:1/-1;
          text-align:center;
          padding:35px 15px;
          color:#777;
        ">

          <div style="
            font-size:42px;
          ">
            🔎
          </div>

          <h3>
            কোনো পর্যটন স্থান পাওয়া যায়নি
          </h3>

          <p>
            সার্চ বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
          </p>

        </div>
      `;

}


/* =========================================================
   STATISTICS
   ========================================================= */

function updateStats(
  currentList = places
) {

  const total =
    places.length;


  const visitedTotal =
    visited.filter(
      id =>
        places.some(
          place =>
            place.id === id
        )
    ).length;


  const percentage =
    total
      ? Math.round(
          (visitedTotal / total) * 100
        )
      : 0;


  const visible =
    currentList.length;


  const elements = [

    ["visitedCount", visitedTotal],

    ["totalPlaces", total],

    ["visitedPercent", percentage + "%"],

    ["placeCount", visible],

    ["resultsCount", visible]

  ];


  elements.forEach(
    ([id, value]) => {

      const element =
        $(id);

      if (element) {
        element.textContent =
          value;
      }

    }
  );


  const progress =
    $("visitedProgress") ||
    $("progressBar");


  if (progress) {

    progress.style.width =
      percentage + "%";

  }

}


/* =========================================================
   SHARE
   ========================================================= */

async function sharePlace(id) {

  const place =
    places.find(
      item => item.id === id
    );


  if (!place) {
    return;
  }


  const url =
    shareUrl(place);


  const text =
    place.name +
    " — " +
    place.upazila +
    ", শেরপুর | MAMUN SHERPUR TOURIST";


  if (navigator.share) {

    try {

      await navigator.share({

        title:
          place.name,

        text:
          text,

        url:
          url

      });

      return;

    } catch (error) {
      /* cancelled */
    }

  }


  try {

    await navigator.clipboard.writeText(
      url
    );

    alert(
      "লিংক কপি হয়েছে ✅"
    );

  } catch (error) {

    window.prompt(
      "এই লিংকটি কপি করুন:",
      url
    );

  }

}


/* =========================================================
   PRINT
   ========================================================= */

function printPage() {

  window.print();

}


/* =========================================================
   FILTER EVENTS
   ========================================================= */

function setupFilters() {

  const searchInputs = [

    $("searchInput"),

    $("search"),

    $("searchBox")

  ].filter(Boolean);


  searchInputs.forEach(
    input => {

      input.addEventListener(
        "input",
        applyFilters
      );

    }
  );


  const selects = [

    $("categoryFilter"),

    $("category"),

    $("filterCategory"),

    $("upazilaFilter"),

    $("upazila"),

    $("filterUpazila")

  ].filter(Boolean);


  selects.forEach(
    select => {

      select.addEventListener(
        "change",
        applyFilters
      );

    }
  );

}


/* =========================================================
   FILTER OPTIONS
   ========================================================= */

function setupFilterOptions() {

  const categories = [
    "সব",
    ...new Set(
      places.map(
        place =>
          place.category
      )
    )
  ];


  const upazilas = [
    "সব",
    ...new Set(
      places.map(
        place =>
          place.upazila
      )
    )
  ];


  const categorySelect =
    $("categoryFilter") ||
    $("category") ||
    $("filterCategory");


  const upazilaSelect =
    $("upazilaFilter") ||
    $("upazila") ||
    $("filterUpazila");


  function fillSelect(
    select,
    values
  ) {

    if (!select) {
      return;
    }


    if (
      select.options.length > 1
    ) {
      return;
    }


    select.innerHTML =
      values.map(
        value => `
          <option
            value="${escapeHTML(value)}"
          >
            ${escapeHTML(value)}
          </option>
        `
      ).join("");

  }


  fillSelect(
    categorySelect,
    categories
  );


  fillSelect(
    upazilaSelect,
    upazilas
  );

}


/* =========================================================
   FACEBOOK + WHATSAPP BUTTON
   Does not change existing card/frame design
   ========================================================= */

function setupContactButtons() {

  if (
    document.getElementById(
      "mamunContactButtons"
    )
  ) {
    return;
  }


  const style =
    document.createElement(
      "style"
    );


  style.textContent = `

    #mamunContactButtons {

      position: fixed;

      right: 18px;

      bottom: 18px;

      z-index: 9999;

      display: flex;

      flex-direction: column;

      gap: 10px;

    }


    #mamunContactButtons a {

      width: 50px;

      height: 50px;

      border-radius: 50%;

      display: flex;

      align-items: center;

      justify-content: center;

      text-decoration: none;

      color: white;

      font-weight: 800;

      font-size: 23px;

      box-shadow:
        0 5px 18px
        rgba(0,0,0,.25);

      border:
        2px solid white;

      transition:
        transform .2s ease;

    }


    #mamunContactButtons a:hover {

      transform:
        scale(1.08);

    }


    #mamunFacebook {

      background:
        #1877f2;

    }


    #mamunWhatsApp {

      background:
        #25d366;

    }


    @media(max-width:600px) {

      #mamunContactButtons {

        right: 12px;

        bottom: 12px;

        gap: 8px;

      }


      #mamunContactButtons a {

        width: 46px;

        height: 46px;

        font-size: 21px;

      }

    }

  `;


  document.head.appendChild(
    style
  );


  const box =
    document.createElement(
      "div"
    );


  box.id =
    "mamunContactButtons";


  box.innerHTML = `

    <a
      id="mamunFacebook"
      href="${facebookUrl}"
      target="_blank"
      rel="noopener noreferrer"
      title="Facebook"
      aria-label="Facebook"
    >
      f
    </a>


    <a
      id="mamunWhatsApp"
      href="${whatsappUrl}"
      target="_blank"
      rel="noopener noreferrer"
      title="WhatsApp"
      aria-label="WhatsApp"
    >
      ☎
    </a>

  `;


  document.body.appendChild(
    box
  );

}


/* =========================================================
   MOBILE MAP
   ========================================================= */

window.addEventListener(
  "resize",
  () => {

    const mapElement =
      $("map");


    if (mapElement) {

      mapElement.style.height =
        window.innerWidth <= 700
          ? "300px"
          : "350px";

    }


    if (map) {

      setTimeout(
        () =>
          map.invalidateSize(),
        150
      );

    }

  }
);


/* =========================================================
   OPEN PLACE FROM URL HASH
   ========================================================= */

function openPlaceFromHash() {

  const raw =
    location.hash.replace(
      "#",
      ""
    );


  if (!raw) {
    return;
  }


  const id =
    decodeURIComponent(raw);


  const place =
    places.find(
      item =>
        item.id === id
    );


  if (
    !place ||
    !map
  ) {
    return;
  }


  map.setView(
    [
      place.lat,
      place.lon
    ],
    14
  );


  setTimeout(
    () => {

      if (!markerLayer) {
        return;
      }


      const marker =
        markerLayer
          .getLayers()
          .find(layer => {

            const latlng =
              layer.getLatLng();


            return (

              Math.abs(
                latlng.lat -
                place.lat
              ) < 0.0001

              &&

              Math.abs(
                latlng.lng -
                place.lon
              ) < 0.0001

            );

          });


      if (marker) {

        marker.openPopup();

      }

    },
    400
  );

}


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.toggleVisited =
  toggleVisited;

window.sharePlace =
  sharePlace;

window.printPage =
  printPage;

window.applyFilters =
  applyFilters;


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupContactButtons();

    setupFilterOptions();

    setupFilters();

    initMap();

    renderPlaces();

    updateStats();

    openPlaceFromHash();

  }
);
