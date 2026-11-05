import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const artikelDir = path.join(projectRoot, 'src', 'content', 'artikel');

function getIndonesianDate(date = new Date()) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const day = wibDate.getDate();
  const month = months[wibDate.getMonth()];
  const year = wibDate.getFullYear();
  return `${day} ${month} ${year}`;
}

const NATIONWIDE_TABLE = `## Tabel Jangkauan Operasional & Armada Sewa Genset Se-Indonesia

GENSETORA melayani penjualan, rental, servis, dan kontrak maintenance genset ke seluruh koridor Indonesia:

| Wilayah / Koridor | Cakupan Kawasan Proyek | Kesiapan Unit di Lapangan | Moda Mobilisasi Alat | Estimasi Lead Time | Status Layanan |
|---|---|---|---|---|:---:|
| **Koridor Jawa** | Surabaya, Jabodetabek, Bandung, Semarang, Malang Raya | Silent 10–500 kVA, Open 500–2.000 kVA | Truk Crane & Fuso Dedicated | 1 – 2 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Sumatera** | Medan, Pekanbaru, Palembang, Lampung | Unit Silent Trailer & Open Heavy | Truk Ekspedisi Lintas Sumatera | 3 – 5 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Kalimantan** | Balikpapan, Samarinda, Banjarmasin | Unit Silent Tambang & Pabrik | Kargo Kontainer Laut Surabaya | 5 – 8 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Sulawesi** | Makassar, Manado, Kendari, Palu | Unit Silent & Open Power Plant | Kapal Kontainer Cepat Pelni | 6 – 9 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Bali & Nusra** | Denpasar, Badung, Gianyar, Mataram Lombok | Unit Ultra-Silent Soundproof | Truk Penyeberangan Ferry | 2 – 4 Hari Kerja | Siap Kirim & Eksekusi |
| **Koridor Maluku & Papua** | Jayapura, Timika, Sorong, Ambon | Modul Genset Tambang & Remote Site | Tol Laut Logistik Nasional | 8 – 14 Hari Kerja | Siap Kirim & Eksekusi |`;

function renderArticle(art, publishDate) {
  const tableHeaderStr = `| ${art.tableHeaders.join(' | ')} |\n| ${art.tableHeaders.map(() => '---').join(' | ')} |`;
  const tableRowsStr = art.tableRows.map(row => `| ${row.join(' | ')} |`).join('\n');
  const mandorNotesStr = art.mandorNotes.map((note, idx) => `> ${idx + 1}. ${note}`).join('\n>\n');
  const stepsStr = art.steps.map((st, idx) => `${idx + 1}. **${st.title}:** ${st.desc}`).join('\n');
  const faqsMarkdown = art.faqs.map(f => `### ${f.q}\n${f.a}`).join('\n\n');
  const schemaFaqs = art.faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.a.replace(/\n/g, ' ').replace(/"/g, '\\"')
    }
  }));

  return `---
title: '${art.title.replace(/'/g, "''")}'
seoTitle: '${art.seoTitle.replace(/'/g, "''")}'
description: '${art.description.replace(/'/g, "''")}'
publishDate: '${publishDate}'
author: 'Tim Rekayasa Gensetora'
category: '${art.category}'
tags: [${art.tags.map(t => `'${t}'`).join(', ')}]
heroImage: '${art.heroImage}'
featured: false
---

# ${art.title}

${art.intro}

---

## 1. ${art.section1Title}

${art.section1Content}

---

> ### Catatan Mandor & Poin Kritis Lapangan
${mandorNotesStr}

---

## 2. ${art.tableTitle}

${tableHeaderStr}
${tableRowsStr}

---

## 3. ${art.section3Title}

${stepsStr}

---

${NATIONWIDE_TABLE}

---

## Tanya Jawab Teknis (FAQ)

${faqsMarkdown}

---

## Solusi Rekayasa Pembangkit Daya Bersama GENSETORA

${art.ctaText || 'Konsultasikan kapasitas kVA, kebutuhan panel ATS-AMF, dan pengadaan genset fasilitas Anda bersama tim ahli Gensetora:'}

- **Hitung Perkiraan Daya & Kapasitas**: [Kalkulator Daya Genset](/kalkulator-genset)
- **Lihat Katalog Unit**: [Katalog Lengkap Gensetora](/genset)
- **Konsultasi WhatsApp**: [Hubungi Tim Estimator Ahli (0851-8300-5070)](https://wa.me/6285183005070?text=${encodeURIComponent(`Halo Gensetora, saya ingin konsultasi kebutuhan genset untuk ${art.title}`)})

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": ${JSON.stringify(schemaFaqs, null, 2)}
}
\`\`\`
`;
}

