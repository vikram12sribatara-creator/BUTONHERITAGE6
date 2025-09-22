# Prompt Website: Buton Heritage (Blackbos AI)

## Judul Website
**Buton Heritage**

## Deskripsi Singkat
Buton Heritage adalah lembaga yang bergerak dalam pelestarian budaya, baik budaya benda maupun takbenda. Kami hadir untuk menjaga warisan leluhur, mendokumentasikan hasil kegiatan, serta menyebarkan pengetahuan melalui tulisan.

---

## Struktur Website

### 1. Halaman Utama (Home)
- Banner bergambar identitas budaya Buton (tarian, artefak, atau lanskap Buton)
- Sambutan singkat tentang Yayasan Buton Heritage
- Navigasi utama ke halaman: Kegiatan, Hasil, Tulisan, Visi-Misi

### 2. Visi & Misi
- **Visi:**  
  Menjadi pusat pelestarian budaya Buton, baik benda maupun takbenda, yang berkontribusi bagi generasi kini dan mendatang.
- **Misi:**
  - Melestarikan dan mendokumentasikan warisan budaya Buton.
  - Menyelenggarakan kegiatan penelitian, pameran, dan edukasi.
  - Menjadi wadah publikasi tulisan tentang budaya.
  - Membangun jaringan kerja sama nasional dan internasional.

### 3. Kegiatan
- Daftar kegiatan: pameran, workshop, diskusi budaya, penelitian lapangan, dll
- Setiap kegiatan dilengkapi foto/poster

### 4. Hasil Kegiatan
- Galeri dokumentasi hasil kegiatan (foto, video, ringkasan laporan)
- Bisa dalam bentuk galeri/grid

### 5. Tulisan
- Blog/artikel untuk publikasi tulisan anggota yayasan & kolaborator
- Artikel bisa dikategorikan: sejarah, seni, tradisi, cerita rakyat

### 6. Tentang Kami
- Sejarah singkat Buton Heritage
- Struktur organisasi:
  | Nama                        | Jabatan                                 |
  |-----------------------------|-----------------------------------------|
  | Vikram                      | Ketua Umum                              |
  | Wa Ode Elmayana             | Sekretaris                              |
  | Arief Rahmansyah Ramadhan   | Bendahara                               |
  | Annisa Tsabitdina Suhardi   | Bidang Media dan Informasi              |
  | Wa Ode Elmayana             | Bidang Kajian Ilmiah dan Penalaran      |
  | Arief Rahmansyah            | Bidang Advokasi                         |
  | Wa Ode Alfisyah Rahmadani   | Bidang Usaha Kreatif                    |
  | Annisa Tsabitdina Suhardi   | Bidang Pelestarian                      |

### 7. Login Admin
- Halaman login admin (username & password)
- Terhubung dengan MongoDB (lihat snippet koneksi di bawah)
- Admin dapat:
  - Menambah & edit kegiatan, hasil kegiatan, tulisan baru
  - Editing teks, logo, background, warna
  - Upload foto logo & background

#### MongoDB Koneksi
```js
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://vikram12sribatara_db_user:<db_password>@cluster0.a5gqfok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
```

---

## Fitur Tambahan
- Desain modern minimalis, sentuhan etnik Buton
- Warna dasar: emas, biru laut, merah, putih
- Responsif mobile & desktop
- Galeri foto dan video
- Tombol share ke media sosial
- Fitur upload foto, masukan logo, dan edit teks yang hanya bisa dilakukan oleh admin
- Panel admin untuk editing teks, logo, background, warna, upload foto/logo/background

---

## Catatan Implementasi
- Semua konten dinamis (kegiatan, hasil, tulisan, galeri, logo, warna, dsb) dapat diubah oleh admin melalui panel admin yang terhubung ke database.
- Pastikan keamanan login dan hak akses fitur admin.
- Desain visual konsisten dengan tema Buton Heritage: minimalis, etnik, warna utama sesuai panduan.

---

_Cocok digunakan untuk pembuatan website yayasan, organisasi budaya, atau portal komunitas dengan kebutuhan manajemen konten yang mudah dan tampilan profesional._