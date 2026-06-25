// =====================
// Savora — script.js (Redesigned + Persistent)
// =====================

// DATA: 26 menu lengkap dengan foto Unsplash real
const menuData = [
  // MAKANAN POKOK
  {
    id: 1, nama: "Nasi Putih", kategori: "Makanan Pokok", kalori: 180, harga: 5000,
    img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 2, nama: "Nasi Goreng Spesial", kategori: "Makanan Pokok", kalori: 450, harga: 18000,
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 3, nama: "Mie Goreng Jawa", kategori: "Makanan Pokok", kalori: 380, harga: 16000,
    img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 4, nama: "Spaghetti Aglio Olio", kategori: "Makanan Pokok", kalori: 420, harga: 28000,
    img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 5, nama: "Kentang Panggang", kategori: "Makanan Pokok", kalori: 220, harga: 15000,
    img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 6, nama: "Roti Gandum (2 lembar)", kategori: "Makanan Pokok", kalori: 160, harga: 8000,
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&h=120&fit=crop&q=80"
  },
  // LAUK-PAUK
  {
    id: 7, nama: "Ayam Goreng Tepung", kategori: "Lauk-Pauk", kalori: 300, harga: 17000,
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 8, nama: "Ayam Bakar Madu", kategori: "Lauk-Pauk", kalori: 280, harga: 20000,
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 9, nama: "Rendang Daging Sapi", kategori: "Lauk-Pauk", kalori: 380, harga: 32000,
    img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 10, nama: "Tempe Orek", kategori: "Lauk-Pauk", kalori: 150, harga: 8000,
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 11, nama: "Tahu Goreng", kategori: "Lauk-Pauk", kalori: 120, harga: 6000,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 12, nama: "Ikan Nila Bakar", kategori: "Lauk-Pauk", kalori: 250, harga: 22000,
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 13, nama: "Telur Dadar", kategori: "Lauk-Pauk", kalori: 190, harga: 7000,
    img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 14, nama: "Beef Steak Sirloin", kategori: "Lauk-Pauk", kalori: 420, harga: 45000,
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=120&h=120&fit=crop&q=80"
  },
  // SAYUR
  {
    id: 15, nama: "Tumis Kangkung", kategori: "Sayur", kalori: 90, harga: 9000,
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 16, nama: "Sayur Asem", kategori: "Sayur", kalori: 70, harga: 8000,
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 17, nama: "Capcay Kuah", kategori: "Sayur", kalori: 110, harga: 13000,
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 18, nama: "Salad Sayur Segar", kategori: "Sayur", kalori: 80, harga: 14000,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 19, nama: "Gado-Gado", kategori: "Sayur", kalori: 280, harga: 16000,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120&h=120&fit=crop&q=80"
  },
  // BUAH
  {
    id: 20, nama: "Pisang (1 buah)", kategori: "Buah", kalori: 105, harga: 5000,
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 21, nama: "Apel Fuji (1 buah)", kategori: "Buah", kalori: 95, harga: 7000,
    img: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 22, nama: "Semangka (1 potong)", kategori: "Buah", kalori: 60, harga: 6000,
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 23, nama: "Fruit Salad Cup", kategori: "Buah", kalori: 140, harga: 17000,
    img: "https://images.unsplash.com/photo-1564093497595-593b96d80180?w=120&h=120&fit=crop&q=80"
  },
  // MINUMAN
  {
    id: 24, nama: "Es Teh Manis", kategori: "Minuman", kalori: 90, harga: 5000,
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 25, nama: "Air Mineral 600ml", kategori: "Minuman", kalori: 0, harga: 4000,
    img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=120&h=120&fit=crop&q=80"
  },
  {
    id: 26, nama: "Jus Alpukat", kategori: "Minuman", kalori: 230, harga: 18000,
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=120&h=120&fit=crop&q=80"
  },
];

