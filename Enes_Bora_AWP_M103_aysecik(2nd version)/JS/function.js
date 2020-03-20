// Output function

function output(data) {
    let output = document.getElementById("output");
    output.innerHTML += data;
}

// Solving function
let girilenDeger = 0;

function sayiGir() {
    let girilenDeger = prompt("Aysecik bir sayi gir!");
    girilenDeger = sayilar.indexOf(girilenDeger);
    return girilenDeger;
}

function cikartmaIslemi(girilenDeger, eksilenSayi) {
    return eksilenSayi - girilenDeger;

}