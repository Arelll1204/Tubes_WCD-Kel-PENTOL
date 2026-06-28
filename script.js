// =====================
// Savora — script.js (Redesigned + Persistent)
// =====================

// DATA: 26 menu lengkap dengan foto Unsplash real
const menuData = [
  // MAKANAN POKOK
  {
    id: 1, nama: "Nasi Putih", kategori: "Makanan Pokok", kalori: 180, harga: 5000,
    img: "Menu Pict/Nasi putih.jpeg"
  },
  {
    id: 2, nama: "Nasi Goreng Spesial", kategori: "Makanan Pokok", kalori: 450, harga: 18000,
    img: "Menu Pict/Nasi Goreng Spesial.jpg"
  },
  {
    id: 3, nama: "Mie Goreng Jawa", kategori: "Makanan Pokok", kalori: 380, harga: 16000,
    img: "Menu Pict/Mie-goreng-jawa.jpg"
  },
  {
    id: 4, nama: "Spaghetti Aglio Olio", kategori: "Makanan Pokok", kalori: 420, harga: 28000,
    img: "Menu Pict/Spaghetti Aglio Olio.jpg"
  },
  {
    id: 5, nama: "Kentang Panggang", kategori: "Makanan Pokok", kalori: 220, harga: 15000,
    img: "Menu Pict/Kentang Panggang.jpeg"
  },
  {
    id: 6, nama: "Roti Gandum (2 lembar)", kategori: "Makanan Pokok", kalori: 160, harga: 8000,
    img: "Menu Pict/Roti Gandum.jpg"
  },
  // LAUK-PAUK
  {
    id: 7, nama: "Ayam Goreng Tepung", kategori: "Lauk-Pauk", kalori: 300, harga: 17000,
    img: "Menu Pict/Ayam Goreng Tepung.jpg"
  },
  {
    id: 8, nama: "Ayam Bakar Madu", kategori: "Lauk-Pauk", kalori: 280, harga: 20000,
    img: "Menu Pict/Ayam Bakar Madu.jpg"
  },
  {
    id: 9, nama: "Rendang Daging Sapi", kategori: "Lauk-Pauk", kalori: 380, harga: 32000,
    img: "Menu Pict/Rendang daging sapi.jpg"
  },
  {
    id: 10, nama: "Tempe Orek", kategori: "Lauk-Pauk", kalori: 150, harga: 8000,
    img: "Menu Pict/Tempe Orek.jpg"
  },
  {
    id: 11, nama: "Tahu Goreng", kategori: "Lauk-Pauk", kalori: 120, harga: 6000,
    img: "Menu Pict/Tahu Goreng.jpg"
  },
  {
    id: 12, nama: "Ikan Nila Bakar", kategori: "Lauk-Pauk", kalori: 250, harga: 22000,
    img: "Menu Pict/Ikan Nila Bakar.jpg"
  },
  {
    id: 13, nama: "Telur Dadar", kategori: "Lauk-Pauk", kalori: 190, harga: 7000,
    img: "Menu Pict/Terlur Dadar.jpg"
  },
  {
    id: 14, nama: "Beef Steak Sirloin", kategori: "Lauk-Pauk", kalori: 420, harga: 45000,
    img: "Menu Pict/Beef Steak Sirloin.jpg"
  },
  // SAYUR
  {
    id: 15, nama: "Tumis Kangkung", kategori: "Sayur", kalori: 90, harga: 9000,
    img: "Menu Pict/Tumis Kangkung.jpg"
  },
  {
    id: 16, nama: "Sayur Asem", kategori: "Sayur", kalori: 70, harga: 8000,
    img: "Menu Pict/Sayur Asem.jpg"
  },
  {
    id: 17, nama: "Capcay Kuah", kategori: "Sayur", kalori: 110, harga: 13000,
    img: "Menu Pict/Capcay Kuah.jpg"
  },
  {
    id: 18, nama: "Salad Sayur Segar", kategori: "Sayur", kalori: 80, harga: 14000,
    img: "Menu Pict/Salad Sayur Segar.jpg"
  },
  {
    id: 19, nama: "Gado-Gado", kategori: "Sayur", kalori: 280, harga: 16000,
    img: "Menu Pict/gado gado.jpg"
  },
  // BUAH
  {
    id: 20, nama: "Pisang (1 buah)", kategori: "Buah", kalori: 105, harga: 5000,
    img: "Menu Pict/Pisang.jpg"
  },
  {
    id: 21, nama: "Apel Fuji (1 buah)", kategori: "Buah", kalori: 95, harga: 7000,
    img: "Menu Pict/Apel Fuji.jpg"
  },
  {
    id: 22, nama: "Semangka (1 potong)", kategori: "Buah", kalori: 60, harga: 6000,
    img: "Menu Pict/Semangka.jpg"
  },
  {
    id: 23, nama: "Fruit Salad Cup", kategori: "Buah", kalori: 140, harga: 17000,
    img: "Menu Pict/Fruit Salad Cup.jpg"
  },
  // MINUMAN
  {
    id: 24, nama: "Es Teh Manis", kategori: "Minuman", kalori: 90, harga: 5000,
    img: "Menu Pict/Es Teh Manis.jpg"
  },
  {
    id: 25, nama: "Air Mineral 600ml", kategori: "Minuman", kalori: 0, harga: 4000,
    img: "Menu Pict/Air Mineral 600ml.jpg"
  },
  {
    id: 26, nama: "Jus Alpukat", kategori: "Minuman", kalori: 230, harga: 18000,
    img: "Menu Pict/Jus Alpukat.jpg"
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

// STATE
let selectedIds = new Set();

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
function renderTable() {
  menuBody.innerHTML = "";

  menuData.forEach(menu => {
    const isChecked = selectedIds.has(menu.id);
    const tr = document.createElement("tr");
    if (isChecked) tr.classList.add("selected");
    tr.dataset.id = menu.id;

    tr.innerHTML = `
      <td>
        <div class="menu-thumb">
          <img src="${menu.img}" alt="${menu.nama}" loading="lazy" onerror="this.parentElement.textContent='🍽️'"/>
        </div>
      </td>
      <td>
        <span class="menu-name">${menu.nama}</span>
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
    updateBottomSheet();
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
// RESET
// ========================
document.addEventListener("click", (e) => {
  if (e.target.closest(".btn-reset")) {
    selectedIds.clear();
    renderTable();
    updatePanel();
  }
});

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
