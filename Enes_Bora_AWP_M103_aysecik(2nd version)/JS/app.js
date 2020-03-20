let sayilar = ["sifir", "bir", "iki", "uc", "dort", "bes", "alti", "yedi", "sekiz", "dokuz"];

let girilenSayi = sayiGir();
output("GIRILEN SAYI: " + girilenSayi);
output("<br><br>");


let cikartmaSonucu = cikartmaIslemi(girilenSayi, 10);
output("ISLEM SONUCU = " + cikartmaSonucu);
output("<br><br>");


output("YAZI ILE: " + sayilar[cikartmaSonucu]);