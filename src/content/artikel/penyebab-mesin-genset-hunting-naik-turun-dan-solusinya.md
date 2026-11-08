---
title: 'Penyebab Frekuensi Genset Hunting (Putaran Mesin Naik-Turun) dan Solusi Kalibrasi Governor'
seoTitle: 'Penyebab Genset Hunting Naik Turun & Solusi Kalibrasi - Panduan'
description: 'Mengatasi masalah mesin genset hunting: RPM putaran mesin tidak stabil, tegangan voltase naik turun, aktuator governor macet, dan filter solar kotor.'
publishDate: '5 November 2026'
author: 'Tim Rekayasa Gensetora'
category: 'Perawatan & Servis'
tags: ['genset hunting', 'rpm mesin naik turun', 'kalibrasi governor', 'voltase genset drop', 'servis genset']
heroImage: '/images/machine-opentype.webp'
featured: false
---

# Penyebab Frekuensi Genset Hunting (Putaran Mesin Naik-Turun) dan Solusi Kalibrasi Governor

Pernahkah Anda mendengar mesin genset mengeluarkan suara raungan putaran RPM yang berayun naik-turun secara berirama? Kondisi ini di dunia mekanikal dikenal sebagai fenomena **Hunting**. Fenomena hunting menyebabkan frekuensi listrik berfluktuasi liar (misal 45 Hz melonjak ke 55 Hz), yang berisiko membakar komponen sensitif seperti server IT, AC inverter, dan PLC pabrik.

---

## 1. Penyebab Utama Hunting pada Mesin Diesel Generator

Hunting terjadi saat sistem pengatur kecepatan (*speed governor*) gagal mempertahankan putaran mesin konstan pada 1.500 RPM (untuk frekuensi 50 Hz). Penyebab umumnya adalah suplai bahan bakar yang terhambat oleh udara palsu di saluran solar (*masuk angin*), filter solar tersumbat kotoran, atau setelan gain-stability pada modul Electronic Speed Controller (ESC) yang terlalu agresif.

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Lakukan Bleeding Udara Palsu pada Jalur Bahan Bakar:** Sebelum menyetel governor elektronik, pastikan saluran solar bebas dari gelembung udara dengan memompa priming pump manual dan membuka baut buangan udara (*bleeder screw*).
>
> 2. **Periksa Kondisi Magnetic Pickup Unit (MPU):** Sensor MPU yang kotor tertempel serbuk besi roda gila (*flywheel*) dapat mengirimkan sinyal pulsa RPM yang kacau ke modul governor.

---

## 2. Tabel Diagnosa Masalah Genset Hunting & Cara Mengatasinya

| Gejala Masalah | Kemungkinan Penyebab | Metode Pengecekan | Solusi Tindakan Perbaikan |
| --- | --- | --- | --- |
| Hunting saat beban nol (No-load) | Setelan GAIN governor terlalu tinggi | Putar potensiometer GAIN ke kiri | Kalibrasi ulang modul kontroler governor |
| Hunting hanya saat dibebani | Filter solar tersumbat lumpur/lilin | Cek tekanan fuel supply pump | Ganti filter solar primer dan sekunder |
| Hunting disertai asap putih tipis | Ada kebocoran udara di selang solar | Cek gelembung udara di selang transparan | Kencangkan klem sambungan & bleeding udara |
| Hunting mendadak lalu mesin mati | Sensor MPU flywheel rusak / berjarak longgar | Ukur resistansi sensor MPU (±1.000 Ohm) | Bersihkan ujung sensor & setel jarak celah 0.5mm |

---

## 3. Tahapan Kalibrasi Electronic Governor

1. **Bersihkan Sensor MPU Flywheel:** Lepas sensor kecepatan MPU, bersihkan serpihan logam magnetis, pasang kembali dengan celah 3/4 putaran.
2. **Setel Potensiometer Speed, Gain & Stability:** Posisikan trimpot GAIN dan STABILITY pada arah jam 12 sebagai baseline.
3. **Nyalakan Mesin dan Pantau Hz:** Atur sekrup SPEED hingga frekuensi menunjukkan 50.0 Hz stabil pada alat ukur.
4. **Uji Kejut Beban (Step Load Test):** Beri beban 50% mendadak untuk memastikan RPM segera kembali stabil dalam < 1.5 detik.

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

### Apakah frekuensi listrik yang naik turun bisa merusak peralatan kantor?
Sangat berbahaya. Fluktuasi frekuensi di luar toleransi ±2% (49-51 Hz) dapat merusak motor kompresor AC, power supply komputer, dan motor elevator.

### Kapan saatnya memanggil teknisi servis overhaul genset?
Jika hunting tetap terjadi setelah ganti filter solar dan bleeding udara, kemungkinan besar injection pump atau plunger bosch pump memerlukan kalibrasi di test bench bengkel kami.

---
