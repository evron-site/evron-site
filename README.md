# EVRON Next.js Starter

EVRON için Next.js + React + Framer Motion + Supabase başlangıç projesi. Vercel'e dağıtılmaya hazır proje iskeletidir.

## Yerel olarak çalıştırma

1. Bilgisayara Node.js LTS kur.
2. Bu klasörü VS Code ile aç.
3. Terminalde şu komutları çalıştır:

```bash
npm install
npm run dev
```

4. Tarayıcıda http://localhost:3000 adresini aç.

## GitHub'a yükleme

GitHub'daki `evron-site` deposunda **Add file → Upload files** yolunu kullanarak bu projenin içindeki dosya ve klasörleri yükle. `node_modules` yükleme. Sonra commit et.

## Vercel

Vercel'de projeyi GitHub deposuna bağla. Framework otomatik olarak Next.js algılanmalıdır. Build command `npm run build`.

## Supabase bağlantısı

1. Supabase'de proje oluştur.
2. `.env.example` dosyasını `.env.local` adıyla kopyala.
3. Supabase Project URL ve anon/publishable key değerlerini ekle.
4. Aynı değişkenleri Vercel → Project Settings → Environment Variables bölümüne ekle.

`lib/supabase.ts` istemciyi hazırlar; henüz üyelik, sipariş veya veritabanına kayıt akışı kurulmuş değildir. Bunlar için tablo şeması, güvenlik/RLS politikaları ve sunucu tarafı işlemler ayrıca eklenmelidir.

## Şu an hazır olanlar

- Responsive, Türkçe tanıtım sayfası
- EVRON amblem görseli
- CSS ürün konsept çizimi
- Framer Motion açılış ve kaydırma animasyonları
- Mobil navigasyon
- Ürün, teknoloji, özellik ve iletişim bölümleri
- Demo ilgi formu (veri kaydetmez)
- Supabase bağlantısı için başlangıç dosyası

## Üretime çıkmadan önce

- Gerçek ürün fotoğrafları ve teknik özellikleri ekle.
- İletişim formunu API route + e-posta servisine bağla.
- Sepet, siparişler, üyelik ve yönetim panelini Supabase RLS ile uygula.
- Ödeme sağlayıcısını ve KVKK/mesafeli satış metinlerini tamamla.
- Erişilebilirlik, güvenlik ve mobil testleri yap.
