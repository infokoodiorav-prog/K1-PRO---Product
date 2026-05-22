document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  const cards = [
    document.getElementById("prodCard"),
    document.getElementById("specsCard"),
    document.getElementById("shippingCard"),
    document.getElementById("warrantyCard"),
  ];

  document.getElementById("prodCard").classList.add("active");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const targetCard = document.getElementById(targetId);

      const active = targetCard.classList.contains("active");

      cards.forEach((card) => {
        card.classList.remove("active");
      });

      if (!active) {
        targetCard.classList.add("active");
      }
    });
  });
});

const cartContainer = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotalEl = document.querySelector(".total");

let count = 0;
let total = 0;

const buyBtns = document.querySelectorAll(".buy-now");

function updateCartUI() {
  const text = translations[currentLang]?.["total"];

  if (!text) return;

  cartTotalEl.textContent = text.replace("{price}", total.toFixed(2));
}

buyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    const img = btn.dataset.img;

    const item = document.createElement("div");
    item.classList.add("cart-item");

    item.innerHTML = `
      <img src="${img}" class="cart-img" />
      <div class="cart-info">
        <p>${name}</p>
        <span>${price.toFixed(2)}€</span>
      </div>
      <a href="" class="remove-btn" >-</a>
    `;

    item.querySelector(".remove-btn").addEventListener("click", () => {
      item.remove();

      count--;
      total -= price;
      updateCartUI();

      cartCount.textContent = count;
    });

    cartContainer.appendChild(item);

    count++;
    total += price;
    updateCartUI();

    cartCount.textContent = count;
  });
});

const cartBtn = document.querySelector(".cart-btn");
const cartDropdown = document.querySelector(".cart-dropdown");

cartBtn.addEventListener("click", () => {
  cartDropdown.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const mainImg = document.getElementById("prod-img");
  const thumbnails = document.querySelectorAll(".lil");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImg.src = thumb.src;

      thumbnails.forEach((img) => {
        img.classList.remove("active");
      });

      thumb.classList.add("active");
    });
  });
});

