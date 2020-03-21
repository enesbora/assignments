// Degisken tanimlari
let sayiAdedi;
let yaziIleSayilar;
let rakamIleSayilar;
const numbers = [
    "sifir",
    "bir",
    "iki",
    "uc",
    "dort",
    "bes",
    "alti",
    "yedi",
    "sekiz",
    "dokuz",
    "on",
    "on bir",
    "on iki",
    "on uc",
    "on dort",
    "on bes"
];


// Cagirilan fonksiyonlar
sayiAdedi = kacAdetSayi();

yaziIleSayilar = yaziIleSayiGir(sayiAdedi, numbers);

rakamIleSayilar = yaziyiRakamaCevir(yaziIleSayilar, numbers);

sayilariTopla(rakamIleSayilar);

sayilariCarp(rakamIleSayilar);

ortalamaHesapla(rakamIleSayilar);

enBuyukHesapla(rakamIleSayilar);

enKucukHesapla(rakamIleSayilar);

yaziIleListele(yaziIleSayilar);

rakamIleListele(rakamIleSayilar);

kacSayiGirildi(sayiAdedi);