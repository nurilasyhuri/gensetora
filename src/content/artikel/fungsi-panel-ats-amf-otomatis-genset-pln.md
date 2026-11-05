---
title: 'Fungsi Panel ATS-AMF Otomatis: Solusi Perpindahan Listrik PLN ke Genset dalam 5 Detik'
seoTitle: 'Fungsi Panel ATS-AMF Otomatis Genset PLN - Panduan Lengkap'
description: 'Pelajari cara kerja panel ATS-AMF otomatis: modul Deep Sea DSE, kontaktor interlock mekanik, genset auto-start saat PLN padam, dan auto-cooling-down.'
publishDate: '5 November 2026'
author: 'Tim Rekayasa Gensetora'
category: 'Otomasi & Elektrikal'
tags: ['panel ats amf', 'automatic transfer switch', 'modul dse 7320', 'genset otomatis nyala', 'interlock kontaktor']
heroImage: '/images/machine-ats.webp'
featured: false
---

# Fungsi Panel ATS-AMF Otomatis: Solusi Perpindahan Listrik PLN ke Genset dalam 5 Detik

Ketika listrik PLN padam di tengah malam, mengoperasikan genset secara manual menggunakan tuas handle COS (Change Over Switch) sangat merepotkan dan memakan waktu berharga. Pada fasilitas vital seperti ruang server IT, rumah sakit, tambak udang, dan pabrik kimia, keterlambatan menyalakan listrik selama 5 menit saja dapat menimbulkan kerugian fatal.

---

## 1. Prinsip Kerja Panel ATS (Auto Transfer Switch) & AMF (Auto Main Failure)

Panel AMF berfungsi sebagai otak sensorik yang memonitor tegangan suplai PLN 24 jam nonstop. Begitu terjadi pemadaman (*blackout*) atau tegangan anjlok (*under-voltage*), modul AMF (seperti Deep Sea DSE-7320 atau ComAp) mengirim sinyal starter untuk menyalakan mesin genset. Setelah genset running stabil pada 220/380V 50Hz (sekitar 5–8 detik), kontaktor ATS berpindah menghubungkan daya genset ke beban gedung.

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Wajib Pasang Interlock Mekanik & Elektrikal:** Kontaktor PLN dan Kontaktor Genset wajib memiliki sistem pengunci ganda (*mechanical & electrical interlock*) agar kedua sumber daya tidak pernah terhubung bersamaan yang dapat memicu ledakan hubung singkat (*short circuit*).
>
> 2. **Penyetelan Waktu Cooling Down:** Saat listrik PLN kembali normal, jangan langsung matikan genset seketika. Beri jeda *cooling down* tanpa beban selama 3–5 menit agar sirkulasi oli dan air radiator mendinginkan blok mesin secara perlahan.

---

## 2. Tabel Siklus Kerja Otomatis Panel ATS-AMF

| Kondisi Jaringan Listrik | Respon Modul AMF | Aksi Mekanikal Panel ATS | Waktu Respon Rata-Rata |
| --- | --- | --- | --- |
| PLN Mengalami Blackout / Padam | Sensor mendeteksi loss-voltage | Cranking starter mesin genset aktif | 1 – 3 Detik |
| Mesin Genset Menyala Stabil | Frekuensi & voltase genset terverifikasi | Kontaktor ATS memindahkan beban ke genset | 5 – 8 Detik |
| Listrik PLN Normal Kembali | Memantau stabilitas tegangan PLN | Beban dipindahkan kembali ke suplai PLN | 10 – 30 Detik |
| Pendinginan Mesin (Cooling Down) | Genset berjalan tanpa beban (idle) | Mematikan sistem bahan bakar & aki solenoid | 180 – 300 Detik |

---

## 3. Komponen Utama Panel ATS-AMF Standar Industri

