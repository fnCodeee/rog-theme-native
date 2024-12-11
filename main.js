const spesifikasi = [
 {
  category: "CPU",
  img: "./assets/image/intelCore.jpg",
  site: "https://www.cpu-monkey.com/en/cpu-intel_core_i9_13980hx",
  details:
   "Intel Core i9-13980HX banyak ditemukan pada laptop premium seperti ASUS ROG Strix dan seri Alienware. Kemampuan multi-thread yang tinggi memungkinkan pengguna untuk menjalankan aplikasi berat seperti software desain grafis, mesin game seperti Unity, atau bahkan pengeditan video 4K dengan lancar.",
 },
 {
  category: "GPU",
  img: "./assets/image/gpu.png",
  site: "https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/geforce-rtx-4080/",
  details:
   "NVIDIA GeForce RTX 4080 adalah salah satu kartu grafis kelas atas dalam keluarga RTX 40 Series, yang dirancang untuk memberikan performa luar biasa dalam gaming, kreatif, dan aplikasi AI. Menggunakan arsitektur Ada Lovelace, GPU ini menawarkan peningkatan performa besar dibandingkan generasi sebelumnya, termasuk teknologi rendering ray tracing yang lebih realistis, serta dukungan untuk DLSS 3.5 yang didukung AI",
 },
 {
  category: "Display",
  img: "./assets/image/nebula-display.png",
  site: "https://www.asus.com/us/site/gaming/rog-nebula-display/",
  details:
   "Nebula Display terbaru pada perangkat ASUS ROG menghadirkan layar QHD (2560 x 1600) dengan kecepatan refresh tinggi hingga 240Hz dan waktu respons 3ms. Layar ini menawarkan cakupan warna 100% DCI-P3, akurasi warna yang telah divalidasi Pantone, serta dukungan untuk Dolby Vision HDR. Fitur tambahan seperti kecerahan hingga 500 nits, teknologi anti-silau, dan kompatibilitas dengan NVIDIA G-Sync membuat pengalaman visual semakin optimal, baik untuk gaming maupun kebutuhan kreatif",
 },
 {
  category: "Teknologi Cooler",
  img: "./assets/image/cooling.png",
  site: "https://rog.asus.com/content/rog-intelligent-cooling/",
  details:
   "Tri-Fan Technology adalah sistem pendinginan canggih yang dikembangkan oleh ASUS untuk meningkatkan kinerja termal laptop gaming mereka. Teknologi ini menambahkan satu kipas tambahan di samping sistem pendingin utama yang sudah terdiri dari dua kipas. Ini sangat bermanfaat untuk sistem dengan komponen yang kuat, karena memberikan disipasi panas tambahan untuk GPU dan VRAM.",
 },
 {
  category: "Storage",
  img: "./assets/image/storage.png",
  site: "https://rog.asus.com",
  details: "Penyimpanan hingga 1TB PCIe Gen4 NVMe M.2 SSD, dan penyimpanan tambahan hingga 2TB PCIe Gen4 M.2 SSD",
 },
];

const sampleStrix_series = [
 {
  model: "ROG STRIX G16/G18",
  img: "./assets/image/product/strix-g16.webp",
  description:
   "ROG Strix G16 menghadirkan performa hebat dengan Intel® Core™ i9-13980HX, GPU NVIDIA® GeForce RTX™ 4080, dan penyimpanan hingga 1TB PCIe Gen4 SSD. Dilengkapi layar Nebula Display QHD 240Hz dengan waktu respons 3ms dan teknologi Tri-Fan untuk pendinginan optimal.",
  source: "https://rog.asus.com/us/laptops/rog-strix/rog-strix-g16-2023-series/",
 },
 {
  model: "ROG STRIX SCAR 17",
  img: "./assets/image/product/strix-scar17.webp",
  description:
   "ROG Strix SCAR 17 dilengkapi Ryzen™ 9 7945HX, GPU NVIDIA® GeForce RTX™ 40 Series, SSD hingga 2TB RAID 0, dan WiFi 6, menghadirkan performa luar biasa untuk gaming dan tugas berat.",
  source: "https://www.asus.com/us/site/gaming/rog/gaming-laptops/strix-scar-17-2023.html",
 },
 {
  model: "ROG STRIX SCAR 16/18",
  img: "./assets/image/product/strix-scar16.webp",
  description:
   "ROG Strix SCAR 16 hadir dengan prosesor Intel® Core™ Gen ke-13, GPU GeForce RTX™ 40 Series, SSD PCIe Gen 4x4, dan RAM DDR5 4800MHz, memastikan gaming lancar dan loading super cepat.",
  source: "https://www.asus.com/us/site/gaming/rog/gaming-laptops/strix-scar-2023.html",
 },
];

const content = document.getElementById("content");
const product = document.getElementById("product_sample");

spesifikasi.map((data) => {
 const card = document.createElement("article");
 card.classList.add("content__inside");
 card.classList.add("card");
 content.appendChild(card);

 card.innerHTML = `
  <h3 style="padding: 10px 0;">${data.category}</h3>
  <img src="${data.img}" alt="${data.category}" class="featured-image" />
  <p>${data.details}${" "}<a target="_blank" href="${data.site}">Selengkapnya</a></p>
  `;
});

sampleStrix_series.map((data) => {
 const { img, model, description, source } = data;
 const productItem = document.createElement("div");
 productItem.classList.add("items");

 const imageContainer = document.createElement("div");
 imageContainer.classList.add("image__container");

 const imageItem = document.createElement("div");
 imageItem.classList.add("image__item");

 const image = document.createElement("img");
 image.src = img;
 image.alt = "rog-strix";
 imageItem.appendChild(image);

 imageItem.appendChild(image);
 imageContainer.appendChild(imageItem);
 productItem.appendChild(imageContainer);

 const title = document.createElement("h1");
 title.innerText = model;
 productItem.appendChild(title);

 const descriptionElement = document.createElement("p");
 descriptionElement.innerText = description;
 productItem.appendChild(descriptionElement);

 const link = document.createElement("a");
 link.href = source;
 link.target = "_blank";
 link.innerText = "Selengkapnya.";
 descriptionElement.appendChild(link);

 const Button = document.createElement("button");
 Button.innerText = "BUY NOW";
 Button.addEventListener("click", () => {
  location.href = source;
 })
 productItem.appendChild(Button);
 
 product.appendChild(productItem);

});

console.log(spesifikasi);
console.log(content);
console.log(product);
