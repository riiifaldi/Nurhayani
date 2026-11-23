# WIREFRAME & DOKUMEN ARSITEKTUR INFORMASI
## Sistem Informasi Magang & Riset (SIMAGANG-RISET)
**Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan**
*Sesuai Standar Layanan Publik Terpadu SPBE & Prinsip Desain Anti-AI Slop*

---

## 1. PANDUAN DESAIN ANTI-AI SLOP (OFFICIAL GOVERNMENT EDITORIAL)

### A. Palet Warna & Kontras Aksesibilitas (WCAG AA compliant)
Portal layanan publik instansi pemerintah membutuhkan ketegasan, legitimasi hukum, dan keterbacaan tinggi. Dilarang menggunakan *dark mode neon glowing* atau gradasi ungu-fuchsia tanpa konteks.

| Token Warna | Nilai HEX | Peran & Penggunaan | Rasio Kontras vs Putih |
| :--- | :--- | :--- | :--- |
| **Sulsel Deep Navy** | `#0B2545` | Header utama, navbar instansi, teks judul primer | **14.2:1** (AAA) |
| **Institutional Blue** | `#134074` | Elemen penekanan, tombol primer, kartu sorotan | **8.6:1** (AAA) |
| **Provincial Gold Ochre**| `#B48324` | Aksen lambang daerah, bingkai sertifikat, status *warning* | **4.8:1** (AA) |
| **Heritage Forest Green**| `#15803D` | Indikator status "Menerima", badge dokumen valid | **5.3:1** (AA) |
| **Crimson Red** | `#B91C1C` | Indikator status "Penuh", peringatan berkas tidak valid | **5.9:1** (AA) |
| **Slate Surface** | `#F8FAFC` | Latar belakang halaman (warm off-white, tidak silau) | Latar dasar |
| **Slate Border** | `#CBD5E1` | Garis batas tabel, pembatas formulir yang presisi | Garis terukur |
| **Charcoal Ink** | `#0F172A` | Teks isi (*body text*), angka tabel, label formulir | **15.8:1** (AAA) |

### B. Tipografi & Skala Teks
- **Display / Heading Resmi:** `Plus Jakarta Sans` / `Cinzel` (khusus kop sertifikat dinas) dengan *weight* tebal (700/800) untuk menegaskan hierarki institusi.
- **Teks Fungsional & Tabel:** `Inter` (regular 400, medium 500, semibold 600) dengan *letter-spacing* normal dan tinggi baris (*line-height*) 150-160% rata kiri.
- **Micro-copy Realistis:** Mengacu pada nomenklatur birokrasi Indonesia: *"Sub Bagian Umum & Kepegawaian"*, *"Nomor Registrasi"*, *"Surat Balasan Keterangan Magang"*, *"Kepala Dinas (NIP)"*, *"Pembimbing Instansi"*.

---

## 2. SITEMAP & ALUR PENGGUNA (USER JOURNEY)

```
[ PENGUNJUNG UMUM / MAHASISWA ]
               │
               ├── 1. Beranda Portal (Info Alur, Statistik Kuota, Jam Kerja)
               ├── 2. Profil Disnakertrans (Tupoksi, Alamat Jl. Perintis Kemerdekaan KM 12)
               ├── 3. Unit & Kuota Real-time (Sekretariat, Pelatihan, Penempatan, Transmigrasi)
               │          └── Cek Ketersediaan Kuota & Ajukan
               ├── 4. Formulir Pengajuan Magang / Riset (Multi-step + Upload PDF)
               │          └── Mendapatkan Nomor Registrasi (Format: MAG-2026-XXXXX / RIS-2026-XXXXX)
               ├── 5. Tracking Permohonan (Timeline audit log: Diajukan -> Verifikasi -> Disetujui)
               ├── 6. Cek & Verifikasi Dokumen Publik (Scan QR Code / Masukkan No. Sertifikat)
               │
[ PESERTA MAGANG ]
               │
               ├── 7. Dashboard Peserta
               │          ├── Status Masa Magang & Sisa Hari
               │          ├── Logbook Kegiatan Harian
               │          ├── Unduh Surat Balasan Digital (Ber-QR Code)
               │          ├── Evaluasi / Ulasan Layanan
               │          └── Akses Cetak Sertifikat & Transkrip Nilai
               │
[ ADMIN INSTANSI DISNAKERTRANS ]
               │
               └── 8. Panel Admin Layanan
                          ├── Monitor Kuota & Update Kapasitas Unit
                          ├── Verifikasi Berkas Permohonan Masuk (Setujui / Tolak / Minta Revisi)
                          ├── Input Nilai Kinerja (Disiplin, Kerjasama, Inisiatif, Sikap, Tanggung Jawab)
                          └── Penerbitan Sertifikat Resmi Bertandatangan Digital
```

---

## 3. WIREFRAME LAYOUT DETAIL