1. **Modul Kontrol Digital (DSE / Smartgen):** Layar LCD memantau voltase, ampere, frekuensi, tekanan oli, dan suhu air.
2. **Pasangan Kontaktor Bermutu Tinggi:** Kontaktor ABB, Schneider, atau Chint dengan mechanical interlocking.
3. **Automatic Battery Charger:** Pengisi daya aki pintar trickle charge agar aki starter selalu penuh 100%.
4. **Emergency Stop Push Button:** Tombol pemutus darurat fisik di pintu luar kabinet panel.

---

## Tabel Jangkauan Operasional & Armada Sewa Genset Se-Indonesia

GENSETORA melayani penjualan, rental, servis, dan kontrak maintenance genset ke seluruh koridor Indonesia:

| Wilayah / Koridor | Cakupan Kawasan Proyek | Kesiapan Unit di Lapangan | Moda Mobilisasi Alat | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Surabaya, Jabodetabek, Bandung, Semarang, Malang Raya | Silent 10–500 kVA, Open 500–2.000 kVA | Truk Crane & Fuso Dedicated | 1 – 2 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Sumatera** | Medan, Pekanbaru, Palembang, Lampung | Unit Silent Trailer & Open Heavy | Truk Ekspedisi Lintas Sumatera | 3 – 5 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Kalimantan** | Balikpapan, Samarinda, Banjarmasin | Unit Silent Tambang & Pabrik | Kargo Kontainer Laut Surabaya | 5 – 8 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Sulawesi** | Makassar, Manado, Kendari, Palu | Unit Silent & Open Power Plant | Kapal Kontainer Cepat Pelni | 6 – 9 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Bali & Nusra** | Denpasar, Badung, Gianyar, Mataram Lombok | Unit Ultra-Silent Soundproof | Truk Penyeberangan Ferry | 2 – 4 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Maluku & Papua** | Jayapura, Timika, Sorong, Ambon | Modul Genset Tambang & Remote Site | Tol Laut Logistik Nasional | 8 – 14 Hari Kerja | Siap Kirim & Eksekusi |

---

## Tanya Jawab Teknis (FAQ)

### Apakah panel ATS-AMF bisa dipasang pada genset lama yang sudah ada?
Bisa, asalkan mesin genset Anda sudah memiliki sistem starter elektrik 12V atau 24V dan dinamo pengisian aki yang sehat.

### Berapa lama waktu jeda perpindahan listrik dengan panel ATS?
Rata-rata 5 sampai 10 detik sejak PLN padam hingga genset siap memikul beban penuh.

---

## Solusi Rekayasa Pembangkit Daya Bersama GENSETORA

Konsultasikan kapasitas kVA, kebutuhan panel ATS-AMF, dan pengadaan genset fasilitas Anda bersama tim ahli Gensetora:

- **Hitung Perkiraan Daya & Kapasitas**: [Kalkulator Daya Genset](/kalkulator-genset)
- **Lihat Katalog Unit**: [Katalog Lengkap Gensetora](/genset)
- **Konsultasi WhatsApp**: [Hubungi Tim Estimator Ahli (0851-8300-5070)](https://wa.me/6285183005070?text=Halo%20Gensetora%2C%20saya%20ingin%20konsultasi%20kebutuhan%20genset%20untuk%20Fungsi%20Panel%20ATS-AMF%20Otomatis%3A%20Solusi%20Perpindahan%20Listrik%20PLN%20ke%20Genset%20dalam%205%20Detik)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
  {
    "@type": "Question",
    "name": "Apakah panel ATS-AMF bisa dipasang pada genset lama yang sudah ada?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Bisa, asalkan mesin genset Anda sudah memiliki sistem starter elektrik 12V atau 24V dan dinamo pengisian aki yang sehat."
    }
  },
  {
    "@type": "Question",
    "name": "Berapa lama waktu jeda perpindahan listrik dengan panel ATS?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Rata-rata 5 sampai 10 detik sejak PLN padam hingga genset siap memikul beban penuh."
    }
  }
]
}
```
