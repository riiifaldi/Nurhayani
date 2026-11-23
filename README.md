# PANDUAN PENGGUNAAN & DOKUMENTASI SISTEM
## Sistem Informasi Magang & Riset (SIMAGANG-RISET)
**Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan**
*Sesuai Standar Pelayanan Publik SPBE & Aturan Desain Anti-AI Slop*

---

## 📁 DAFTAR BERKAS PROJECT

1. **`index.html`**  
   Antarmuka web utama lengkap dengan 10 tab fungsional: Beranda, Profil Instansi, Daftar Unit & Kuota Realtime, Formulir Magang, Formulir Riset, Tracking Status, Daftar Sertifikat, Cek Dokumen QR, Dashboard Peserta, dan Panel Admin Operator.
2. **`app.js`**  
   Logika bisnis aplikasi, state persistence, audit trail tracking, perhitungan nilai rata-rata 5 kriteria, generator QR code, dan adaptor Supabase Client v2.
3. **`print.css`**  
   Stylesheet format cetak presisi A4 untuk Surat Balasan Kedinasan Resmi dan Sertifikat Digital 2 Sisi (Muka & Belakang).
4. **`supabase_schema.sql`**  
   Skema basis data PostgreSQL Supabase lengkap (DDL tabel, foreign keys, triggers kalkulasi kuota unit otomatis, RLS policies, indexing, dan data seed awal).
5. **`wireframe.md`**  
   Dokumentasi wireframe, arsitektur informasi, matriks kontras warna WCAG AA, dan sketsa tata letak antarmuka.

---

## 🚀 CARA MENJALANKAN WEBSITE

### Cara 1: Langsung Buka di Browser (Paling Praktis)
1. Cukup klik ganda (*double click*) berkas **`index.html`** di folder project ini pada browser pilihan Anda (Google Chrome, Microsoft Edge, atau Firefox).
2. Seluruh fitur sudah berjalan interaktif 100% menggunakan mode data lokal cerdas (*localStorage* & *in-memory*).

### Cara 2: Menjalankan Menggunakan Local HTTP Server
Buka terminal pada direktori `c:\rifal\Joki\isra` dan jalankan:
```bash
npx serve .
# atau
python -m http.server 8000
```
Buka browser pada alamat `http://localhost:3000` atau `http://localhost:8000`.

---

## 🗄️ CARA MENGHUBUNGKAN DATABASE SUPABASE (POSTGRESQL)

1. **Buat Proyek di Supabase:**
   - Kunjungi [https://supabase.com](https://supabase.com) dan login/daftar akun gratis.
   - Buat proyek baru (*New Project*), misalnya dengan nama `simagang-sulsel`.

2. **Eksekusi Skema SQL:**
   - Buka menu **SQL Editor** di dashboard Supabase Anda.
   - Salin seluruh isi berkas **`supabase_schema.sql`**, tempel di SQL Editor, lalu klik tombol **Run**.
   - Seluruh tabel (`units`, `applications`, `application_timeline`, `logbooks`, `evaluations`, `certificates`, `feedbacks`), trigger kalkulasi kuota otomatis, dan data seed resmi akan otomatis tercipta.

3. **Sambungkan ke Aplikasi Web:**
   - Di dashboard Supabase, buka menu **Project Settings** > **API**.
   - Salin **Project URL** dan **anon / public key**.
   - Buka aplikasi web `index.html`, klik tombol **"Konfigurasi Supabase"** di pojok kanan atas navbar (atau klik tombol **Database Supabase** di Panel Admin).
   - Masukkan Project URL dan Anon Key, lalu klik **Simpan & Hubungkan**.
   - Indikator status di pojok kanan atas akan langsung berubah menjadi hijau: `🟢 Supabase Terhubung`.

---

## 🛡️ PENERAPAN PRINSIP DESAIN ANTI-AI SLOP

1. **Palet Warna & Suasana:**
   - Tidak ada tema gelap hitam pekat dengan glow neon ungu/pink.
   - Menggunakan warna resmi kedinasan Pemprov Sulsel: **Sulsel Deep Navy (`#0B2545`)**, **Sulsel Gold Ochre (`#B48324`)**, **Clean Slate (`#F8FAFC`)**, dan teks kontras tinggi **Charcoal Ink (`#0F172A`)** berstandar aksesibilitas WCAG AAA/AA.
2. **Tipografi & Hierarki:**
   - Menggunakan `Plus Jakarta Sans` untuk judul display dan `Inter` untuk data tabel yang padat dan mudah dibaca. Teks panjang disusun rata kiri (ergonomis).
3. **Struktur Komponen Fungsional:**
   - Tabel kuota data padat dengan status pill jelas (*Menerima*, *Kuota Terbatas*, *Penuh*).
   - Pelacak status (*tracking timeline*) dengan catatan disposisi dan penanggung jawab nyata.
   - Transkrip penilaian 5 kriteria resmi: Disiplin (96), Kerjasama (98), Inisiatif (95), Sikap (95), Tanggung Jawab (98) dengan rata-rata 96.4 (Sangat Baik).
4. **Mikro-kopi Realistis:**
   - Nomenklatur birokrasi pemerintahan resmi: *Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan*, *Kepala Dinas Dr. Jayadi Nas, S.Sos, M.Si (NIP. 19710501 199803 1 004)*, dan *Pembimbing Instansi Suriamma, SH, M.Si (NIP. 19780712 200212 2 011)*.
5. **Interaksi Jelas:**
   - Semua tombol memiliki state interaktif (*hover*, *focus*, *active*, *disabled*). Fitur cetak langsung memformat dokumen ke ukuran A4 siap cetak/PDF.
