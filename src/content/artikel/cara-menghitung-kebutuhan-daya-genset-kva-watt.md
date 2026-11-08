---
title: 'Cara Menghitung Kebutuhan Daya Genset (kVA vs kW): Rumus Beban, Power Factor & Lonjakan Starting'
seoTitle: 'Cara Menghitung Kebutuhan Daya Genset kVA vs kW - Panduan'
description: 'Panduan teknis menghitung kapasitas genset yang tepat. Rumus konversi kVA ke kW, power factor 0.8, lonjakan arus starting motor, dan safe load factor 80%.'
publishDate: '5 November 2026'
author: 'Tim Rekayasa Gensetora'
category: 'Panduan Teknis'
tags: ['hitung daya genset', 'rumus kva ke kw', 'power factor genset', 'starting surge motor', 'kapasitas genset']
heroImage: '/images/machine-ats.webp'
featured: false
---

# Cara Menghitung Kebutuhan Daya Genset (kVA vs kW): Rumus Beban, Power Factor & Lonjakan Starting

Menentukan kapasitas genset untuk rumah sakit, pabrik, ruko, atau event sering menimbulkan kebingungan antara satuan kVA (daya semu) dan kW (daya aktif). Salah memilih kapasitas berakibat fatal: genset mati mendadak (*tripping*) saat beban puncak atau pemborosan biaya investasi unit yang terlalu besar.

---

## 1. Konversi Dasar kVA ke kW & Faktor Daya Listrik

Genset diukur dalam satuan kVA (*kilo Volt Ampere*), sedangkan peralatan beban listrik diukur dalam Watt atau kW. Hubungan keduanya ditentukan oleh faktor daya (*power factor* $\cos \phi$), di mana standar industri genset adalah **0.8**: $\text{kW} = \text{kVA} \times 0.8$. Artinya, genset 100 kVA memiliki daya aktif maksimum sebesar 80 kW.

---

> ### Catatan Mandor & Poin Kritis Lapangan
> 1. **Patuhi Batas Beban Aman (Safe Load Factor 80%):** Jangan pernah mengoperasikan genset secara terus-menerus pada kapasitas 100% (prime power). Pertahankan beban kerja konstan pada **70% hingga 80% dari kapasitas kVA** agar mesin tidak cepat panas dan konsumsi solar tetap hemat.
>
> 2. **Perhitungkan Lonjakan Starting Arus Motor (Inrush Current):** Peralatan dengan motor induksi seperti kompresor AC, pompa air, chiller, dan lift membutuhkan daya awal (*starting current*) **2 hingga 3 kali lipat** dari daya running nominalnya.

---

## 2. Tabel Konversi Kapasitas Genset & Batas Beban Aman Operasional

| Kapasitas Genset (kVA) | Daya Aktif Max (kW) | Beban Kerja Aman 80% (kW) | Arus Nominal per Phase (Ampere / 380V) | Rekomendasi Pemakaian |
| --- | --- | --- | --- | --- |
| 20 kVA | 16 kW | 12.8 kW | 30.4 A | Rumah tinggal besar, kafe, klinik pratama |
| 40 kVA | 32 kW | 25.6 kW | 60.8 A | Ruko 3-4 lantai, minimarket, resto chiller |
| 60 kVA | 48 kW | 38.4 kW | 91.2 A | Gedung kantor kecil, gudang logistik |
| 100 kVA | 80 kW | 64.0 kW | 152.0 A | Hotel butik, rumah sakit bedah, SPBU besar |
| 250 kVA | 200 kW | 160.0 kW | 380.0 A | Pabrik manufaktur ringan, mall komersial |
| 500 kVA | 400 kW | 320.0 kW | 760.0 A | Pabrik industri berat, data center, cold storage |

---

## 3. Langkah Praktis Menghitung Kebutuhan Genset

1. **Inventarisasi Daya Seluruh Beban (Watt):** Catat daya nameplate setiap peralatan yang harus tetap menyala saat listrik PLN padam.
2. **Kelompokkan Beban Resistif & Induktif:** Pisahkan lampu/elektronik (faktor 1.0) dengan motor listrik/AC/pompa (faktor 2.0x).
3. **Jumlahkan Daya Puncak Bersamaan:** Hitung total daya aktif kumulatif dalam satuan kilowatt (kW).
4. **Bagi dengan Power Factor 0.8 & Load Factor 0.8:** Rumus: kVA Genset = Total kW / 0.8 / 0.8 untuk mendapatkan kapasitas aman.

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

### Mengapa genset 50 kVA tidak boleh dibebani 50 kW?
Karena faktor daya genset adalah 0.8, kapasitas aktif maksimal genset 50 kVA adalah 40 kW (50 x 0.8). Beban 50 kW akan menyebabkan overload dan breaker trip.

### Berapa persen beban minimum yang disarankan agar genset tidak rusak?
Genset diesel tidak boleh dijalankan dengan beban di bawah 30% dalam waktu lama untuk menghindari fenomena wet stacking (solar tidak terbakar sempurna di knalpot).