### A. Beranda & Header Instansi (Desktop & Mobile)
```
+---------------------------------------------------------------------------------------+
| RESMI  Portal Layanan Digital Disnakertrans Sulsel | (0411) 511234 | Jam: 08.00-16.00 |
+---------------------------------------------------------------------------------------+
| [LOGO SULSEL] SIMAGANG & RISET DISNAKERTRANS    [Beranda] [Unit/Kuota] [Tracking]     |
|              Provinsi Sulawesi Selatan          [Verifikasi]  [Masuk / Akun Saya]     |
+---------------------------------------------------------------------------------------+
|                                                                                       |
|   PORTAL RESMI PELAYANAN MAGANG & PENELITIAN MAHASISWA                                |
|   Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Selatan                       |
|                                                                                       |
|   Ajukan kegiatan praktik kerja lapang dan riset akademik secara transparan, pantau  |
|   status berkas secara real-time, dan peroleh sertifikat resmi ber-QR Code valid.    |
|                                                                                       |
|   [ + Ajukan Magang Baru ]    [ + Ajukan Penelitian ]    [ Lacak Permohonan Saya ]    |
|                                                                                       |
+---------------------------------------------------------------------------------------+
| STATISTIK KUOTA AKTIF                                                                |
| [ 4 Unit Kerja ]       [ 156 Peserta Selesai ]   [ 47 Riset Ilmiah ]   [ 203 Sertifikat ] |
+---------------------------------------------------------------------------------------+
```

### B. Tabel Kuota Unit Kerja (Functional Dense Data Table)
```
+---------------------------------------------------------------------------------------+
| UNIT KERJA & KETERSEDIAAN KUOTA MAGANG                                                |
| Pantau ketersediaan kuota sebelum mengajukan surat permohonan. Kuota terbarui otomatis|
|                                                                                       |
| Cari Unit: [ Input kata kunci... ]     Status: [ Semua / Menerima / Penuh ▼ ]         |
+---------------------------------------------------------------------------------------+
| UNIT / BIDANG                     | KUOTA  | TERISI | SISA  | STATUS       | AKSI     |
+-----------------------------------+--------+--------+-------+--------------+----------+
| Sekretariat                       | 10 Org | 7 Org  | 3 Org | [ Menerima ] | [Ajukan] |
| Subbag Umum & Kepegawaian         |        |        |       |              |          |
+-----------------------------------+--------+--------+-------+--------------+----------+
| Bidang Pelatihan & Produktivitas  | 8 Org  | 8 Org  | 0 Org | [ Penuh ]    | [Penuh]  |
| BLK & Pengembangan Keahlian       |        |        |       |              |          |
+-----------------------------------+--------+--------+-------+--------------+----------+
| Bidang Penempatan Tenaga Kerja    | 10 Org | 6 Org  | 4 Org | [ Terbatas ] | [Ajukan] |
| Bursa Kerja & Analis Tenaga Kerja |        |        |       |              |          |
+-----------------------------------+--------+--------+-------+--------------+----------+
| Bidang Transmigrasi               | 5 Org  | 2 Org  | 3 Org | [ Menerima ] | [Ajukan] |
| Pengembangan Wilayah & Kawasan    |        |        |       |              |          |
+---------------------------------------------------------------------------------------+
```

### C. Alur Formulir Pengajuan (Step Form 3 Tahap)
```
+---------------------------------------------------------------------------------------+
| FORMULIR PENGAJUAN RESMI MAGANG MAHASISWA                                             |
| Langkah: (1) Data Mahasiswa & Kampus  ──  (2) Detail Kegiatan  ──  (3) Unggah Berkas  |
+---------------------------------------------------------------------------------------+
| [1] IDENTITAS PEMOHON                                                                 |
| Nama Lengkap      : [ Nurhayani                                      ]                |
| NIM / Identitas   : [ 123456789             ] Nomor HP/WA: [ 081244556677 ]          |
| Perguruan Tinggi  : [ Universitas Negeri Makassar                    ]                |
| Fakultas / Jurusan: [ Teknik / Pend. Teknik Informatika              ]                |
|                                                                                       |
| [2] PENEMPATAN & JADWAL                                                               |
| Pilihan Unit Kerja: [ Bidang Penempatan Tenaga Kerja                 ▼ ]               |
| Tanggal Pelaksanaan: Dari [ 01/09/2026 ] s/d [ 30/11/2026 ] (3 Bulan)                  |
| Jenis Pengajuan   : (•) Individu   ( ) Kelompok                                       |
| Dosen Pembimbing  : [ Dr. Ir. Ahmad, M.T.                            ]                |
|                                                                                       |
| [3] UNGGAH DOKUMEN PERSYARATAN (Format PDF, Maks 5 MB)                                |
| [ PDF ] Surat Pengantar Kampus  -> [ Pilih Berkas: surat_pengantar.pdf ] [ Terunggah ]|
| [ PDF ] Proposal Kegiatan Magang-> [ Pilih Berkas: proposal_magang.pdf ] [ Terunggah ]|
|                                                                                       |
| [X] Saya menyatakan data yang diisikan adalah benar dan dapat dipertanggungjawabkan.  |
|                                                                                       |
|                                 [ Batal ]   [ Kirim Permohonan Resmi -> ]             |
+---------------------------------------------------------------------------------------+
```