// 7 Cornerstone Articles (Batch 1: Tonight)
const CORNERSTONE_ARTICLES = [
  {
    slug: 'cara-menghitung-kebutuhan-daya-genset-kva-watt',
    title: 'Cara Menghitung Kebutuhan Daya Genset (kVA vs kW): Rumus Beban, Power Factor & Lonjakan Starting',
    seoTitle: 'Cara Menghitung Kebutuhan Daya Genset kVA vs kW - Panduan',
    description: 'Panduan teknis menghitung kapasitas genset yang tepat. Rumus konversi kVA ke kW, power factor 0.8, lonjakan arus starting motor, dan safe load factor 80%.',
    category: 'Panduan Teknis',
    tags: ['hitung daya genset', 'rumus kva ke kw', 'power factor genset', 'starting surge motor', 'kapasitas genset'],
    heroImage: '/images/machine-ats.webp',
    intro: 'Menentukan kapasitas genset untuk rumah sakit, pabrik, ruko, atau event sering menimbulkan kebingungan antara satuan kVA (daya semu) dan kW (daya aktif). Salah memilih kapasitas berakibat fatal: genset mati mendadak (*tripping*) saat beban puncak atau pemborosan biaya investasi unit yang terlalu besar.',
    section1Title: 'Konversi Dasar kVA ke kW & Faktor Daya Listrik',
    section1Content: 'Genset diukur dalam satuan kVA (*kilo Volt Ampere*), sedangkan peralatan beban listrik diukur dalam Watt atau kW. Hubungan keduanya ditentukan oleh faktor daya (*power factor* $\\cos \\phi$), di mana standar industri genset adalah **0.8**: $\\text{kW} = \\text{kVA} \\times 0.8$. Artinya, genset 100 kVA memiliki daya aktif maksimum sebesar 80 kW.',
    mandorNotes: [
      '**Patuhi Batas Beban Aman (Safe Load Factor 80%):** Jangan pernah mengoperasikan genset secara terus-menerus pada kapasitas 100% (prime power). Pertahankan beban kerja konstan pada **70% hingga 80% dari kapasitas kVA** agar mesin tidak cepat panas dan konsumsi solar tetap hemat.',
      '**Perhitungkan Lonjakan Starting Arus Motor (Inrush Current):** Peralatan dengan motor induksi seperti kompresor AC, pompa air, chiller, dan lift membutuhkan daya awal (*starting current*) **2 hingga 3 kali lipat** dari daya running nominalnya.'
    ],
    tableTitle: 'Tabel Konversi Kapasitas Genset & Batas Beban Aman Operasional',
    tableHeaders: ['Kapasitas Genset (kVA)', 'Daya Aktif Max (kW)', 'Beban Kerja Aman 80% (kW)', 'Arus Nominal per Phase (Ampere / 380V)', 'Rekomendasi Pemakaian'],
    tableRows: [
      ['20 kVA', '16 kW', '12.8 kW', '30.4 A', 'Rumah tinggal besar, kafe, klinik pratama'],
      ['40 kVA', '32 kW', '25.6 kW', '60.8 A', 'Ruko 3-4 lantai, minimarket, resto chiller'],
      ['60 kVA', '48 kW', '38.4 kW', '91.2 A', 'Gedung kantor kecil, gudang logistik'],
      ['100 kVA', '80 kW', '64.0 kW', '152.0 A', 'Hotel butik, rumah sakit bedah, SPBU besar'],
      ['250 kVA', '200 kW', '160.0 kW', '380.0 A', 'Pabrik manufaktur ringan, mall komersial'],
      ['500 kVA', '400 kW', '320.0 kW', '760.0 A', 'Pabrik industri berat, data center, cold storage']
    ],
    section3Title: 'Langkah Praktis Menghitung Kebutuhan Genset',
    steps: [
      { title: 'Inventarisasi Daya Seluruh Beban (Watt)', desc: 'Catat daya nameplate setiap peralatan yang harus tetap menyala saat listrik PLN padam.' },
      { title: 'Kelompokkan Beban Resistif & Induktif', desc: 'Pisahkan lampu/elektronik (faktor 1.0) dengan motor listrik/AC/pompa (faktor 2.0x).' },
      { title: 'Jumlahkan Daya Puncak Bersamaan', desc: 'Hitung total daya aktif kumulatif dalam satuan kilowatt (kW).' },
      { title: 'Bagi dengan Power Factor 0.8 & Load Factor 0.8', desc: 'Rumus: kVA Genset = Total kW / 0.8 / 0.8 untuk mendapatkan kapasitas aman.' }
    ],
    faqs: [
      { q: 'Mengapa genset 50 kVA tidak boleh dibebani 50 kW?', a: 'Karena faktor daya genset adalah 0.8, kapasitas aktif maksimal genset 50 kVA adalah 40 kW (50 x 0.8). Beban 50 kW akan menyebabkan overload dan breaker trip.' },
      { q: 'Berapa persen beban minimum yang disarankan agar genset tidak rusak?', a: 'Genset diesel tidak boleh dijalankan dengan beban di bawah 30% dalam waktu lama untuk menghindari fenomena wet stacking (solar tidak terbakar sempurna di knalpot).' }
    ]
  },
  {
    slug: 'perbedaan-genset-silent-vs-open-type',
    title: 'Perbedaan Genset Silent vs Open Type: Mana yang Tepat untuk Kebutuhan Fasilitas Anda?',
    seoTitle: 'Genset Silent vs Open Type - Perbandingan Lengkap',
    description: 'Ketahui perbandingan teknis genset silent canopy kedap suara vs genset open type rangka terbuka. Analisis tingkat kebisingan, sirkulasi panas, dan peruntukan lokasi.',
    category: 'Komparasi Unit',
    tags: ['genset silent vs open', 'genset kedap suara', 'genset open type', 'canopy soundproof', 'tingkat desibel genset'],
    heroImage: '/images/machine-silent.webp',
    intro: 'Dalam memilih genset untuk operasional usaha, dua model desain fisik yang paling sering dijumpai adalah **Genset Silent Type (Canopy Soundproof)** dan **Genset Open Type (Rangka Terbuka Skid Base)**. Keduanya menggunakan mesin diesel dan alternator yang identik, namun memiliki perbedaan signifikan pada konstruksi akustik, sistem pendingin radiator, dan regulasi penempatan.',
    section1Title: 'Konstruksi Akustik Soundproof vs Skid Base Terbuka',
    section1Content: 'Genset silent dilapisi box pelindung baja canai dingin dengan busa akustik peredam suara (*sound attenuator foam*) yang mereduksi kebisingan hingga di bawah 68 desibel (dB) pada jarak 7 meter. Sebaliknya, genset open type memiliki mesin terbuka di atas sasis baja tanpa peredam suara bawaan, menghasilkan kebisingan di atas 85-95 dB.',
    mandorNotes: [
      '**Regulasi Lingkungan dan Izin Gangguan (HO):** Di kawasan padat seperti perkantoran, hotel, klinik, dan pemukiman, genset silent adalah kewajiban mutlak agar tidak melanggar baku tingkat kebisingan Kepmen LH No. 48/1996.',
      '**Sirkulasi Udara Ruang Genset Open Type:** Genset open type wajib ditempatkan di dalam ruang genset (*power house*) khusus yang dilengkapi louvers masuk, ducting radiator pembuangan hawa panas ke luar, dan knalpot attenuator.'
    ],
    tableTitle: 'Tabel Perbandingan Lengkap: Genset Silent vs Open Type',
    tableHeaders: ['Parameter Teknis', 'Genset Silent Type (Canopy)', 'Genset Open Type (Rangka Terbuka)', 'Kelebihan Pemenang'],
    tableRows: [
      ['Tingkat Kebisingan', 'Rendah (65 – 70 dB)', 'Tinggi (85 – 100 dB)', 'Silent Type'],
      ['Penempatan Fisik', 'Bisa outdoor tahan hujan/panas', 'Wajib indoor di ruang power house', 'Silent Type'],
      ['Kemudahan Servis Rutin', 'Melalui pintu canopy samping', 'Sangat leluasa diakses 360°', 'Open Type'],
      ['Sirkulasi Pendinginan Mesin', 'Mengandalkan acoustic air duct', 'Pendinginan udara alami sangat maksimal', 'Open Type'],
      ['Biaya Pengadaan Awal', 'Sedikit lebih tinggi (ada box canopy)', 'Lebih ekonomis 15–25%', 'Open Type (Hemat Biaya)'],
      ['Peruntukan Terbaik', 'Hotel, RS, Kantor, Ruko, Residensial', 'Pabrik industri, tambang, power plant gedung', 'Sesuai Kebutuhan']
    ],
    section3Title: 'Panduan Memilih Antara Silent dan Open Type',
    steps: [
      { title: 'Tinjau Ketersediaan Ruang Khusus', desc: 'Jika memiliki ruang bawah tanah/gedung tertutup, pilih open type untuk menghemat biaya.' },
      { title: 'Tinjau Jarak ke Pemukiman / Tamu', desc: 'Jika diletakkan di halaman parkir atau dekat ruang kerja, wajib gunakan silent type.' },
      { title: 'Pertimbangkan Mobilitas Proyek', desc: 'Untuk proyek berpindah-pindah, silent type jauh lebih aman dari hujan dan cuaca.' }
    ],
    faqs: [
      { q: 'Apakah genset silent aman terkena hujan deras di luar ruangan?', a: 'Sangat aman. Box canopy genset silent didesain weatherproof tahan air hujan dengan saluran drainase talang air terintegrasi.' },
      { q: 'Bisakah genset open type dimodifikasi menjadi silent type di kemudian hari?', a: 'Bisa, dengan membuat soundproofing akustik pada dinding ruangan atau memasang custom canopy over-chassis di workshop kami.' }
    ]
  },
  {
    slug: 'panduan-sewa-genset-harian-bulanan-event-pabrik',
    title: 'Panduan Lengkap Sewa Genset Harian & Bulanan: Biaya Rental, Operator, BBM Solar, & Kabel Power',
    seoTitle: 'Sewa Genset Harian & Bulanan - Panduan Rental Lengkap',
    description: 'Panduan rental genset untuk event, konser, proyek konstruksi, dan pabrik. Analisis rincian biaya sewa, kabel power tembaga, solar dexlite, dan teknisi standby.',
    category: 'Rental & Sewa',
    tags: ['sewa genset harian', 'rental genset bulanan', 'sewa genset event', 'rental genset pabrik', 'biaya rental genset'],
    heroImage: '/images/machine-trailer.webp',
    intro: 'Penyewaan genset menjadi solusi paling fleksibel dan hemat modal (*capex-free*) bagi penyelenggara acara, kontraktor proyek pembangunan, maupun pabrik yang membutuhkan daya cadangan sementara selama perbaikan trafo PLN. Namun, proses rental yang sukses membutuhkan koordinasi logistik yang matang agar tidak terjadi mati lampu di tengah event.',
    section1Title: 'Komponen Layanan Paket Rental Genset Profesional',
    section1Content: 'Sewa genset profesional tidak hanya menyewakan mesin. Paket terpadu Gensetora mencakup unit genset silent prima, kabel power tembaga NYFGBY/NYY panjang 50–100 meter, panel distribusi sub-distribution panel, tangki BBM solar harian, serta operator mekanik standby 24 jam selama masa sewa.',
    mandorNotes: [
      '**Pemeriksaan Jalur Penarikan Kabel Power:** Pastikan jalur kabel dari titik parkir genset menuju panel distribusi tidak melintasi jalur pejalan kaki tanpa pelindung (*cable protector ramp*).',
      '**Sediakan Pasokan BBM Solar Dexlite / Industri Resmi:** Gunakan solar berkualitas resmi yang bersih dari endapan air untuk mencegah mesin tersendat di tengah beban puncak event.'
    ],
    tableTitle: 'Tabel Estimasi Paket Sewa Genset Harian & Bulanan di Indonesia',
    tableHeaders: ['Kapasitas Genset', 'Paket Sewa Harian (Event 12 Jam)', 'Paket Sewa Bulanan (Proyek/Pabrik)', 'Kelengkapan Standar', 'Operator'],
    tableRows: [
      ['20 – 30 kVA', 'Rp 1.200.000 – Rp 1.800.000', 'Rp 9.000.000 – Rp 14.000.000', 'Kabel 50m + Tangki Harian', 'Standby / On-call'],
      ['40 – 60 kVA', 'Rp 1.800.000 – Rp 2.500.000', 'Rp 14.000.000 – Rp 20.000.000', 'Kabel 50m + Grounding K3', 'Operator Standby'],
      ['80 – 100 kVA', 'Rp 2.500.000 – Rp 3.800.000', 'Rp 20.000.000 – Rp 30.000.000', 'Kabel 100m + Panel Distribusi', 'Operator Standby'],
      ['150 – 250 kVA', 'Rp 4.000.000 – Rp 6.500.000', 'Rp 32.000.000 – Rp 48.000.000', 'Kabel 100m + Tangki Solar', 'Teknisi Standby 24 Jam'],
      ['300 – 500 kVA', 'Rp 7.000.000 – Rp 12.000.000', 'Rp 55.000.000 – Rp 85.000.000', 'Kabel Feeder + Load Test', '2 Teknisi Standby']
    ],
    section3Title: 'SOP Pelaksanaan Rental Genset Event & Proyek',
    steps: [
      { title: 'Survei Lokasi Parkir Unit', desc: 'Memastikan akses masuk truk crane dan jarak aman kabel ke panel utama.' },
      { title: 'Mobilisasi & Setting Grounding K3', desc: 'Penurunan unit, pemasangan pasak grounding tanah < 5 Ohm.' },
      { title: 'Uji Beban Simulasi (Pre-Event Testing)', desc: 'Menyalakan genset dan menguji beban audio/lighting 2 jam sebelum acara dimulai.' },
      { title: 'Pengawasan Kontinyu Operator', desc: 'Pemantauan meteran voltase, ampere, temperatur mesin, dan stok solar secara real-time.' }
    ],
    faqs: [
      { q: 'Apakah biaya sewa genset sudah termasuk bahan bakar solar?', a: 'Tersedia dua opsi: Paket Sewa Bersih (All-in solar dari kami) atau Paket Lepas Solar (BBM disediakan oleh penyewa sesuai pemakaian riil).' },
      { q: 'Berapa meter kabel power yang disediakan dalam paket sewa?', a: 'Standar paket kami menyertakan kabel power tembaga 50 meter. Penambahan panjang kabel hingga 100-200 meter dapat disediakan sesuai kebutuhan tapak.' }
    ]
  },
  {
    slug: 'fungsi-panel-ats-amf-otomatis-genset-pln',
    title: 'Fungsi Panel ATS-AMF Otomatis: Solusi Perpindahan Listrik PLN ke Genset dalam 5 Detik',
    seoTitle: 'Fungsi Panel ATS-AMF Otomatis Genset PLN - Panduan Lengkap',
    description: 'Pelajari cara kerja panel ATS-AMF otomatis: modul Deep Sea DSE, kontaktor interlock mekanik, genset auto-start saat PLN padam, dan auto-cooling-down.',
    category: 'Otomasi & Elektrikal',
    tags: ['panel ats amf', 'automatic transfer switch', 'modul dse 7320', 'genset otomatis nyala', 'interlock kontaktor'],
    heroImage: '/images/machine-ats.webp',
    intro: 'Ketika listrik PLN padam di tengah malam, mengoperasikan genset secara manual menggunakan tuas handle COS (Change Over Switch) sangat merepotkan dan memakan waktu berharga. Pada fasilitas vital seperti ruang server IT, rumah sakit, tambak udang, dan pabrik kimia, keterlambatan menyalakan listrik selama 5 menit saja dapat menimbulkan kerugian fatal.',
    section1Title: 'Prinsip Kerja Panel ATS (Auto Transfer Switch) & AMF (Auto Main Failure)',
    section1Content: 'Panel AMF berfungsi sebagai otak sensorik yang memonitor tegangan suplai PLN 24 jam nonstop. Begitu terjadi pemadaman (*blackout*) atau tegangan anjlok (*under-voltage*), modul AMF (seperti Deep Sea DSE-7320 atau ComAp) mengirim sinyal starter untuk menyalakan mesin genset. Setelah genset running stabil pada 220/380V 50Hz (sekitar 5–8 detik), kontaktor ATS berpindah menghubungkan daya genset ke beban gedung.',
    mandorNotes: [
      '**Wajib Pasang Interlock Mekanik & Elektrikal:** Kontaktor PLN dan Kontaktor Genset wajib memiliki sistem pengunci ganda (*mechanical & electrical interlock*) agar kedua sumber daya tidak pernah terhubung bersamaan yang dapat memicu ledakan hubung singkat (*short circuit*).',
      '**Penyetelan Waktu Cooling Down:** Saat listrik PLN kembali normal, jangan langsung matikan genset seketika. Beri jeda *cooling down* tanpa beban selama 3–5 menit agar sirkulasi oli dan air radiator mendinginkan blok mesin secara perlahan.'
    ],
    tableTitle: 'Tabel Siklus Kerja Otomatis Panel ATS-AMF',
    tableHeaders: ['Kondisi Jaringan Listrik', 'Respon Modul AMF', 'Aksi Mekanikal Panel ATS', 'Waktu Respon Rata-Rata'],
    tableRows: [
      ['PLN Mengalami Blackout / Padam', 'Sensor mendeteksi loss-voltage', 'Cranking starter mesin genset aktif', '1 – 3 Detik'],
      ['Mesin Genset Menyala Stabil', 'Frekuensi & voltase genset terverifikasi', 'Kontaktor ATS memindahkan beban ke genset', '5 – 8 Detik'],
      ['Listrik PLN Normal Kembali', 'Memantau stabilitas tegangan PLN', 'Beban dipindahkan kembali ke suplai PLN', '10 – 30 Detik'],
      ['Pendinginan Mesin (Cooling Down)', 'Genset berjalan tanpa beban (idle)', 'Mematikan sistem bahan bakar & aki solenoid', '180 – 300 Detik']
    ],
    section3Title: 'Komponen Utama Panel ATS-AMF Standar Industri',
    steps: [
      { title: 'Modul Kontrol Digital (DSE / Smartgen)', desc: 'Layar LCD memantau voltase, ampere, frekuensi, tekanan oli, dan suhu air.' },
      { title: 'Pasangan Kontaktor Bermutu Tinggi', desc: 'Kontaktor ABB, Schneider, atau Chint dengan mechanical interlocking.' },
      { title: 'Automatic Battery Charger', desc: 'Pengisi daya aki pintar trickle charge agar aki starter selalu penuh 100%.' },
      { title: 'Emergency Stop Push Button', desc: 'Tombol pemutus darurat fisik di pintu luar kabinet panel.' }
    ],
    faqs: [
      { q: 'Apakah panel ATS-AMF bisa dipasang pada genset lama yang sudah ada?', a: 'Bisa, asalkan mesin genset Anda sudah memiliki sistem starter elektrik 12V atau 24V dan dinamo pengisian aki yang sehat.' },
      { q: 'Berapa lama waktu jeda perpindahan listrik dengan panel ATS?', a: 'Rata-rata 5 sampai 10 detik sejak PLN padam hingga genset siap memikul beban penuh.' }
    ]
  },
  {
    slug: 'standar-sop-maintenance-berkala-genset-diesel',
    title: 'Standar SOP Maintenance Berkala Genset Diesel: Pemeriksaan 250 Jam, Ganti Oli, & Kuras Filter',
    seoTitle: 'SOP Maintenance Berkala Genset Diesel 250 Jam - Panduan K3',
    description: 'Panduan checklist perawatan preventif genset diesel berstandar ISO 8528. Jadwal ganti oli pelumas, kuras filter solar, filter udara, dan uji baterai starter.',
    category: 'Perawatan & Servis',
    tags: ['maintenance genset diesel', 'jadwal servis 250 jam', 'ganti oli genset', 'filter solar genset', 'perawatan preventif genset'],
    heroImage: '/images/machine-diesel.webp',
    intro: 'Genset darurat sering kali tidak menyala justru pada saat paling dibutuhkan. Fakta di lapangan menunjukkan bahwa 80% kegagalan genset start saat pemadaman PLN disebabkan oleh kurangnya perawatan berkala: aki starter soak, filter solar tersumbat endapan lilin, atau oli mesin mengental akibat lama tidak diganti.',
    section1Title: 'Siklus Jadwal Maintenance Preventif Berdasarkan Jam Kerja (Running Hours)',
    section1Content: 'Pabrikan mesin kelas dunia seperti Cummins dan Perkins menetapkan siklus perawatan preventif rutin setiap **250 jam kerja atau minimal 6 bulan sekali**. Pada genset standby yang jarang menyala, uji coba pemanasan mesin (*warming up run*) tanpa beban wajib dilakukan **1 kali setiap minggu selama 15 menit**.',
    mandorNotes: [
      '**Pemeriksaan Berat Jenis Elektrolit Aki Starter:** Baterai aki basah atau kering harus selalu dicek tegangannya (minimal 12.6V untuk sistem 12V atau 25.2V untuk sistem 24V). Bersihkan kerak putih sulfat pada kutub terminal aki.',
      '**Pembersihan Water Separator Filter Solar:** Buang endapan air yang terperangkap di dasar mangkuk kaca filter solar setiap minggu agar air tidak masuk ke pompa injeksi bahan bakar (*injection pump*).'
    ],
    tableTitle: 'Tabel Checklist Jadwal Maintenance Genset Diesel',
    tableHeaders: ['Interval Waktu / Jam Kerja', 'Item Pemeriksaan Mekanikal', 'Item Pemeriksaan Elektrikal', 'Penggantian Komponen'],
    tableRows: [
      ['Mingguan (Pemanasan 15 Menit)', 'Cek level oli dipstick, air radiator, kebocoran solar', 'Cek tegangan aki starter, lampu indikator modul', 'Pembersihan fisik debu unit'],
      ['250 Jam / 6 Bulan Sekali', 'Penyetelan kekencangan v-belt kipas, cek selang radiator', 'Uji fungsi proteksi alarm oil pressure & water temp', 'Ganti oli mesin, filter oli, filter solar'],
      ['500 Jam / 12 Bulan Sekali', 'Pembersihan sirip sarang radiator, cek turbocharger', 'Kalibrasi tegangan AVR alternator, torsi baut kabel', 'Ganti filter udara, filter bypass, water separator'],
      ['1.000 Jam / 2 Tahun Sekali', 'Penyetelan celah katup klep (*valve clearance*)', 'Inspeksi gulungan dinamo alternator dan megger test', 'Kuras total coolant radiator, ganti selang karet']
    ],
    section3Title: 'Prosedur Uji Coba Pemanasan Mingguan yang Benar',
    steps: [
      { title: 'Periksa Level Cairan Sebelum Start', desc: 'Pastikan oli berada di antara tanda MIN-MAX dipstick dan radiator terisi penuh.' },
      { title: 'Nyalakan Mode Manual Run', desc: 'Biarkan mesin berputar idle selama 3 menit untuk melumasi seluruh dinding silinder.' },
      { title: 'Pantau Parameter pada Modul DSE', desc: 'Pastikan tegangan 380V/220V, frekuensi 50.0–51.5 Hz, dan tekanan oli > 4 bar.' },
      { title: 'Matikan & Kembalikan ke Posisi Auto', desc: 'Kembalikan saklar kontrol ke posisi AUTO agar siap menyala otomatis jika PLN padam.' }
    ],
    faqs: [
      { q: 'Jenis oli mesin apa yang cocok untuk genset diesel industri?', a: 'Gunakan oli mesin diesel tugas berat SAE 15W-40 dengan standar API Service CI-4 atau CK-4 dari merk terpercaya.' },
      { q: 'Mengapa genset tidak boleh dipanaskan terlalu lama tanpa beban?', a: 'Pemanasan tanpa beban melebihi 20 menit menyebabkan pembakaran solar tidak sempurna yang memicu kerak karbon di lubang knalpot (wet stacking).' }
    ]
  },
  {
    slug: 'penyebab-mesin-genset-hunting-naik-turun-dan-solusinya',
    title: 'Penyebab Frekuensi Genset Hunting (Putaran Mesin Naik-Turun) dan Solusi Kalibrasi Governor',
    seoTitle: 'Penyebab Genset Hunting Naik Turun & Solusi Kalibrasi - Panduan',
    description: 'Mengatasi masalah mesin genset hunting: RPM putaran mesin tidak stabil, tegangan voltase naik turun, aktuator governor macet, dan filter solar kotor.',
    category: 'Perawatan & Servis',
    tags: ['genset hunting', 'rpm mesin naik turun', 'kalibrasi governor', 'voltase genset drop', 'servis genset'],
    heroImage: '/images/machine-opentype.webp',
    intro: 'Pernahkah Anda mendengar mesin genset mengeluarkan suara raungan putaran RPM yang berayun naik-turun secara berirama? Kondisi ini di dunia mekanikal dikenal sebagai fenomena **Hunting**. Fenomena hunting menyebabkan frekuensi listrik berfluktuasi liar (misal 45 Hz melonjak ke 55 Hz), yang berisiko membakar komponen sensitif seperti server IT, AC inverter, dan PLC pabrik.',
    section1Title: 'Penyebab Utama Hunting pada Mesin Diesel Generator',
    section1Content: 'Hunting terjadi saat sistem pengatur kecepatan (*speed governor*) gagal mempertahankan putaran mesin konstan pada 1.500 RPM (untuk frekuensi 50 Hz). Penyebab umumnya adalah suplai bahan bakar yang terhambat oleh udara palsu di saluran solar (*masuk angin*), filter solar tersumbat kotoran, atau setelan gain-stability pada modul Electronic Speed Controller (ESC) yang terlalu agresif.',
    mandorNotes: [
      '**Lakukan Bleeding Udara Palsu pada Jalur Bahan Bakar:** Sebelum menyetel governor elektronik, pastikan saluran solar bebas dari gelembung udara dengan memompa priming pump manual dan membuka baut buangan udara (*bleeder screw*).',
      '**Periksa Kondisi Magnetic Pickup Unit (MPU):** Sensor MPU yang kotor tertempel serbuk besi roda gila (*flywheel*) dapat mengirimkan sinyal pulsa RPM yang kacau ke modul governor.'
    ],
    tableTitle: 'Tabel Diagnosa Masalah Genset Hunting & Cara Mengatasinya',
    tableHeaders: ['Gejala Masalah', 'Kemungkinan Penyebab', 'Metode Pengecekan', 'Solusi Tindakan Perbaikan'],
    tableRows: [
      ['Hunting saat beban nol (No-load)', 'Setelan GAIN governor terlalu tinggi', 'Putar potensiometer GAIN ke kiri', 'Kalibrasi ulang modul kontroler governor'],
      ['Hunting hanya saat dibebani', 'Filter solar tersumbat lumpur/lilin', 'Cek tekanan fuel supply pump', 'Ganti filter solar primer dan sekunder'],
      ['Hunting disertai asap putih tipis', 'Ada kebocoran udara di selang solar', 'Cek gelembung udara di selang transparan', 'Kencangkan klem sambungan & bleeding udara'],
      ['Hunting mendadak lalu mesin mati', 'Sensor MPU flywheel rusak / berjarak longgar', 'Ukur resistansi sensor MPU (±1.000 Ohm)', 'Bersihkan ujung sensor & setel jarak celah 0.5mm']
    ],
    section3Title: 'Tahapan Kalibrasi Electronic Governor',
    steps: [
      { title: 'Bersihkan Sensor MPU Flywheel', desc: 'Lepas sensor kecepatan MPU, bersihkan serpihan logam magnetis, pasang kembali dengan celah 3/4 putaran.' },
      { title: 'Setel Potensiometer Speed, Gain & Stability', desc: 'Posisikan trimpot GAIN dan STABILITY pada arah jam 12 sebagai baseline.' },
      { title: 'Nyalakan Mesin dan Pantau Hz', desc: 'Atur sekrup SPEED hingga frekuensi menunjukkan 50.0 Hz stabil pada alat ukur.' },
      { title: 'Uji Kejut Beban (Step Load Test)', desc: 'Beri beban 50% mendadak untuk memastikan RPM segera kembali stabil dalam < 1.5 detik.' }
    ],
    faqs: [
      { q: 'Apakah frekuensi listrik yang naik turun bisa merusak peralatan kantor?', a: 'Sangat berbahaya. Fluktuasi frekuensi di luar toleransi ±2% (49-51 Hz) dapat merusak motor kompresor AC, power supply komputer, dan motor elevator.' },
      { q: 'Kapan saatnya memanggil teknisi servis overhaul genset?', a: 'Jika hunting tetap terjadi setelah ganti filter solar dan bleeding udara, kemungkinan besar injection pump atau plunger bosch pump memerlukan kalibrasi di test bench bengkel kami.' }
    ]
  },
  {
    slug: 'jasa-sewa-genset-jakarta-jabodetabek-24-jam',
    title: 'Jasa Sewa Genset Jakarta & Jabodetabek: Rental Siap Kirim 24 Jam Lengkap Teknisi Lapangan',
    seoTitle: 'Jasa Sewa Genset Jakarta Jabodetabek 24 Jam - Rental Terpercaya',
    description: 'Layanan rental genset Jakarta, Bogor, Depok, Tangerang, Bekasi. Kapasitas 20–1.000 kVA silent unit, siap kirim darurat pemadaman PLN 24 jam nonstop.',
    category: 'Layanan Daerah',
    tags: ['sewa genset jakarta', 'rental genset jabodetabek', 'sewa genset tangerang', 'rental genset bekasi', 'sewa genset 24 jam'],
    heroImage: '/images/machine-trailer.webp',
    intro: 'Sebagai pusat bisnis nasional, pemadaman listrik di wilayah Jakarta dan Jabodetabek berpotensi menghentikan operasional kantor Sudirman-Thamrin, merusak inventaris rantai dingin pergudangan Marunda, atau mengacaukan event pameran di ICE BSD. **GENSETORA** mengoperasikan armada rental genset silent siap mobilisasi 24 jam dengan respon darurat cepat.',
    section1Title: 'Keunggulan Armada Rental Gensetora di Wilayah Jabodetabek',
    section1Content: 'Armada kami berbasis di pool strategis yang menjangkau seluruh koridor tol Jabodetabek. Setiap unit rental merupakan genset silent soundproof berperedam suara ganda yang ramah lingkungan perkotaan padat, lengkap dengan sertifikasi kelayakan emisi, kabel power tembaga lentur, dan teknisi mekanik standby ber-SIO resmi.',
    mandorNotes: [
      '**Izin Melintas Truk Crane di Jalur Protokol Jakarta:** Mobilisasi genset kapasitas besar (>150 kVA) di pusat kota Jakarta dikoordinasikan melalui rute non-ganjil genap dan jam operasional malam hari sesuai regulasi Dishub DKI.',
      '**Penyediaan Proteksi Kabel di Jalur Pejalan Kaki:** Untuk event di area publik Jakarta, sediakan selalu rubber cable protector agar kabel bertegangan tinggi tidak membahayakan pengunjung.'
    ],
    tableTitle: 'Tabel Estimasi Waktu Tempuh & Pilihan Kapasitas Rental Jabodetabek',
    tableHeaders: ['Zona Kawasan Proyek', 'Estimasi Waktu Mobilisasi', 'Kapasitas Populer', 'Peruntukan Utama'],
    tableRows: [
      ['Jakarta Pusat & Selatan (SCBD, Kuningan, TB Simatupang)', '60 – 90 Menit', '40 – 250 kVA', 'Gedung perkantoran, hotel, event ballroom'],
      ['Tangerang & BSD (ICE BSD, Karawaci, Alam Sutera)', '45 – 75 Menit', '60 – 500 kVA', 'Konser pameran, cluster perumahan, rumah sakit'],
      ['Bekasi & Cikarang (MM2100, Jababeka, GIIC)', '60 – 90 Menit', '100 – 1.000 kVA', 'Pabrik industri manufaktur, gudang logistik'],
      ['Bogor & Depok (Sentul, Cibinong, Margonda)', '60 – 90 Menit', '25 – 150 kVA', 'Restoran, resort wisata, proyek konstruksi']
    ],
    section3Title: 'Alur Cepat Rental Darurat 24 Jam Jabodetabek',
    steps: [
      { title: 'Hotline Darurat WhatsApp', desc: 'Sampaikan lokasi proyek, estimasi kVA, dan durasi kebutuhan sewa.' },
      { title: 'Disposisi Armada dari Pool Terdekat', desc: 'Unit genset diangkut truk crane bersama kabel power dan kabel grounding.' },
      { title: 'Instalasi & Koneksi Panel Genset', desc: 'Pemasangan kabel ke panel induk dan pengetesan beban listrik.' },
      { title: 'Operasional Terawasi Operator', desc: 'Mekanik standby memastikan voltase stabil selama masa rental berlangsung.' }
    ],
    faqs: [
      { q: 'Apakah melayani sewa genset darurat saat PLN padam tengah malam?', a: 'Ya, tim piket operasional kami siap 24 jam melayani mobilisasi genset darurat di wilayah Jabodetabek.' },
      { q: 'Apakah biaya rental sudah termasuk biaya antar dan jemput unit?', a: 'Biaya mobilisasi dan demobilisasi menggunakan truk crane tercantum transparan di surat penawaran resmi.' }
    ]
  }
];

