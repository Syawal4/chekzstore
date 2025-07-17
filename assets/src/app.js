document.addEventListener("alpine:init", () => {
  Alpine.data("productUnggulan", () => ({
    items: [
      {
        id: 1,
        name: "Rouge - Jayrosse",
        img: "1.jpg",
        price: 89000,
        detail:
          "EAU DE PERFUME 30ml Character: Manly Romantic Longevity: Up To 6-8 Hours • Top notes: Calabrian bergamot and Pepper • Middle notes: Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium and elemi • Base notes: Ambroxan, Cedar and Labdanum",
      },
      {
        id: 2,
        name: "Cool Water Intense - Davidoff",
        img: "2.jpg",
        price: 640000,
        detail:
          "Discover Cool Water Intense, Davidoff, Eau de Parfum. A new take on Cool Water freshness with an ethically sourced ingredient, the handpicked green mandarin from Brazil. The scent unfolds into oriental notes of coconut water blended with the sensuality of amber accord. Your ultimate call of freshness, hedonism and seduction.",
      },
      {
        id: 3,
        name: "Y Eau de Parfum - YSL",
        img: "3.jpg",
        price: 2720000,
        detail:
          "Top Note: Bergamot, Ginger, Apple Middle Note: Sage, Juniper Berries, GeraniumBase Note: Vetiver, Cedar, Amberwood, Tonka Bean, Olibanum",
      },
      {
        id: 4,
        name: "Got My Mojo Back - Alchemist",
        img: "4.jpg",
        price: 249000,
        detail:
          "An elegant combination of gourmand notes and woodiness, Got My Mojo Back is a magnificent tribute to long nights under the neon lights. The aroma of praline and jasmine make for a euphoric and unforgettable scent. Sit down, treat yourself for a drink and wait for the compliments to roll in.",
      },
      {
        id: 5,
        name: "California - Mykonos",
        img: "5.jpg",
        price: 249000,
        detail:
          "It creates a seductive and inviting summer impression with an exotic twist. In the base, Teak wood and vetiver beautifully cut through the freshness of California, giving a classic & gentle reminder of old wealth, an incredibly sensual and sophisticated impression.",
      },
      {
        id: 6,
        name: "Vanilla Clouds - Mykonos",
        img: "6.jpg",
        price: 140000,
        detail:
          "That ultimate tempting, velvety vanilla fragrance, a staple in every girl’s wardrobe. Gourmand vanilla meets sweet marshmallow and fresh musks, evoking a sugary, warm, cozy feel, almost like you’re floating amongst the fluffiest clouds. Sensastion Warm & Flirty",
      },
      {
        id: 7,
        name: "The Most Wanted - Azzaro",
        img: "7.jpg",
        price: 1640000,
        detail:
          "Azzaro The Most Wanted membuka babak penciuman baru dengan aroma Fougere Woody Ambery, menciptakan jejak yang adiktif, canggih, dan magnetis.",
      },
      {
        id: 8,
        name: "Le Male Le Parfum - JPG",
        img: "8.jpg",
        price: 2525000,
        detail:
          "Drawing on the potency of cardamom in its top notes and the freshness of lavender and iris at its heart, this intense eau de parfum ultimately promises to immerse you in its wonderfully addictive and prominent vanilla base note. An olfactory odyssey full of contrasts to disorient and delight the senses, its masculine trail revealing the charisma of an officer.",
      },
    ],
  }));

  Alpine.data("allProduct", () => ({
    items: [
      {
        id: 1,
        name: "Rouge - Jayrosse",
        img: "1.jpg",
        price: 89000,
        detail:
          "EAU DE PERFUME 30ml Character: Manly Romantic Longevity: Up To 6-8 Hours • Top notes: Calabrian bergamot and Pepper • Middle notes: Sichuan Pepper, Lavender, Pink Pepper, Vetiver, Patchouli, Geranium and elemi • Base notes: Ambroxan, Cedar and Labdanum",
      },
      {
        id: 2,
        name: "Cool Water Intense - Davidoff",
        img: "2.jpg",
        price: 640000,
        detail:
          "Discover Cool Water Intense, Davidoff, Eau de Parfum. A new take on Cool Water freshness with an ethically sourced ingredient, the handpicked green mandarin from Brazil. The scent unfolds into oriental notes of coconut water blended with the sensuality of amber accord. Your ultimate call of freshness, hedonism and seduction.",
      },
      {
        id: 3,
        name: "Y Eau de Parfum - YSL",
        img: "3.jpg",
        price: 2720000,
        detail:
          "Top Note: Bergamot, Ginger, Apple Middle Note: Sage, Juniper Berries, GeraniumBase Note: Vetiver, Cedar, Amberwood, Tonka Bean, Olibanum",
      },
      {
        id: 4,
        name: "Got My Mojo Back - Alchemist",
        img: "4.jpg",
        price: 249000,
        detail:
          "An elegant combination of gourmand notes and woodiness, Got My Mojo Back is a magnificent tribute to long nights under the neon lights. The aroma of praline and jasmine make for a euphoric and unforgettable scent. Sit down, treat yourself for a drink and wait for the compliments to roll in.",
      },
      {
        id: 5,
        name: "California - Mykonos",
        img: "5.jpg",
        price: 249000,
        detail:
          "It creates a seductive and inviting summer impression with an exotic twist. In the base, Teak wood and vetiver beautifully cut through the freshness of California, giving a classic & gentle reminder of old wealth, an incredibly sensual and sophisticated impression.",
      },
      {
        id: 6,
        name: "Vanilla Clouds - Mykonos",
        img: "6.jpg",
        price: 140000,
        detail:
          "That ultimate tempting, velvety vanilla fragrance, a staple in every girl’s wardrobe. Gourmand vanilla meets sweet marshmallow and fresh musks, evoking a sugary, warm, cozy feel, almost like you’re floating amongst the fluffiest clouds. Sensastion Warm & Flirty",
      },
      {
        id: 7,
        name: "The Most Wanted - Azzaro",
        img: "7.jpg",
        price: 1640000,
        detail:
          "Azzaro The Most Wanted membuka babak penciuman baru dengan aroma Fougere Woody Ambery, menciptakan jejak yang adiktif, canggih, dan magnetis.",
      },
      {
        id: 8,
        name: "Le Male Le Parfum - JPG",
        img: "8.jpg",
        price: 2525000,
        detail:
          "Drawing on the potency of cardamom in its top notes and the freshness of lavender and iris at its heart, this intense eau de parfum ultimately promises to immerse you in its wonderfully addictive and prominent vanilla base note. An olfactory odyssey full of contrasts to disorient and delight the senses, its masculine trail revealing the charisma of an officer.",
      },
      {
        id: 9,
        name: "Stronger With You Intensely - Armani",
        img: "9.jpg",
        price: 2190000,
        detail:
          "Discover Stronger With You Eau de Toilette, the energetic fragrance for men. Indulge in the spicy pink peppercorn accord in the top notes coupled with a warm mix of cardamom, chestnut and violet leaves.",
      },
      {
        id: 10,
        name: "FA Ghost Spectre",
        img: "10.jpg",
        price: 500000,
        detail:
          "Top notes : Ginger, Bergamot, Pink Pepper and Green Notes. Middle notes : Cardamom, Black Currant and Turkish Rose. Base notes : Vanilla, Sandalwood, Benzoin, Cedar, Patchouli, Ambergris and Musk. Klasifikasi aroma : Warm Spicy, Vanilla, Woody",
      },
      {
        id: 11,
        name: "Burgundy Barocca",
        img: "11.jpg",
        price: 195000,
        detail:
          "Top notes : Saffron, Jasmine. Middle notes : Amberwood, Ambergris. Base notes : Cedar, Fir Resin. Klasifikasi Aroma : Amber Fougere. Kekuatan Aroma: Strong. Ketahanan Aroma: 10-12  Jam. Waktu Pemakaian: Malam Hari",
      },
      {
        id: 12,
        name: "Alt Baron",
        img: "12.jpg",
        price: 284050,
        detail:
          "Alt BARON is a masculine perfume that is suitable for those of you who always need freshness in every activity. Its sweet top notes slowly transform into unique musky, whisky, and leathery scents that make it suitable for day or night wear.",
      },
      {
        id: 13,
        name: "Alt Morrocan Sunset",
        img: "13.jpg",
        price: 331500,
        detail:
          "A perfume inspired by the magic of Neroli. a plant with a unique aroma that comes from Morocco which is one of the sexiest destinations in the world. Sunset in Morocco is a transition from an active day to an exotic night full of glitter and fun so Alt Morrocan Sunset really describes you who have a personality that is always ready to conquer the night, ready to unlock this alter ego?",
      },
      {
        id: 14,
        name: "Bali surfers blue point edp",
        img: "14.jpg",
        price: 250000,
        detail:
          "Blue Point for Him. Top Notes : Cytrus, Fruity, Oceanic. Middle Notes : Flowery, Worm Spicy, Marine. Base Notes : Musky, Woody.",
      },
      {
        id: 15,
        name: "Nautica voyage EDT",
        img: "15.jpg",
        price: 245000,
        detail:
          "Description: Kekuatan Aroma: Sedang. Ketahanan Aroma: 6 - 10 Jam. Waktu Pemakaian: Siang hari. Klasifikasi Aroma: Green, Fruity, Floral. Top Note: Green Leaves, apple. Middle Note: Lotus, Mimosa. Base Note: Amber, Musk, Oakmoss, cedar",
      },
      {
        id: 16,
        name: "Kahf reverse oud eau",
        img: "16.jpg",
        price: 94000,
        detail:
          "Kehadiran aroma Oud dan Amber lekat dengan warisan tradisi budaya. Hint Gourmand dan Vanilla membawa kembali manisnya memori terdahulu. Sentuhan awal Rose membuat kita semakin cinta pada tempat kita bermula.",
      },
      {
        id: 17,
        name: "Bonjour quantum",
        img: "17.jpg",
        price: 195000,
        detail:
          "Klasifikasi Aroma : Fresh, Aromatic, Aquatic. Top Note : Melon, Bergamot, Mint, Black Currant. Middle Note : Sea Water, Green Apple, Cappucino, Cardamon, Nutmeg. Base Note : Amber, Woodsy Notes ",
      },
      {
        id: 18,
        name: "Armaf CDNIM",
        img: "18.jpg",
        price: 510000,
        detail:
          "Description: Creed Aventus Killer. Kekuatan Aroma: Sedang., Ketahanan Aroma: 6 - 10 Jam. Waktu Pemakaian Terbaik: Malam hari. Klasifikasi Aroma: Woody Spicy. Top Note : Lemon, Black Currant, Apple, Bergamot, Pineapple. Middle Note : Rose, Jasmine, Birch. Base Note : Vanilla, Ambergris, Musk, Patchouli",
      },
      {
        id: 19,
        name: "Jo Malone English Pear & Freesian",
        img: "19.jpg",
        price: 1850000,
        detail:
          "Kekuatan Aroma: Sedang. Ketahanan Aroma: 8 -10 Jam. Waktu Pemakaian Terbaik: Siang hari. Klasifikasi Aroma: Floral, Fruity, Sweet. Top Note : Pear and Melon. Middle Note : Freesia and Rose. Base Note : Musk, Patchouli, Rhuburb and Amber",
      },
      {
        id: 20,
        name: "FA Aethern",
        img: "20.jpg",
        price: 480000,
        detail:
          "Kekuatan Aroma : Sedang. Ketahanan Aroma : 6 Jam. Waktu Pemakaian Terbaik : Siang hari. Klasifikasi : woody, fruity, green. Top Notes: Green Apple, Bergamot, Mandarin Orange. Middle Notes: Cedar, Petitgrain, Violet, Cashmeran. Base Notes: Musk, Oakmoss, Amberwood",
      },
      {
        id: 21,
        name: "Afnan supremacy not only intense",
        img: "21.jpg",
        price: 650000,
        detail:
          "Kekuatan Aroma : Kuat. Ketahanan Aroma : 8-10 Jam. Waktu Pemakaian Terbaik : Sehari-hari. Klasifikasi Aroma: Fruity, Mossy, Citrus, Woody. Top notes: Black Currant, Bergamot and Apple. Middle notes: Oakmoss, Patchouli and Lavender. Base notes: Ambergris, Saffron and Musk.",
      },
      {
        id: 22,
        name: "Alchemist - Bois et musc",
        img: "22.jpg",
        price: 529000,
        detail:
          "Clarity of a blooming forest — Bois et musc blends the earthy and richness of woods and moss with the soft allure of musky notes and innocence of muguet, creating a spring morning trail that speaks to the soul.",
      },
      {
        id: 23,
        name: "Alchemist Onirique",
        img: "23.jpg",
        price: 449000,
        detail:
          "Step into a world of timeless opulence with Onirique, a perfume that encapsulates the essence of elegance. This exquisite fragrance is a harmonious blend of fruity from pear, tuberose, orange blossom, jasmine and vanilla that create a captivating olfactory experience. It evokes a sense of nostalgia for an era of old-world glamour and refinement, making it the perfect choice for those who appreciate the finer things in life.",
      },
      {
        id: 24,
        name: "Mykonos Luminos",
        img: "24.jpg",
        price: 269000,
        detail:
          "The first ever glow in the dark perfume. An unforgettable fragrance experience, like never beforWait, There’s more to discover,This perfume is not just about your bottle lighting up, there’s another secret we are yet to reveal. For the very first time, we created our very own “Accord” an accord you’ve never thought of before",
      },
      {
        id: 25,
        name: "Mykonos Satin Blanc",
        img: "25.jpg",
        price: 75000,
        detail:
          "Where the satin like touch of snow kissed apples intertwines with the refreshing coolness of bergamot & aquatic notes, a fresh airiness from jasmine tea, and the milky warmth from white amber & vanilla.d",
      },
      {
        id: 26,
        name: "Mykonos slow living",
        img: "26.jpg",
        price: 126000,
        detail:
          "Mykonos Slow Living merupakan aroma kehidupan yang lambat. Seakan sedang berlibur di pesisir Italia, duduk di balkon, di bawah pohon lemon Italia yang segar, Angin semilir berhembus membawa segarnya udara lautan, ditambah dengan aroma cucian yang bersih",
      },
      {
        id: 27,
        name: "Hint Noble",
        img: "27.jpg",
        price: 249000,
        detail:
          "Ingredients :Alcohol, Fragrance, Water, Glycerin,    Hexamethylindanopyran, Propylene Glycol, Phenylbenzimidazole Sulfonic Acid, CI 60730, Benzophenone-4, Buteth-3, Sodium Benzotriazolyl Butylphenol Sulfonate, CI 42051, Tributyl Citrate.",
      },
      {
        id: 28,
        name: "Hint Naked",
        img: "28.jpg",
        price: 249000,
        detail:
          "The vivid aroma from oud, guaiacwood, and rose to create a luxurious scent on the skin. With NeutralizeScent Technology™, this fragrance can fight unpleasant odour from sweat.",
      },
      {
        id: 29,
        name: "Fragrance World YYY",
        img: "29.jpg",
        price: 495000,
        detail:
          "Klasifikasi Aroma: aromatic, woody, fresh spicy. Top Note : Apple, Ginger and Bergamot. Middle Note : Sage, Juniper Berries and Geranium. Base Note : Amberwood, Tonka Bean, Cedar, Vetiver and Olibanum",
      },
      {
        id: 30,
        name: "HMNS Darker Shade of O",
        img: "30.jpg",
        price: 380000,
        detail:
          "The base notes of Vanilla Beans, Cedarwood, Amber, and Vetiver add a touch of elegance and sophistication, rounded out this exquisite fragrance. Its smoky and mysterious character makes it a unique and unforgettable fragrance, perfect for those who want to stand out from the crowd.",
      },
      {
        id: 31,
        name: "Lattafa Fakhar",
        img: "31.jpg",
        price: 375000,
        detail:
          "Top notes are Apple, Bergamot and Ginger. middle notes are Lavender, Sage, Juniper Berries and Geranium. base notes are Tonka Bean, Amberwood, Cedar and Vetiver.",
      },
      {
        id: 32,
        name: "Eliotte Morning Kiss EDP",
        img: "32.jpg",
        price: 199000,
        detail:
          "Ever feel confused about what perfume to use to start the day? Morning Kiss is the answer, a fragrance that can really lift your mood and is easily accepted by your surroundings. It starts with citrus combined with ginger and a touch of tea fragrance. This is your daily fragrance choice.",
      },
      {
        id: 33,
        name: "Rue Brocca Theoreme Matrix",
        img: "33.jpg",
        price: 320000,
        detail:
          "Klasifikasi Aroma : Citrus, Spicy, Woody, Fresh. Top Notes: Pineapple, Grapefruit, Bergamot and Black Currant. Middle Notes: Cedar, Patchouli, Jasmine and Lavender. Base Notes: Oakmoss, Woody, Musk and Saffron",
      },
      {
        id: 34,
        name: "Zimaya Mazaaj Infused",
        img: "34.jpg",
        price: 599000,
        detail:
          "Top Note: Citron, Orange and Bergamot. Middle Note: Neroli and Ginger. Base Note: Ambroxan, Olibanum and Wood. Aroma : Fresh Spicy",
      },
      {
        id: 35,
        name: "French Avenue Liquid Brun",
        img: "35.jpg",
        price: 540000,
        detail:
          "Top Notes : Cinnamon, Cardamom, Orange Blossom, Bergamot. Heart Notes : Bourbon Vanilla, Elemi. Base Notes : Praline, Musk, Ambroxan, Guaiac Wood",
      },
      {
        id: 36,
        name: "Zhimaya sharaf blend",
        img: "36.jpg",
        price: 395000,
        detail:
          "Zimaya Sharaf Blend Extrait De Parfum 100ml is a captivating fragrance that incorporates the essence of fine cognac, infusing it with a natural caramel hue. It opens with the rich aroma of cognac oil, complemented by oak absolute, cinnamon essence, and tonka bean absolute. As the fragrance lingers, you'll be enchanted by the warm and inviting notes of sandalwood, praline, and vanilla, creating a truly exquisite olfactory experience.",
      },
    ],
  }));

  Alpine.data("productDetail", () => ({
    open: false, // untuk ngatur detail open/close
    item: {}, // untuk data produk yang diklik

    show(item) {
      this.item = item; // isi datanya saat klik
      this.open = true; // buka detail
    },

    close() {
      this.open = false; // tutup detail
    },
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika sudah ada, cek apakah barang beda atau sama
        this.items = this.items.map((item) => {
          // jika barang beda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang berbeda, tambah quantity dan totalnya
            cartItem.quantity++;
            cartItem.total = cartItem.price * cartItem.quantity;
            this.quantity++;
            this.total += newItem.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // remove item berdasarkan idnya
      const cartItem = this.items.find((item) => item.id === id);

      //jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if (item.id !== id) {
            return item;
          } else {
            cartItem.quantity--;
            cartItem.total = cartItem.price * cartItem.quantity;
            this.quantity--;
            this.total -= cartItem.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("input", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (name && email && phone && address) {
    checkoutButton.classList.remove("disabled");
    checkoutButton.disabled = false;
  } else {
    checkoutButton.classList.add("disabled");
    checkoutButton.disabled = true;
  }
});

checkoutButton.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  const message = formatMessage(objData);
  window.open("http://wa.me/6285136413252?text=" + encodeURIComponent(message));
  sessionStorage.setItem("checkoutSuccess", "1");
  window.location.reload();
});

window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("checkoutSuccess") === "1") {
    // Tampilkan notifikasi sukses
    const notif = document.createElement("div");
    notif.className = "success-notif";
    notif.innerText = "Your order was successful! Thank you for shopping.";
    document.body.prepend(notif);

    // Hapus flag supaya notifikasi hanya sekali
    sessionStorage.removeItem("checkoutSuccess");

    // Notifikasi hilang setelah beberapa detik:
    setTimeout(() => notif.remove(), 10000);
  }
});

const formatMessage = (obj) => {
  return `Data Customer
    Nama: ${obj.name}
    Email: ${obj.email}
    No HP: ${obj.phone}
    Alamat: ${obj.address}
  Data Pesanan
  ${JSON.parse(obj.items).map(
    (item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`
  )}
  Total: ${rupiah(obj.total)}
  Terima kasih.`;
};

// Mata uang rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
