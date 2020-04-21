
Git Nedir?
Git, yazilan projeleri, internet üzerinde tutmamızı ve yönetmemizi sağlayan acik kaynak kodlu bir vesiyon kontrol sistemidir.

Git Neden Kullanilmali?
1- Git sistemi projelerin versiyonlarini yönetme kolayligi saglar.
2- Birden fazla kisinin es zamanli olarak ayni proje üzerinde uzaktan ya da bir arada calismasina imkan tanir.
3- Yazilan projenin gelisim sürecini izleme konusunda büyük kolaylik saglar.
4- Projede hangi degisikligin ne zaman yapildigini tespit etme olanagi saglar.
5- Projede herhangi bir hata meydana geldiginde son stabil calisan versiyona dönme olanagi saglar.

Github nedir? Temel calisma akisi (Github flow) nasildir?
İlk olarak biraz Git'ten bahsedelim. Git'te 3 bolum bulunur. Bunlar working directory, staging area ve local repo'dur. Proje dosyalarimiz uzerinde bazi degisiklikler yaptiktan sonra dosyalarimizi ilk olarak git add komutu ile staging area alanina kopyalariz. Burada yaptigimiz degisiklikleri inceledikten sonra herhangi bir problem yoksa artik dosyalarimizi git commit komutu ile local repo'ya kopyalariz. Bu asamadan sonra ise git push komutu ile local'deki repomuzu GitHup sunucularına gondeririz. GitHub'da bulunan "repository"leri de local bilgisayarimiza pull edebiliriz.

Temel Git Komutlari ve Aciklamalari

1- ‘git config’
‘git config’; kullanici adi, mail, dosya formatlari gibi genel yapilandirma ayarlari yapmamizi saglayan koddur.

git config --global user.name "enesbora"

git config --global user.email eneshocamatematik@gmail.com

Yukarıdaki komutlaı girildiğinde bütün Git projelerinizde bu kullanici adi ve mail adresi kullanilir.

2- ‘git init’
Calişma klasörümüzün icerisinde local repomuzu olusturur. ".git" dosyasi eklenir. Bu dosya gorunmezse gizli klasorleri goster seceneğini aktif etmemiz gerekiyor.

3- ‘git status’
Repository‘deki o anki durum ile ilgili bilgi verir. Calisma dosyalari ile "Staging area" alanindaki dosyalar arasindaki farklari gosterir.

4- ‘git add’
Belirtilen dosyayı ya da tüm projeyi çalışma dizinine(Index) ekler. Yani commit‘lenmeye hazir hale getirir.

git add -a bütün dosyalari staging area alanina kopyalar.
git add –all bütün dosyaları staging area alanina kopyalar.
git add . yeni dosyaları ve degisen dosyalari staging area alanina kopyalar, silinen dosyalar haric.
git add -u degisiklik olan ve silinen dosyalari staging area alanina kopyalar, yeni dosyalar haric.

5- ‘git commit’
Calışma dizinine eklenen dosyalari head denilen .git klasörü icindeki kisma ekler. Commit islemi yerelde gerceklesen bir islemdir. Uzak sunucudaki "repository"de bir değişiklik yapmaz.

git commit -m "Yapılan içi açıklayan yorumunuz"

7- ‘git push’
Commit‘lenmiş degisikliklerin uzak sunucudaki "repository"ye gönderilmesini sağlayan komuttur.

8- ‘git clone’
Bu komutla local’de ya da uzak bir sunucuda yer alan bir repository’nin calisan kopyasini icinde bulunulan dizine kopyalar

9- ‘git rm’
Belirtilen bir dosyayı çalışma dizininden siler.

10- ‘git pull’
Uzak sunucudaki "repository"de degistirilmis ya da yeni eklenmis dosyalar varsa bunları indirir ve yereldeki "repository" ile birleştirir.

Bilgisayarda yeni bir repository olusturma ve Github'a yukleme adimlari
1- git init
2- git add .
3- git commit -m "Aciklama"
4- GitHub da bos bir repository olusturuyoruz
5-git remote add "GitHub Repository Name" "GitHub Repository Url"
6- git push -u "GitHub Repository Name" master
7- GitHub kullanici adi ve parola girilir
8- Bu asamadan sonra bilgisayardaki repo GitHub'a yuklenir

Github'da bulunan bir repository'i bilgisayara kaydetme ve yeni dosyalarla Github'a tekrar yukleme adimlari
1- git clone "clone linki"
2- git add .
3- git commit -m "Aciklama"
4- git push
