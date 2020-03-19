function output(data) {
    let output = document.getElementById("output");
    output.innerHTML += data;
}

function sayiGir() {
    let cikanSayi = prompt("Sayi gir!");
    if (cikanSayi == "sifir") {
        cikanSayi = 0;
    } else if (cikanSayi == "bir") {
        cikanSayi = 1;
    } else if (cikanSayi == "iki") {
        cikanSayi = 2;
    } else if (cikanSayi == "uc") {
        cikanSayi = 3;
    } else if (cikanSayi == "dort") {
        cikanSayi = 4;
    } else if (cikanSayi == "bes") {
        cikanSayi = 5;
    } else if (cikanSayi == "alti") {
        cikanSayi = 6;
    } else if (cikanSayi == "yedi") {
        cikanSayi = 7;
    } else if (cikanSayi == "sekiz") {
        cikanSayi = 8;
    } else if (cikanSayi == "dokuz") {
        cikanSayi = 9;
    } else {
        output("Sayiyi kontrol et!");
        output("<br><br>");
    }
    return cikanSayi;
}


function cikarmaIslemi(cikanSayi, eksilenSayi) {
    return eksilenSayi - cikanSayi;
}