// 30 Cities x 4 Use-Cases = 120 Procedural Topics for Future Morning Batches
const INDONESIA_CITIES = [
  { name: 'Surabaya', slug: 'surabaya', province: 'Jawa Timur', hub: 'Pusat Bisnis & Industri Rungkut - Margomulyo', lead: '1 – 2 Jam' },
  { name: 'Sidoarjo', slug: 'sidoarjo', province: 'Jawa Timur', hub: 'Kawasan Industri Waru & Gedangan', lead: '1 – 2 Jam' },
  { name: 'Gresik', slug: 'gresik', province: 'Jawa Timur', hub: 'Kawasan Industri Manyar & Pelabuhan JIIPE', lead: '1 – 2 Jam' },
  { name: 'Bandung', slug: 'bandung', province: 'Jawa Barat', hub: 'Kawasan Wisata & Bisnis Dago - Gedebage', lead: '2 – 3 Jam' },
  { name: 'Semarang', slug: 'semarang', province: 'Jawa Tengah', hub: 'Kawasan Industri Wijayakusuma & Candi', lead: '2 – 3 Jam' },
  { name: 'Malang', slug: 'malang', province: 'Jawa Timur', hub: 'Pusat Pariwisata & Kuliner Kota Malang - Batu', lead: '2 – 3 Jam' },
  { name: 'Solo', slug: 'solo', province: 'Jawa Tengah', hub: 'Kawasan Heritage & Bisnis Surakarta - Sukoharjo', lead: '2 – 3 Jam' },
  { name: 'Yogyakarta', slug: 'yogyakarta', province: 'DIY', hub: 'Pusat Hotel & Wisata Malioboro - Sleman', lead: '2 – 3 Jam' },
  { name: 'Cikarang', slug: 'cikarang', province: 'Jawa Barat', hub: 'Kawasan Industri MM2100, Jababeka & GIIC', lead: '1 – 2 Jam' },
  { name: 'Karawang', slug: 'karawang', province: 'Jawa Barat', hub: 'Kawasan Industri KIIC & Suryacipta', lead: '1 – 2 Jam' },
  { name: 'Tangerang', slug: 'tangerang', province: 'Banten', hub: 'Kawasan Komersial BSD & Pergudangan Bandara', lead: '1 – 2 Jam' },
  { name: 'Bekasi', slug: 'bekasi', province: 'Jawa Barat', hub: 'Kawasan Pergudangan Tambun & Cibitung', lead: '1 – 2 Jam' },
  { name: 'Depok', slug: 'depok', province: 'Jawa Barat', hub: 'Kawasan Pendidikan & Residensial Margonda', lead: '1 – 2 Jam' },
  { name: 'Bogor', slug: 'bogor', province: 'Jawa Barat', hub: 'Kawasan Industri Sentul & Resort Puncak', lead: '1 – 2 Jam' },
  { name: 'Denpasar', slug: 'denpasar', province: 'Bali', hub: 'Pusat Pariwisata Kuta, Seminyak & Sanur', lead: '2 – 3 Jam' },
  { name: 'Badung', slug: 'badung', province: 'Bali', hub: 'Resort Tebing Nusa Dua, Jimbaran & Canggu', lead: '2 – 3 Jam' },
  { name: 'Medan', slug: 'medan', province: 'Sumatera Utara', hub: 'Kawasan Bisnis & Industri KIM Mabar', lead: '3 – 4 Jam' },
  { name: 'Palembang', slug: 'palembang', province: 'Sumatera Selatan', hub: 'Pusat Logistik & Pelabuhan Boom Baru', lead: '3 – 4 Jam' },
  { name: 'Pekanbaru', slug: 'pekanbaru', province: 'Riau', hub: 'Sentra Industri Kelapa Sawit & Migas Siak', lead: '3 – 4 Jam' },
  { name: 'Lampung', slug: 'lampung', province: 'Lampung', hub: 'Kawasan Industri Pelabuhan Panjang', lead: '3 – 4 Jam' },
  { name: 'Balikpapan', slug: 'balikpapan', province: 'Kalimantan Timur', hub: 'Gerbang Logistik IKN & Migas Kariangau', lead: '3 – 4 Jam' },
  { name: 'Samarinda', slug: 'samarinda', province: 'Kalimantan Timur', hub: 'Pusat Perdagangan & Tambang Palaran', lead: '3 – 4 Jam' },
  { name: 'Banjarmasin', slug: 'banjarmasin', province: 'Kalimantan Selatan', hub: 'Pusat Niaga Trisakti & Pergudangan Banjar', lead: '3 – 4 Jam' },
  { name: 'Pontianak', slug: 'pontianak', province: 'Kalimantan Barat', hub: 'Kawasan Industri Pelabuhan Dwikora', lead: '3 – 4 Jam' },
  { name: 'Makassar', slug: 'makassar', province: 'Sulawesi Selatan', hub: 'Kawasan Industri KIMA & Pelabuhan Soekarno-Hatta', lead: '3 – 4 Jam' },
  { name: 'Manado', slug: 'manado', province: 'Sulawesi Utara', hub: 'Pusat Pariwisata Bunaken & Bisnis Sam Ratulangi', lead: '3 – 4 Jam' },
  { name: 'Mataram', slug: 'mataram', province: 'NTB', hub: 'Pusat Pemerintahan & Pariwisata Mandalika', lead: '3 – 4 Jam' },
  { name: 'Batam', slug: 'batam', province: 'Kepulauan Riau', hub: 'Kawasan Galangan Kapal & Elektronik Batu Ampar', lead: '3 – 4 Jam' },
  { name: 'Cirebon', slug: 'cirebon', province: 'Jawa Barat', hub: 'Pusat Niaga Pantura & Industri Arjawinangun', lead: '2 – 3 Jam' },
  { name: 'Pasuruan', slug: 'pasuruan', province: 'Jawa Timur', hub: 'Kawasan Industri PIER Rembang', lead: '1 – 2 Jam' }
];