const translations = {
  en: {
    "crumb-home": "Home",
    "crumb-pc": "Computers",
    "crumb-accessories": "Accessories",
    "crumb-keyboard": "Keyboards",
    limited: "Limited Edition",
    "sub-txt":
      "The Nexora K1 GYZ-4 PRO combines professional performance, modern design, and premium gaming features in a compact form factor. Optical switches, high-quality acoustics, a durable aluminum frame, and customizable RGB lighting ensure a fast, precise, and comfortable user experience for both gaming and everyday work.",
    "add-to-cart": "Add to Cart",
    product: "Product Info",
    data: "Specifications",
    shipping: "Order info",
    warranty: "Warranty",
    "inf-1":
      "A keyboard that combines professional performance, modern design, and high-end gaming features into one compact body. It is designed for users who value fast response times, precision, and a comfortable experience for both gaming and everyday work.",
    "inf-2":
      "Optical switches provide ultra-fast input and minimal latency, ensuring every keystroke reaches the system instantly. Thanks to the advanced acoustic design, keystrokes feel clean, deep, and pleasantly dampened, delivering a premium typing and gaming experience.",
    "inf-3":
      "The compact design saves desk space, while the durable aluminum frame ensures stability even during intense use. Fully customizable RGB lighting allows you to create a unique setup and synchronize lighting effects with the rest of your gaming gear.",
    "inf-4":
      "The Nexora K1 GYZ-4 PRO is built for those who demand uncompromising performance, modern aesthetics, and a premium user experience in every situation.",
    overview: "Overview",
    manufacturer: "🏭 Manufacturer",
    title: "Nexora",
    type: "💻 Type",
    keyboard: "Keyboard",
    wireless: "📶 Wireless",
    yes: "Yes",
    connectivity: "🔌 Connectivity",
    color: "🎨 Color",
    customize: "Customizable",
    switch: "⌨️ Switch type",
    membrane: "Membrane",
    lighting: "🌈 Lighting",
    adjustable: "RGB, adjustable",
    battery: "🔋 Battery",
    lightoff: "96 h (lights off)",
    dimension: "Dimensions",
    weight: "⚖️ Weight",
    dimensions: "📏 Dimensions",
    form: "🧩 Form factor",
    material: "🧱 Material",
    abs: "ABS plastic",
    keysnum: "🔢 Number of keys",
    courier: "🚚 Courier delivery",
    "home-delivery": "Home delivery",
    days: "1 - 4 business days",
    store: "🏪 Store",
    "in-store": "In-store pickup",
    day: "1 - 3 business days",
    parcel: "📦 Parcel locker",
    policy: " ↩️ Return policy",
    "return-day": "14-day return policy",
    "e-store": "For online orders",
    "warranty-year": "🛡️ 2-year warranty",
    "nexora-prods": "Manufacturer warranty for all Nexora products.",
    replacement: "⚡ Fast replacement",
    defective: "Quick replacement or repair in case of a defective product.",
    support: "🔧 Technical support",
    help: "Help with setup, connection, and software-related questions.",
    "easy-return": "📦 Easy returns",
    free: "Free return via parcel locker in warranty cases.",
    "prod-might-like": "Products you might like",
    headset: "Nexora - K1 Pro GHX Headphones",
    "learn-more": "Learn more",
    mouse: "Nexora - K1 Pro 458 Mouse",
    "take-your-gaming": "We take your gaming to the next level",
    links: "Links",
    "footer-products": "Products",
    order: "Shipping",
    contact: "Contact",
    "find-us": "Find us",
    "footer-supp": "Support",
    "footer-help": "Help",
    kkk: "FAQ",
    "footer-return": "Returning",
    newsletter: "Newsletter",
    join: "Join",
    "e-mail": "Your e-mail",
    total: "Total: {price}€",
    checkout: "Checkout",
  },
  et: {
    "crumb-home": "Avaleht",
    "crumb-pc": "Arvutid",
    "crumb-accessories": "Lisaseadmed",
    "crumb-keyboard": "Klaviatuurid",
    limited: "Piiratud koguses",
    "sub-txt":
      "Nexora K1 GYZ-4 PRO ühendab professionaalse jõudluse, modernse disaini ja premium-klassi mängurifunktsioonid kompaktses korpuses. Optilised nupud, kvaliteetne akustika, vastupidav alumiiniumraam ja kohandatav RGB-valgustus tagavad kiire, täpse ja mugava kasutuskogemuse nii mängimiseks kui ka igapäevatööks.",
    "add-to-cart": "Lisa Ostukorvi",
    product: "Toote info",
    data: "Andmed",
    shipping: "Tarneinfo",
    warranty: "Garantii",
    "inf-1":
      "Klaviatuur, mis ühendab professionaalse jõudluse, modernse disaini ja tipptasemel mängurifunktsioonid ühte kompaktsesse korpusesse. Klaviatuur on loodud kasutajatele, kes hindavad kiiret reageerimist, täpsust ja mugavat kasutuskogemust nii mängides kui ka igapäevatöös.",
    "inf-2":
      "Optilised nupud tagavad ülikiire sisendi ning minimaalse latentsuse, võimaldades igal vajutusel jõuda süsteemini hetkega. Tänu täiustatud akustilisele konstruktsioonile on klahvivajutused puhtad, sügavad ja meeldivalt summutatud, pakkudes kvaliteetset kirjutamis- ja mängutunnetust.",
    "inf-3":
      "Kompaktne korpus säästab lauaruumi, samal ajal kui vastupidav alumiiniumraam tagab stabiilsuse ka intensiivse kasutuse ajal. Täielikult kohandatav RGB-valgustus võimaldab luua omanäolise seadistuse ning sünkroonida valgusefekte ülejäänud mängurivarustusega.",
    "inf-4":
      "Nexora K1 GYZ-4 PRO on loodud neile, kes soovivad kompromissitut jõudlust, modernset esteetikat ja premium-klassi kasutuskogemust igas olukorras.",
    overview: "Üldinfo",
    manufacturer: "🏭 Tootja",
    title: "Nexora",
    type: "💻 Tüüp",
    keyboard: "Klaviatuur",
    wireless: "📶 Juhtmevaba",
    yes: "Jah",
    connectivity: "🔌 Ühenduvus",
    color: "🎨 Värvus",
    customize: "Kohandatav",
    switch: "⌨️ Klahvi tüüp",
    membrane: "Membraan",
    lighting: "🌈 Valgustus",
    adjustable: "RGB, reguleeritav",
    battery: "🔋 Aku",
    lightoff: "96 h (valgus väljas)",
    dimension: "Mõõtmed",
    weight: "⚖️ Kaal",
    dimensions: "📏 Mõõtmed",
    form: "🧩 Formaat",
    material: "🧱 Materjal",
    abs: "ABS plastik",
    keysnum: "🔢 Klahvide arv",
    courier: "🚚 Kuller",
    "home-delivery": "Koju kohaletoimetamine",
    days: "1 - 4 tööpäeva",
    store: "🏪 Kauplus",
    "in-store": "Tulen ise järgi",
    day: "1 - 3 tööpäeva",
    parcel: "📦 Pakiautomaat",
    policy: " ↩️ Tagastus",
    "return-day": "14-päevane tagastusõigus",
    "e-store": "E-poe tellimustele",
    "warranty-year": "🛡️ 2-aastane garantii",
    "nexora-prods": "Tootjapoolne garantii kõikidele Nexora toodetele.",
    replacement: "⚡ Kiire vahetus",
    defective: "Defektse toote korral kiire asendus või remont.",
    support: "🔧 Tehniline tugi",
    help: "Abi seadistamisel, ühendamisel ja tarkvara küsimustes.",
    "easy-return": "📦 Lihtne tagastus",
    free: "Garantiijuhtumi korral tasuta tagastamine pakiautomaadi kaudu.",
    "prod-might-like": "Tooted mis võivad sulle huvi pakkuda",
    headset: "Nexora - K1 Pro GHX Kõrvaklapid",
    "learn-more": "Uuri lähemalt",
    mouse: "Nexora - K1 Pro 458 Hiir",
    "take-your-gaming": "Viime sinu mängukogemuse järgmisele tasemele",
    links: "Lingid",
    "footer-products": "Tooted",
    order: "Tarne",
    contact: "Kontakt",
    "find-us": "Jälgi meid",
    "footer-supp": "Tugi",
    "footer-help": "Abi",
    kkk: "KKK",
    "footer-return": "Tagastus",
    newsletter: "Uudiskiri",
    join: "Liitu",
    "e-mail": "Sinu e-mail",
    total: "Summa: {price}€",
    checkout: "Vormista tellimus",
  },
};

let currentLang = "et";

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.classList.contains("total")) return;

    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = translations[lang][key];
  });

  updateCartUI();
}