### D. Tracking Permohonan (Timeline Audit Log)
```
+---------------------------------------------------------------------------------------+
| LACAK STATUS PERMOHONAN                                                               |
| Masukkan Nomor Registrasi: [ MAG-2026-00125                  ] [ Lacak Sekarang ]     |
+---------------------------------------------------------------------------------------+
| HASIL PENELUSURAN: MAG-2026-00125                                                     |
| Pemohon: Nurhayani | Kampus: Univ. Negeri Makassar | Unit: Bidang Penempatan          |
| Status Saat Ini: [ PERMOHONAN DISETUJUI & SURAT TERBIT ]                              |
|                                                                                       |
| [●] 01 Sep 2026, 08:30 WITA ── Berkas berhasil masuk sistem oleh Pemohon              |
| [●] 01 Sep 2026, 11:15 WITA ── Verifikasi administrasi oleh Staf TU (Lengkap)         |
| [●] 02 Sep 2026, 09:00 WITA ── Disetujui Kepala Bidang Penempatan Tenaga Kerja        |
| [●] 03 Sep 2026, 14:00 WITA ── Surat Balasan Diterbitkan: No. 560/124/DISNAKERTRANS/IX|
|                                                                                       |
| Dokumen Tersedia: [ Unduh Surat Balasan Resmi (PDF + QR) ]                            |
+---------------------------------------------------------------------------------------+
```

### E. Sertifikat Digital & Transkrip Penilaian (Sesuai Lampiran Asli)
```
+---------------------------------------------------------------------------------------+
| HALAMAN 1 (MUKA): SERTIFIKAT MAGANG RESMI                                             |
|                                                                                       |
|             PEMERINTAH PROVINSI SULAWESI SELATAN                                      |
|             DINAS TENAGA KERJA DAN TRANSMIGRASI                                       |
|                                                                                       |
|                             SERTIFIKAT                                                |
|                     Nomor : 560/CERT-MAG/IX/2026                                      |
|                                                                                       |
|                           Diberikan Kepada:                                           |
|                              NURHAYANI                                                |
|                      UNIVERSITAS NEGERI MAKASSAR                                      |
|                                                                                       |
|  Telah melaksanakan Magang pada DINAS TENAGA KERJA DAN TRANSMIGRASI                   |
|  Provinsi Sulawesi Selatan pada 01 September 2026 sampai dengan                       |
|  30 November 2026 dengan hasil: SANGAT BAIK                                           |
|                                                                                       |
|  [ QR VALIDASI ]                          Makassar, 30 November 2026                  |
|  Dinas Tenaga Kerja                       KEPALA DINAS,                               |
|  Sulawesi Selatan                                                                     |
|                                           Dr. Jayadi Nas, S.Sos, M.Si                 |
|                                           Pangkat: Pembina Utama Muda                 |
|                                           NIP. 19710501 199803 1 004                  |
+---------------------------------------------------------------------------------------+
| HALAMAN 2 (BELAKANG): TRANSKRIP KRITERIA PENILAIAN                                    |
|                                                                                       |
| +----+-----------------------------------+-------+----------------------------------+ |
| | NO | KRITERIA PENILAIAN                | NILAI | KETERANGAN                       | |
| +----+-----------------------------------+-------+----------------------------------+ |
| | 1  | DISIPLIN                          |  96   | 90 - 100 = Sangat Baik           | |
| | 2  | KERJASAMA                         |  98   | 75 - 89  = Baik                  | |
| | 3  | INISIATIF                         |  95   | 60 - 74  = Cukup                 | |
| | 4  | SIKAP                             |  95   | ≤ 59     = Kurang                | |
| | 5  | TANGGUNG JAWAB                    |  98   |                                  | |
| +----+-----------------------------------+-------+----------------------------------+ |
| | RATA-RATA: 96.4 (SANGAT BAIK)                                                     | |
| +-----------------------------------------------------------------------------------+ |
|                                                                                       |
|                                           Makassar, 30 November 2026                  |
|                                           PEMBIMBING INSTANSI                         |
|                                           Kepala Sub Bagian Umum Disnakertrans Sulsel |
|                                                                                       |
|                                           SURIAMMA, SH, M.Si                          |
|                                           Pangkat: Pembina (IV/a)                     |
|                                           NIP. 19780712 200212 2 011                  |
+---------------------------------------------------------------------------------------+
```