const APPLICATION_TYPES = [
  {
    slug: 'pabrik-dan-industri',
    title: 'Pabrik & Kawasan Industri',
    shortTitle: 'Pabrik & Industri',
    kvaRange: '100 – 2.000 kVA',
    tag: 'genset pabrik industri',
    category: 'Aplikasi Industri',
    heroImage: '/images/machine-diesel.webp',
    desc: 'Menjamin kontinuitas lini produksi manufaktur, sistem pendingin chiller, dan mesin otomatisasi pabrik tanpa risiko downtime akibat pemadaman jaringan PLN.'
  },
  {
    slug: 'sewa-event-dan-konser',
    title: 'Sewa Event & Konser Outdoor',
    shortTitle: 'Sewa Event & Panggung',
    kvaRange: '40 – 500 kVA',
    tag: 'sewa genset event',
    category: 'Rental & Sewa',
    heroImage: '/images/machine-trailer.webp',
    desc: 'Paket rental genset silent lengkap kabel power tembaga, tangki solar harian, dan teknisi mekanik standby mengawal kelancaran panggung pertunjukan.'
  },
  {
    slug: 'hotel-rumah-sakit-dan-gedung',
    title: 'Hotel, Rumah Sakit & Gedung',
    shortTitle: 'Hotel & Rumah Sakit',
    kvaRange: '50 – 1.000 kVA',
    tag: 'genset silent gedung',
    category: 'Aplikasi Komersial',
    heroImage: '/images/machine-silent.webp',
    desc: 'Perlindungan daya darurat untuk ruang operasi medis, lift gedung, server IT, dan pendingin ruangan dengan genset ultra-silent bersuara rendah (<68 dB).'
  },
  {
    slug: 'service-overhaul-dan-maintenance',
    title: 'Servis Overhaul & Maintenance',
    shortTitle: 'Servis & Overhaul',
    kvaRange: '10 – 2.000 kVA',
    tag: 'servis genset overhaul',
    category: 'Perawatan & Servis',
    heroImage: '/images/machine-opentype.webp',
    desc: 'Layanan pemeliharaan berkala 250 jam, kalibrasi governor, rewinding alternator, perbaikan kebocoran oli, dan load bank testing beban penuh bergaransi.'
  }
];