const KATEGORI_LIST = ["Makanan Pokok", "Lauk-Pauk", "Sayur", "Buah", "Minuman"];
const TAG_CLASS = {
  "Makanan Pokok": "tag-pokok",
  "Lauk-Pauk":     "tag-lauk",
  "Sayur":         "tag-sayur",
  "Buah":          "tag-buah",
  "Minuman":       "tag-minum",
};
const TAG_LABEL = {
  "Makanan Pokok": "Pokok",
  "Lauk-Pauk":     "Lauk",
  "Sayur":         "Sayur",
  "Buah":          "Buah",
  "Minuman":       "Minuman",
};

// ========================
// LOCALSTORAGE PERSISTENCE
// ========================
const LS_KEY = "savora_selected";

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(LS_KEY);
    return saved ? new Set(JSON.parse(saved)) : new Set();
  } catch {
    return new Set();
  }
}

function saveToStorage() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify([...selectedIds]));
  } catch {}
}

// STATE — restored dari localStorage otomatis
let selectedIds = loadFromStorage();
let currentFilter = "Semua";

// ELEMENTS
const menuBody      = document.getElementById("menuBody");
const emptyState    = document.getElementById("emptyState");
const panelContent  = document.getElementById("panelContent");
const imgStack      = document.getElementById("imgStack");
const totalKalori   = document.getElementById("totalKalori");
const totalHarga    = document.getElementById("totalHarga");
const badgeSeimbang = document.getElementById("badgeSeimbang");
const btnReset      = document.getElementById("btnReset");
const selectedCount = document.getElementById("selectedCount");
const fabResult     = document.getElementById("fabResult");
const fabCount      = document.getElementById("fabCount");
const bsOverlay     = document.getElementById("bsOverlay");
const bottomSheet   = document.getElementById("bottomSheet");
const bsClose       = document.getElementById("bsClose");
const bsContent     = document.getElementById("bsContent");
const filterBtns    = document.querySelectorAll(".filter-btn");
const pilihHint     = document.getElementById("pilihHint");

// ========================
// RENDER TABEL
// ========================
function renderTable(filter = "Semua") {
  const filtered = filter === "Semua"
    ? menuData
    : menuData.filter(m => m.kategori === filter);

  menuBody.innerHTML = "";

  filtered.forEach(menu => {
    const isChecked = selectedIds.has(menu.id);
    const tr = document.createElement("tr");
    if (isChecked) tr.classList.add("selected");
    tr.dataset.id = menu.id;

    tr.innerHTML = `
      <td>
        <div class="menu-img-cell">
          <div class="menu-thumb">
            <img src="${menu.img}" alt="${menu.nama}" loading="lazy" onerror="this.parentElement.textContent='🍽️'"/>
          </div>
          <span class="menu-name">${menu.nama}</span>
        </div>
      </td>
      <td>
        <span class="tag ${TAG_CLASS[menu.kategori]}">${TAG_LABEL[menu.kategori]}</span>
      </td>
      <td class="td-kalori">${menu.kalori} kkal</td>
      <td class="td-harga">${formatRupiah(menu.harga)}</td>
      <td class="td-check">
        <input 
          type="checkbox" 
          class="menu-checkbox" 
          id="cb-${menu.id}" 
          data-id="${menu.id}"
          ${isChecked ? "checked" : ""}
        />
      </td>
    `;

    menuBody.appendChild(tr);
  });

  // Pasang event listener ke semua checkbox
  menuBody.querySelectorAll(".menu-checkbox").forEach(cb => {
    cb.addEventListener("change", handleCheckbox);
  });
}

// ========================
// HANDLE CHECKBOX
// ========================
function handleCheckbox(e) {
  const id = parseInt(e.target.dataset.id);
  const tr = e.target.closest("tr");

  if (e.target.checked) {
    selectedIds.add(id);
    tr.classList.add("selected");
  } else {
    selectedIds.delete(id);
    tr.classList.remove("selected");
  }

  saveToStorage(); // simpan ke localStorage
  updatePanel();
}

