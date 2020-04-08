/**
 * Bu aplikasyon, bilgileri girilen kisiyi kayit eder. Kayitli kisileri tabloda listeler. Tablo üzerinde siralama ve filtreleme imkani sunar.
 * 
 * Aplikasyon akisi
 *  - Kullanici soldaki formda isim, soyisim bilgilerini girer ve kanton bilgisini secer.
 *  - Formu tamamladiktan sonra kaydet butonuna tiklar.
 *  - Tiklama isleminin ardindan bilgiler kaydedilir.
 *  - Her tiklama sonrasi form bilgileri sifirlanir.
 *  - Her kayir isleminin ardindan kayitli tüm kisiler sagdaki tabloda listelenir.
 *  - Listelenen tabloda isim, soyisim ve kantona göre a'dan z'ye ya da z'den a'ya siralama yapilabilir.
 *  - Tablonun üst kismindaki arama kutusuna yazilan isim ya da soyisme göre filtreleme yapilabilir.
 */


let person = new Person();
let canton = new Canton();
let sort = new Sort();
let filter = new Filter();
let dom = new DOM();
let manager = new Manager();

/**
 * Aplikasyonu baslat.
 */
manager.start();