function generateProceduralArticle(city, app) {
  const slug = `jasa-genset-${city.slug}-${app.slug}`;
  const title = `Jasa Genset ${city.name}: Solusi ${app.title} Kapasitas ${app.kvaRange}`;
  const seoTitle = `Jasa Genset ${city.name} - Spesialis ${app.shortTitle}`;
  const description = `Layanan penjualan, sewa rental, dan servis genset di ${city.name}, ${city.province}. Spesialis ${app.title} kapasitas ${app.kvaRange} bergaransi resmi.`;

  return {
    slug,
    title,
    seoTitle,
    description,
    category: app.category,
    tags: [
      `genset ${city.name.toLowerCase()}`,
      `sewa genset ${city.name.toLowerCase()}`,
      app.tag,
      `jual genset ${city.name.toLowerCase()}`,
      'gensetora power solutions'
    ],
    heroImage: app.heroImage,
    intro: `Aktivitas operasional ${app.title} di wilayah **${city.name}, ${city.province}** sangat bergantung pada pasokan energi listrik yang stabil dan bebas pemadaman tak terduga. Gangguan pasokan daya dapat memicu kerugian finansial yang signifikan pada fasilitas bisnis di ${city.hub}. **GENSETORA** hadir menyediakan solusi genset baru, sewa rental harian-bulanan, dan servis darurat berstandar industri internasional.`,
    section1Title: `Kebutuhan Sistem Pembangkit Daya di Wilayah ${city.name}`,
    section1Content: `Karakteristik fasilitas komersial dan industri di kawasan ${city.name} menuntut unit genset berkapasitas **${app.kvaRange}** yang dilengkapi proteksi panel otomatis ATS-AMF. ${app.desc} Unit silent canopy berperedam akustik tebal memastikan tingkat kebisingan tetap rendah dan mematuhi regulasi lingkungan setempat di ${city.name}.`,
    mandorNotes: [
      `**Penempatan Unit Genset di ${city.name}:** Pastikan lokasi penempatan unit memiliki sirkulasi udara radiator yang lega dan berjarak aman dari material mudah terbakar sesuai standar K3 kelistrikan.`,
      `**Manajemen Pasokan Bahan Bakar Solar:** Sediakan tangki penyimpanan BBM solar industri yang dilengkapi water separator filter untuk menjaga kebersihan sistem injeksi bahan bakar mesin genset.`
    ],
    tableTitle: `Tabel Rekomendasi Kapasitas Genset di Kawasan ${city.name}`,
    tableHeaders: ['Zona Kawasan Proyek', 'Peruntukan Fasilitas', 'Kapasitas Disarankan', 'Tipe Unit Genset', 'Estimasi Waktu Respon'],
    tableRows: [
      [`Pusat Bisnis & Perkantoran ${city.name}`, app.title, '25 – 100 kVA', 'Silent Soundproof Canopy', city.lead],
      [`Kawasan Industri & Pergudangan ${city.name}`, 'Pabrik & Gudang Logistik', '250 – 1.000 kVA', 'Heavy Duty Diesel / Open Type', city.lead],
      [`Fasilitas Medis & Perhotelan ${city.name}`, 'Rumah Sakit & Hotel Resort', '100 – 500 kVA', 'Ultra-Silent (<65 dB) + ATS', city.lead],
      [`Area Event & Lapangan Terbuka ${city.name}`, 'Konser Musik & Konstruksi', '40 – 250 kVA', 'Mobile Trailer Mounted', city.lead]
    ],
    section3Title: `SOP Penanganan Layanan Genset di ${city.name}`,
    steps: [
      { title: 'Konsultasi Beban Daya & Survei Tapak', desc: 'Analisis kebutuhan kW/kVA riil dan inspeksi jalur kabel power di lokasi.' },
      { title: 'Mobilisasi Unit Cepat via Truk Crane', desc: 'Pengiriman unit genset dari depo terdekat langsung menuju lokasi proyek.' },
      { title: 'Instalasi & Grounding K3 Sistem', desc: 'Pemasangan kabel power tembaga dan pengecekan grounding tahanan < 5 Ohm.' },
      { title: 'Pengujian Beban & Serah Terima Operasional', desc: 'Running test tanpa beban dan berbeban penuh sebelum berita acara ditandatangani.' }
    ],
    faqs: [
      { q: `Berapa lama waktu pengiriman genset ke lokasi di ${city.name}?`, a: `Armada kami dapat dimobilisasi dalam waktu ${city.lead} untuk respon darurat di wilayah perkotaan ${city.name}.` },
      { q: `Apakah melayani kontrak servis rutin genset di ${city.name}?`, a: `Ya, kami melayani kontrak maintenance berkala 250 jam dan servis overhaul genset berbagai merk di seluruh wilayah ${city.name}.` }
    ],
    ctaText: `Konsultasikan kebutuhan daya listrik genset untuk fasilitas Anda di ${city.name} bersama tim teknik ahli GENSETORA:`
  };
}