// ========================
// UPDATE PANEL
// ========================
function updatePanel() {
  const count = selectedIds.size;

  if (selectedCount) selectedCount.textContent = count;
  if (fabCount) fabCount.textContent = count;

  if (fabResult) fabResult.style.display = count > 0 ? "block" : "none";
  if (pilihHint) pilihHint.style.display = count > 0 ? "block" : "none";

  if (count === 0) {
    emptyState.style.display = "block";
    panelContent.style.display = "none";
    return;
  }

  emptyState.style.display = "none";
  panelContent.style.display = "block";

  const selected = menuData.filter(m => selectedIds.has(m.id));

  // HITUNG TOTAL
  const totKalori = selected.reduce((sum, m) => sum + m.kalori, 0);
  const totHarga  = selected.reduce((sum, m) => sum + m.harga, 0);

  totalKalori.innerHTML = `${totKalori} <span>kkal</span>`;
  totalHarga.textContent = formatRupiah(totHarga);

  // IMG STACK — tampilkan foto real
  imgStack.innerHTML = "";
  selected.forEach(m => {
    const div = document.createElement("div");
    div.className = "stack-item";
    div.title = m.nama;
    div.innerHTML = `<img src="${m.img}" alt="${m.nama}" loading="lazy" onerror="this.parentElement.textContent='🍽️'"/>`;
    imgStack.appendChild(div);
  });

  // KATEGORI CHECKLIST
  const terpenuhi = new Set(selected.map(m => m.kategori));

  KATEGORI_LIST.forEach(kat => {
    const isFulfilled = terpenuhi.has(kat);
    const item   = document.querySelector(`.kategori-item[data-kat="${kat}"]`);
    const icon   = document.getElementById(`kat-icon-${kat}`);
    const status = document.getElementById(`kat-status-${kat}`);

    if (item)   item.classList.toggle("fulfilled", isFulfilled);
    if (icon)   icon.textContent = isFulfilled ? "✅" : "○";
    if (status) status.textContent = isFulfilled ? "Ada ✓" : "Belum ada";
  });

  // BADGE MENU SEIMBANG — logic JS murni, tidak hardcode
  const semuaTerpenuhi = KATEGORI_LIST.every(kat => terpenuhi.has(kat));
  badgeSeimbang.style.display = semuaTerpenuhi ? "block" : "none";

  updateBottomSheet();
}

// ========================
// FILTER
// ========================
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTable(currentFilter);
  });
});

// ========================
// RESET
// ========================
if (btnReset) {
  btnReset.addEventListener("click", () => {
    selectedIds.clear();
    saveToStorage(); // hapus dari localStorage juga
    renderTable(currentFilter);
    updatePanel();
  });
}

// ========================
// MOBILE BOTTOM SHEET
// ========================
function updateBottomSheet() {
  if (!bsContent) return;
  const panelHasil = document.getElementById("panelContent");
  if (selectedIds.size === 0) {
    bsContent.innerHTML = `
      <div class="empty-state" style="padding:32px 0">
        <div class="empty-icon">🍽️</div>
        <p><strong>Belum ada menu dipilih</strong></p>
        <p class="empty-sub">Centang menu di atas buat mulai ngerencanain makanmu.</p>
      </div>`;
  } else {
    bsContent.innerHTML = panelHasil ? panelHasil.innerHTML : "";
  }
}

if (fabResult) {
  fabResult.addEventListener("click", () => {
    updateBottomSheet();
    bsOverlay.style.display = "block";
    bottomSheet.style.display = "block";
    document.body.style.overflow = "hidden";
  });
}

function closeBottomSheet() {
  if (bsOverlay) bsOverlay.style.display = "none";
  if (bottomSheet) bottomSheet.style.display = "none";
  document.body.style.overflow = "";
}

if (bsClose) bsClose.addEventListener("click", closeBottomSheet);
if (bsOverlay) bsOverlay.addEventListener("click", closeBottomSheet);

// ========================
// HELPERS
// ========================
function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

// ========================
// INIT
// ========================
renderTable();
updatePanel();
