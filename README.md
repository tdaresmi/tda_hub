> # TDA Hub
>
> TDA'nın mevcut projelerini tek bir keşif sayfasında bir araya getiren, Türkçe ve mobil uyumlu statik web sayfası. Saf HTML, CSS ve JavaScript kullanır; paket kurulumuna veya derleme adımına ihtiyaç duymaz.
>
> ## Dosyalar
>
> * `index.html` — sayfa içeriği ve proje bağlantıları
> * `styles.css` — görsel tasarım, animasyonlar ve mobil düzen
> * `script.js` — proje arama/filtreleme ve mobil menü
>
> ## Yerelde görüntüleme
>
> Dosyaları aynı klasörde tut. En kolay yöntem `index.html` dosyasını tarayıcıda açmaktır. İstersen klasörün içinde bir terminal açıp şu komutla yerel sunucu başlatabilirsin:
>
> ```bash
> python3 -m http.server 8000
> ```
>
> Ardından tarayıcıda `http://localhost:8000` adresini aç.
>
> ## GitHub'a yükleme
>
> 1. GitHub'da yeni bir depo oluştur. Bu sayfa için yeni bir depo kullan; mevcut TDA projelerinin dosyalarını değiştirme.
> 2. `index.html`, `styles.css`, `script.js` ve `README.md` dosyalarını deponun kök dizinine yükle.
> 3. Dosyaları GitHub arayüzünden yüklediysen değişiklikleri **Commit changes** ile kaydet.
>
> ## Vercel'de ayrı bir site oluşturma
>
> 1. Vercel'de **Add New → Project** yolunu aç ve bu yeni GitHub deposunu içe aktar.
> 2. **Framework Preset** olarak **Other** seç. **Build Command** ve **Output Directory** alanlarını boş bırak; **Root Directory** deponun kökü (`./`) olarak kalsın.
> 3. **Deploy** ile yeni, bağımsız siteyi oluştur.
>
> Bu kaynaklar hazırlanırken GitHub'a yükleme veya Vercel dağıtımı yapılmadı. Mevcut projelerin hiçbirinde değişiklik yapılmadı.
>
> ## Proje adresleri
>
> Altı bağlantı `index.html` içinde hazırdır. Herhangi bir adresi değiştireceksen ilgili proje kartının `href` değerini güncelle.
>
> * TDA Asistan — https://tdaresmi.vercel.app
> * TDA Echo — https://tda-echo.vercel.app
> * TDA QR — https://tdaqr.vercel.app
> * TDA Life — https://tda-life.vercel.app
> * TDA Flow — https://tda-flow.vercel.app
> * TDA Volt — https://tda-volt.vercel.app
>
> “Yakında” kartları yalnızca yol haritasındaki fikirleri gösterir; henüz yayımlanmış ürün veya kesin çıkış tarihi anlamına gelmez.
