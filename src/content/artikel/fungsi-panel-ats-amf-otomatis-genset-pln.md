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

| Wilayah | Cakupan Kawasan | Kesiapan Unit |
|---|---|---|
| **Jawa** | Surabaya, Jabodetabek, Bandung, Semarang | Silent 10–500 kVA |
| **Sumatera** | Medan, Pekanbaru, Palembang, Lampung | Silent Trailer & Open Heavy |
| **Kalimantan** | Balikpapan, Samarinda, Banjarmasin | Silent Tambang & Pabrik |
| **Sulawesi** | Makassar, Manado, Kendari, Palu | Open Type & Silent Plant |
| **Bali & Nusra** | Denpasar, Badung, Mataram Lombok | Ultra-Silent Soundproof |
| **Maluku & Papua** | Jayapura, Timika, Sorong, Ambon | Heavy Duty Mining Spec |

---

## Tanya Jawab Teknis (FAQ)

### Apakah panel ATS-AMF bisa dipasang pada genset lama yang sudah ada?
Bisa, asalkan mesin genset Anda sudah memiliki sistem starter elektrik 12V atau 24V dan dinamo pengisian aki yang sehat.

### Berapa lama waktu jeda perpindahan listrik dengan panel ATS?
Rata-rata 5 sampai 10 detik sejak PLN padam hingga genset siap memikul beban penuh.

---