function main() {
  const args = process.argv.slice(2);
  let count = 7;
  const countIdx = args.indexOf('--count');
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10);
  }

  const existingFiles = fs.readdirSync(artikelDir);
  const existingSlugs = new Set(existingFiles.map((file) => file.replace(/\.md$/, '')));

  // Combine cornerstone articles first, then procedural topics
  const candidateTopics = [];
  
  // 1. Add static cornerstone articles
  for (const c of CORNERSTONE_ARTICLES) {
    candidateTopics.push(c);
  }

  // 2. Add procedural city x application matrix
  for (const city of INDONESIA_CITIES) {
    for (const app of APPLICATION_TYPES) {
      candidateTopics.push(generateProceduralArticle(city, app));
    }
  }

  const availableTopics = candidateTopics.filter((art) => !existingSlugs.has(art.slug));

  if (availableTopics.length === 0) {
    console.log('Semua topik dalam database generator saat ini sudah dipublikasikan.');
    return;
  }

  const topicsToPublish = availableTopics.slice(0, count);
  const todayStr = getIndonesianDate();
  console.log(`[Publisher] Menyiapkan publikasi ${topicsToPublish.length} artikel SEO baru (Tanggal Publikasi: ${todayStr})...`);

  let createdCount = 0;
  for (const art of topicsToPublish) {
    const filePath = path.join(artikelDir, `${art.slug}.md`);
    if (fs.existsSync(filePath)) {
      console.log(`[Lewati] File sudah ada: ${art.slug}.md`);
      continue;
    }
    const content = renderArticle(art, todayStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Baru] Sukses membuat: ${art.slug}.md -> "${art.title}"`);
    createdCount++;
  }

  console.log(`[Selesai] Total ${createdCount} artikel SEO baru berhasil diunggah.`);
}

main();
