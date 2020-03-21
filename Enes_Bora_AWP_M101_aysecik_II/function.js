// Sayi adedini alan fonksiyon
function kacAdetSayi() {
    let degisken = prompt("Aysecik kac sayi gireceksin!");
    return degisken;
}

// Girilen sayilari string olarak yazdiran fonksiyon
function yaziIleListele(pYaziIleSayilar) {
    let yaziDizisi = document.getElementById("yazi-dizisi");
    yaziDizisi.innerHTML = pYaziIleSayilar.toString();
}

// Girilen sayilari rakamsal olarak listeleyen fonksiyon
function rakamIleListele(pRakamIleSayilar) {
    let sayiDizisi = document.getElementById("sayi-dizisi");
    sayiDizisi.innerHTML = pRakamIleSayilar;
}

// Girilen sayilari bir array olarak kaydeden fonksiyon
function yaziIleSayiGir(pSayiAdedi, pNumbers) {
    let i;
    let index;
    let yaziIleSayilar = [];

    for (i = 0; i < pSayiAdedi; i++) {
        let girilenSayi = prompt("Aysecik sifir ile on bes arasinda bir sayi gir!");

        index = pNumbers.indexOf(girilenSayi);

        if (index === -1) {
            alert("Lütfen geçerli bir sayı giriniz!");
            i--;
        } else {
            yaziIleSayilar.push(girilenSayi);
        }
    }

    return yaziIleSayilar;
}

// Yazi olarak girilen sayilari rakam olarak bir array icine kaydeden fonksiyon
function yaziyiRakamaCevir(pYaziIleSayilar, pNumbers) {

    let rakamIleSayilar = [];

    for (let i = 0; i < pYaziIleSayilar.length; i++) {
        let index = parseInt(pNumbers.indexOf(pYaziIleSayilar[i]));

        rakamIleSayilar.push(index);
    }

    return rakamIleSayilar;
}

// Girilen sayilari toplayan fonksiyon
function sayilariTopla(pRakamIleSayilar) {
    let toplam = 0;
    let sayilarinToplami = document.getElementById("toplam");

    for (let i = 0; i < pRakamIleSayilar.length; i++) {
        toplam = toplam + pRakamIleSayilar[i];
    }

    sayilarinToplami.innerHTML = toplam;
}

// Girilen sayilari carpan fonksiyon
function sayilariCarp(pRakamIleSayilar) {
    let carpim = 1;
    let sayilarinCarpimi = document.getElementById("carpim");

    for (let i = 0; i < pRakamIleSayilar.length; i++) {
        carpim = carpim * pRakamIleSayilar[i];
    }

    sayilarinCarpimi.innerHTML = carpim;
}

// Girilen sayilarin ortalamasini hesaplayon fonksiyon
function ortalamaHesapla(pRakamIleSayilar) {
    let toplam = 0;
    let length = pRakamIleSayilar.length;
    let ortalama = document.getElementById("ortalama");

    for (let i = 0; i < length; i++) {
        toplam = toplam + pRakamIleSayilar[i];
    }

    ortalama.innerHTML = toplam / pRakamIleSayilar.length;
}

// Girilen sayilardan en büyük olani bulan fonksiyon
function enBuyukHesapla(pRakamIleSayilar) {
    let enBuyuk = document.getElementById("en-buyuk");
    let sonuc = Math.max.apply(null, pRakamIleSayilar);
    enBuyuk.innerHTML = sonuc;
}

// Girilen sayilardan en kücük olani bulan fonksiyon
function enKucukHesapla(pRakamIleSayilar) {
    let enKucuk = document.getElementById("en-kucuk");
    let sonuc = Math.min.apply(null, pRakamIleSayilar);
    enKucuk.innerHTML = sonuc;
}

// Girilen sailarin adedini yazdiran fonksiyon
function kacSayiGirildi(pSayiAdedi) {
    let adet = document.getElementById("kac-adet-sayi");
    adet.innerHTML = pSayiAdedi;
}