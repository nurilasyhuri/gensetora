export interface ProductSpec {
  slug: string;
  name: string;
  model: string;
  brand: string;
  series?: string;
  tagline: string;
  type: string;
  fuel: string;
  maxOutput: string;
  maxOutputWatts: number;
  ratedOutput: string;
  ratedOutputWatts: number;
  voltage: string;
  phase: string;
  frequency: string;
  engine?: string;
  speedControl?: string;
  controller?: string;
  fuelConsumption?: string;
  fuelTank: string;
  dimensions: string;
  weight: string;
  startingSystem: string;
  noiseLevel: string;
  image: string;
  brochurePdf: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  applications: string[];
  recommendedLoadMax: string;
}

export const vgenProducts: ProductSpec[] = [
  {
    slug: "vgen-vg-3500-lx",
    name: "V-GEN VG 3500 LX Portable Gasoline Generator",
    model: "VG 3500 LX",
    brand: "V-GEN",
    series: "Portable Open Type",
    tagline: "Genset Bensin Kompak Andal untuk Rumah, UMKM & Usaha Bergerak",
    type: "Genset Portable Open Type",
    fuel: "Bensin (Gasoline)",
    maxOutput: "2.200 W",
    maxOutputWatts: 2200,
    ratedOutput: "2.000 W",
    ratedOutputWatts: 2000,
    voltage: "220 V",
    phase: "1 Phase (Tunggal)",
    frequency: "50 Hz",
    engine: "OHV 4-Tak Air-Cooled",
    fuelTank: "25 Liter",
    dimensions: "60 x 45 x 60 cm",
    weight: "42 kg",
    startingSystem: "Dual Starter (Recoil Tarik & Electric Starter)",
    noiseLevel: "68 dB (pada jarak 7 meter)",
    image: "/images/products/vgen-vg-3500-lx.webp",
    brochurePdf: "/downloads/brosur-vgen-portable-open-type.pdf",
    badge: "Paling Hemat BBM",
    shortDesc: "Genset bensin portable 2.200 Watt berkerangka pipa baja kuat. Dilengkapi starter elektrik, tangki ekstra besar 25 Liter, dan konsumsi bensin sangat hemat.",
    fullDesc: "V-GEN VG 3500 LX adalah genset portable open type bertenaga bensin dengan kapasitas output maksimum 2.200 Watt dan daya rata-rata 2.000 Watt. Ditenagai mesin 4-tak OHV berkualitas tinggi dengan lilitan tembaga murni (100% copper wire alternator) yang memastikan voltase output 220V tetap stabil. Rangka pipa tubular kokoh dilengkapi handle ergonomis dan roda dorong karet, sangat mudah dipindahkan ke berbagai lokasi kerja maupun perumahan.",
    features: [
      "Dual Starter: Electric starter dengan kunci kontak + recoil starter manual darurat",
      "Kapasitas tangki bensin 25 Liter untuk operasi kontinyu hingga 10–12 jam",
      "Alternator 100% kawat tembaga murni dengan Automatic Voltage Regulator (AVR)",
      "Rangka tubular pelindung benturan dengan roda karet tahan aus dan handle lipat",
      "Panel kontrol lengkap: Voltmeter analog, saklar pemutus beban (circuit breaker), dan socket AC 220V",
      "Sensor oli otomatis (Low Oil Alert) mematikan mesin saat pelumas kurang untuk cegah kerusakan piston"
    ],
    applications: [
      "Rumah tinggal (lampu penerangan, kulkas, kipas angin, pompa air, TV)",
      "Stand bazar, food truck, katering gerobak, dan UMKM kopi keliling",
      "Ruko kecil, apotek, dan toko kelontong saat pemadaman PLN",
      "Pekerjaan pertukangan dan perkakas bor/gerinda skala ringan"
    ],
    recommendedLoadMax: "1.600 – 1.800 Watt (beban operasional aman 80%)"
  },
  {
    slug: "vgen-vg-5500-lx",
    name: "V-GEN VG 5500 LX Portable Gasoline Generator",
    model: "VG 5500 LX",
    brand: "V-GEN",
    series: "Portable Open Type",
    tagline: "Daya Tangguh 3.000 Watt untuk Ruko, Kafe & Klinik Kesehatan",
    type: "Genset Portable Open Type",
    fuel: "Bensin (Gasoline)",
    maxOutput: "3.000 W",
    maxOutputWatts: 3000,
    ratedOutput: "2.800 W",
    ratedOutputWatts: 2800,
    voltage: "220 V",
    phase: "1 Phase (Tunggal)",
    frequency: "50 Hz",
    engine: "OHV 4-Tak Air-Cooled",
    fuelTank: "25 Liter",
    dimensions: "60 x 45 x 60 cm",
    weight: "45 kg",
    startingSystem: "Dual Starter (Recoil Tarik & Electric Starter)",
    noiseLevel: "70 dB (pada jarak 7 meter)",
    image: "/images/products/vgen-vg-5500-lx.webp",
    brochurePdf: "/downloads/brosur-vgen-portable-open-type.pdf",
    badge: "Paling Populer UMKM",
    shortDesc: "Genset bensin 3.000 Watt dengan performa handal dan efisien. Ideal untuk kafe, perkantoran ruko, klinik gigi, dan peralatan komersial.",
    fullDesc: "V-GEN VG 5500 LX menawarkan daya maksimum 3.000 Watt dengan daya kontinyu 2.800 Watt pada tegangan stabil 220 Volt / 50 Hz. Cocok sebagai sumber listrik cadangan otomatis untuk ruko usaha, kafe kuliner dengan mesin espresso/chiller mini, laboratorium, maupun workshop kecil. Dilengkapi sistem dual starter elektrik berdaya baterai andal serta tangki 25 Liter untuk operasional panjang tanpa repot sering isi ulang.",
    features: [
      "Mesin 4-tak bensin OHV bertenaga dengan efisiensi bahan bakar optimal",
      "Sistem starter ganda: Electric starter kunci kontak instan + tarikan tali darurat",
      "Dual socket output AC 220V standar industri tahan lonjakan beban",
      "Port output DC 12V untuk pengisian darurat aki kendaraan atau baterai cadangan",
      "Indikator ketinggian bensin (fuel gauge) terintegrasi pada tutup tangki atas",
      "Kaki peredam getaran anti-slip + rangka baja tubular heavy-duty"
    ],
    applications: [
      "Kafe, kedai kopi, dan restoran (mesin kopi, blender komersial, freezer mini, POS)",
      "Ruko perkantoran 2 lantai (komputer kerja, router internet, printer, lampu, 1–2 AC 1/2 PK)",
      "Klinik umum, apotek berpendingin obat, dan praktek dokter gigi",
      "Proyek instalasi interior, pengelasan ringan, dan event pameran booth"
    ],
    recommendedLoadMax: "2.200 – 2.400 Watt (beban operasional aman 80%)"
  },
  {
    slug: "vgen-vg-7500-lx",
    name: "V-GEN VG 7500 LX Portable Gasoline Generator",
    model: "VG 7500 LX",
    brand: "V-GEN",
    series: "Portable Open Type",
    tagline: "Kapasitas 5.500 Watt Bertenaga Besar untuk Bengkel, Resto & Kantor",
    type: "Genset Portable Open Type",
    fuel: "Bensin (Gasoline)",
    maxOutput: "5.500 W",
    maxOutputWatts: 5500,
    ratedOutput: "5.000 W",
    ratedOutputWatts: 5000,
    voltage: "220 V",
    phase: "1 Phase (Tunggal)",
    frequency: "50 Hz",
    engine: "OHV 4-Tak High Torque",
    fuelTank: "25 Liter",
    dimensions: "70 x 52 x 70 cm",
    weight: "90 kg",
    startingSystem: "Dual Starter (Recoil Tarik & Electric Starter)",
    noiseLevel: "72 dB (pada jarak 7 meter)",
    image: "/images/products/vgen-vg-7500-lx.webp",
    brochurePdf: "/downloads/brosur-vgen-portable-open-type.pdf",
    badge: "Pilihan Bengkel & Restoran",
    shortDesc: "Genset open type bertenaga 5.500 Watt dengan kapasitas engine tangguh. Sanggup mengangkat beban motorik starting mesin las, kompresor, dan beberapa AC.",
    fullDesc: "V-GEN VG 7500 LX dirancang khusus untuk operasional komersial dan bisnis yang memerlukan daya 1-fasa berkapasitas besar hingga 5.500 Watt. Rangka sasis baja 70 x 52 x 70 cm yang kokoh menampung blok silinder mesin bertenaga tinggi, alternator tembaga berpenampang lebar, dan baterai starter berdaya tahan prima. Sangat cocok untuk mengoperasikan peralatan induktif seperti mesin las inverter, kompresor angin, kulkas showcase, dan pompa sirkulasi.",
    features: [
      "Daya maksimum 5.500 W (5,5 kW) dengan daya kontinyu 5.000 W (5,0 kW)",
      "Sistem pendingin udara forced-air cooling dengan sirip silinder berkapasitas pelepasan panas cepat",
      "AVR (Automatic Voltage Regulator) kelas industri menjaga fluktuasi tegangan di bawah ±2%",
      "Knalpot peredam panas muffler dengan pelindung kisi keselamatan anti-bakar",
      "Dilengkapi pengukur tegangan digital/analog presisi dan circuit breaker overload protection",
      "Sasis pipa baja kokoh dengan roda karet tapak lebar untuk medan bengkel atau outdoor"
    ],
    applications: [
      "Restoran besar, rumah makan padang, dapur sentral kuliner",
      "Bengkel otomotif, toko velg/ban, perbaikan bodi, mesin kompresor & gerinda potong",
      "Kantor cabang perbankan/ekspedisi dengan banyak komputer dan AC ruangan",
      "Sound system hajatan kampung, panggung mini, dan pencahayaan panggung outdoor"
    ],
    recommendedLoadMax: "4.000 – 4.400 Watt (beban operasional aman 80%)"
  },
  {
    slug: "vgen-vg-10500-lx",
    name: "V-GEN VG 10500 LX Portable Gasoline Generator",
    model: "VG 10500 LX",
    brand: "V-GEN",
    series: "Portable Open Type",
    tagline: "Performa Daya Tinggi 7.500 Watt untuk Bisnis Komersial & Proyek",
    type: "Genset Portable Open Type",
    fuel: "Bensin (Gasoline)",
    maxOutput: "7.500 W",
    maxOutputWatts: 7500,
    ratedOutput: "7.000 W",
    ratedOutputWatts: 7000,
    voltage: "220 V",
    phase: "1 Phase (Tunggal)",
    frequency: "50 Hz",
    engine: "OHV 4-Tak Heavy Duty",
    fuelTank: "25 Liter",
    dimensions: "70 x 52 x 70 cm",
    weight: "95 kg",
    startingSystem: "Dual Starter (Recoil Tarik & Electric Starter)",
    noiseLevel: "74 dB (pada jarak 7 meter)",
    image: "/images/products/vgen-vg-10500-lx.webp",
    brochurePdf: "/downloads/brosur-vgen-portable-open-type.pdf",
    badge: "Heavy Duty 1-Phase",
    shortDesc: "Unit genset bensin bertenaga puncak 7.500 Watt (7,5 kW). Pilihan tepat untuk gedung ruko bertingkat, mini cold storage, dan operasional tanpa jeda.",
    fullDesc: "V-GEN VG 10500 LX merupakan lini tertinggi untuk sistem listrik 1 Phase 220V dalam jajaran genset portable open type V-GEN. Menghantarkan output rated hingga 7.000 Watt dan puncak 7.500 Watt, genset ini sanggup menanggung lonjakan beban awal (inrush current) dari motor listrik industri kecil, pendingin walk-in chiller, mesin bubut, hingga backup cadangan seluruh lantai ruko perkantoran.",
    features: [
      "Output maksimum 7.500 W / Rated 7.000 W pada voltase tunggal 220 Volt",
      "Kapasitas silinder mesin ekstra besar untuk torsi tinggi pada beban penuh (full load)",
      "Alternator kawat tembaga tahan panas kelas isolasi tinggi dengan pendinginan kipas internal",
      "Muffler knalpot chrome heavy-duty peredam getaran dan penyaring percikan",
      "Dual starter: tombol starter elektrik responsif didukung aki berkapasitas besar",
      "Sistem proteksi ganda: pemutus arus otomatis (MCB) dan pengaman level oli"
    ],
    applications: [
      "Gedung perkantoran ruko 3–4 lantai dan pusat pelayanan publik",
      "Gudang logistik, mini cold storage, dan fasilitas pembekuan hasil laut/daging",
      "Workshop mesin bubut, fabrikasi besi, bengkel konstruksi baja",
      "Villa peristirahatan mewah dan perumahan besar dengan sistem AC multi-split"
    ],
    recommendedLoadMax: "5.600 – 6.000 Watt (beban operasional aman 80%)"
  },
  {
    slug: "vgen-vg-12500-lx",
    name: "V-GEN VG 12500 LX Dual Voltage 3-Phase Generator",
    model: "VG 12500 LX",
    brand: "V-GEN",
    series: "Portable Open Type",
    tagline: "Genset Portable 3 Phase 380V / 220V Flagship Kapasitas 8.500 Watt",
    type: "Genset Portable Open Type (Dual Voltage 3-Phase)",
    fuel: "Bensin (Gasoline)",
    maxOutput: "8.500 W",
    maxOutputWatts: 8500,
    ratedOutput: "8.000 W",
    ratedOutputWatts: 8000,
    voltage: "380 V / 220 V",
    phase: "3 Phase & 1 Phase (Dual Voltage)",
    frequency: "50 Hz",
    engine: "OHV 4-Tak Dual Voltage Industrial",
    fuelTank: "25 Liter",
    dimensions: "70 x 52 x 70 cm",
    weight: "95 kg",
    startingSystem: "Dual Starter (Recoil Tarik & Electric Starter)",
    noiseLevel: "74 dB (pada jarak 7 meter)",
    image: "/images/products/vgen-vg-12500-lx.webp",
    brochurePdf: "/downloads/brosur-vgen-portable-open-type.pdf",
    badge: "Flagship 3-Phase Industri",
    shortDesc: "Varian tertinggi dengan tegangan ganda 380V (3 Phase) dan 220V (1 Phase). Khusus untuk peralatan industri, pompa submersible, proyek konstruksi, dan mesin 3 fasa.",
    fullDesc: "V-GEN VG 12500 LX adalah unit flagship genset portable open type yang dilengkapi output ganda tegangan industri: 380 Volt (3 Phase) melalui soket industri merah dan 220 Volt (1 Phase) melalui soket industri biru. Dengan daya maksimum 8.500 Watt dan daya rata-rata 8.000 Watt, genset ini menjadi solusi portabel terkuat untuk menggerakkan mesin-mesin industri 3 fasa di lokasi proyek yang belum terjangkau jaringan listrik PLN 3 fasa.",
    features: [
      "Dual Voltage Support: Soket industri 3-Phase 380V (Merah) & 1-Phase 220V (Biru)",
      "Output maksimum 8.500 Watt (8,5 kW) / Rated kontinyu 8.000 Watt (8,0 kW)",
      "Alternator 3-Phase brushless copper winding dengan stabilitas frekuensi 50 Hz",
      "Tangki bensin 25 Liter berkapasitas besar dengan gauge indikator bensin",
      "Sasis pipa tubular baja dengan roda dorong medan berat dan gagang tarik lipat",
      "Panel kontrol industri terlindung: Circuit breaker 3P, DC 12V output, indikator oli dan starter kunci"
    ],
    applications: [
      "Mesin industri 3 Phase (pompa submersible dalam, kompresor 3-fasa, molen semen elektrik)",
      "Kontraktor proyek jalan tol, jembatan, dan konstruksi gedung bertingkat",
      "Pabrik pengolahan pangan, cold storage industri, workshop CNC/bubut",
      "Pertambangan, perkebunan, dan fasilitas daerah terpencil yang membutuhkan suplai 3 fasa"
    ],
    recommendedLoadMax: "6.400 – 6.800 Watt (beban operasional aman 80%)"
  }
];

export const primtechProducts: ProductSpec[] = [
  {
    slug: "primtech-psg-20j",
    name: "PRIMTECH PSG-20J Diesel Generator",
    model: "PSG-20J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Genset Diesel Industri 20 kVA Prime / 22 kVA Standby Berkecepatan Presisi",
    type: "Genset Diesel Silent Canopy / Open Type",
    fuel: "Solar (Diesel)",
    maxOutput: "22 kVA / 17,6 kW (Standby)",
    maxOutputWatts: 17600,
    ratedOutput: "20 kVA / 16 kW (Prime Power)",
    ratedOutputWatts: 16000,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI YN27BJ28 (1500 RPM)",
    speedControl: "Electronic Speed Control",
    controller: "SmartGen Intelligent Controller / R120",
    fuelConsumption: "3,8 L/jam (100% Load) • 2,9 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 1670 x 900 x 1150 mm | Open: 1220 x 620 x 770 mm",
    weight: "Silent: 480 kg | Open: 380 kg",
    startingSystem: "Electric Starter 12V",
    noiseLevel: "< 68 dB (Silent Canopy Soundproof)",
    image: "/images/products/primtech-psg-20j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Prime 20 kVA",
    shortDesc: "Genset diesel 20 kVA bertenaga mesin YUNNEI YN27BJ28 dengan electronic speed control presisi dan SmartGen controller pintar. Tersedia tipe Silent & Open.",
    fullDesc: "PRIMTECH Prime Series PSG-20J dirancang untuk memenuhi kebutuhan daya utama (Prime Power 20 kVA) maupun daya cadangan darurat (Standby 22 kVA). Ditenagai mesin diesel YUNNEI YN27BJ28 berputaran stabil 1500 RPM dan alternator performa tinggi, unit ini memberikan stabilitas frekuensi 50 Hz prima untuk perkantoran, klinik, supermarket, dan fasilitas komersial.",
    features: [
      "Mesin diesel YUNNEI YN27BJ28 4-silinder dengan Electronic Speed Control presisi",
      "SmartGen Intelligent Controller (R120) untuk monitoring otomatis temperatur, oli, tegangan & frekuensi",
      "Pilihan tipe Silent Canopy (peredam akustik anti-api) atau Open Type untuk ruang power house",
      "Sistem kelistrikan 3-Phase 400V / 230V dengan proteksi beban lebih (overload protection)",
      "Konsumsi bahan bakar solar sangat efisien: hanya 3,8 Liter/jam pada beban penuh (100% Load)",
      "Radiator pendingin heavy-duty dengan thermostat 68–75°C tahan iklim tropis Indonesia"
    ],
    applications: [
      "Klinik medis, laboratorium, dan apotek berpendingin vaksin",
      "Minimarket, restoran waralaba, dan ruko perkantoran 3–4 lantai",
      "Stasiun pengisian bahan bakar (SPBU) dan tower telekomunikasi BTS",
      "Fasilitas budidaya perikanan/tambak dan peternakan modern"
    ],
    recommendedLoadMax: "16 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-25j",
    name: "PRIMTECH PSG-25J Diesel Generator",
    model: "PSG-25J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Genset Diesel Kompak 25 kVA Prime / 28 kVA Standby Berperforma Tinggi",
    type: "Genset Diesel Silent Canopy / Open Type",
    fuel: "Solar (Diesel)",
    maxOutput: "28 kVA / 22,4 kW (Standby)",
    maxOutputWatts: 22400,
    ratedOutput: "25 kVA / 20 kW (Prime Power)",
    ratedOutputWatts: 20000,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI YN4E38DB (1500 RPM)",
    speedControl: "Electronic Speed Control",
    controller: "SmartGen Intelligent Controller / R120",
    fuelConsumption: "7,6 L/jam (100% Load) • 5,7 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 1880 x 900 x 1250 mm | Open: 1500 x 680 x 820 mm",
    weight: "Silent: 520 kg | Open: 460 kg",
    startingSystem: "Electric Starter 12V",
    noiseLevel: "< 68 dB (Silent Canopy Soundproof)",
    image: "/images/products/primtech-psg-25j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Prime 25 kVA",
    shortDesc: "Genset diesel 25 kVA dengan engine YUNNEI YN4E38DB bertenaga 48 kVA output mekanik. Solusi andal untuk perhotelan, ruko besar, dan operasional nonstop.",
    fullDesc: "PRIMTECH PSG-25J merupakan genset diesel 3-phase dengan daya utama 25 kVA (20 kW) dan daya standby 28 kVA. Menggunakan mesin YUNNEI YN4E38DB dengan rasio kompresi 17.5:1, unit ini menjamin torsi kuat saat menerima beban starting awal tanpa drop voltase yang membahayakan peralatan elektronik sensitif.",
    features: [
      "Mesin diesel tangguh YUNNEI YN4E38DB 1500 RPM berpendingin air (water-cooled radiator)",
      "Pengaturan putaran mesin Electronic Speed Control responsif menjaga frekuensi 50 Hz stabil",
      "Sistem pemantauan SmartGen Controller R120 dengan antarmuka digital LCD lengkap",
      "Struktur box silent kokoh dengan lapisan peredam suara rockwool padat",
      "Akses pintu ganda mempermudah inspeksi rutin filter oli, filter solar, dan air radiator",
      "Proteksi darurat otomatis: overspeed, low oil pressure, high water temperature, under/over voltage"
    ],
    applications: [
      "Hotel butik, wisma penginapan, dan resort wisata",
      "Sentra perbankan cabang, kantor ekspedisi logistik, dan server mini IT",
      "Workshop manufaktur ringan, percetakan, dan industri konveksi",
      "Event organizer outdoor, panggung pertunjukan, dan instalasi penerangan darurat"
    ],
    recommendedLoadMax: "20 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-38j",
    name: "PRIMTECH PSG-38J Diesel Generator",
    model: "PSG-38J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Genset Diesel 38 kVA Prime / 41 kVA Standby untuk Komersial & Industri",
    type: "Genset Diesel Silent Canopy / Open Type",
    fuel: "Solar (Diesel)",
    maxOutput: "41 kVA / 32,8 kW (Standby)",
    maxOutputWatts: 32800,
    ratedOutput: "38 kVA / 30,4 kW (Prime Power)",
    ratedOutputWatts: 30400,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI YN4M38DBZ (1500 RPM)",
    speedControl: "Electronic Speed Control",
    controller: "SmartGen Intelligent Controller / R120",
    fuelConsumption: "7,6 L/jam (100% Load) • 5,7 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 1880 x 900 x 1250 mm | Open: 1500 x 680 x 820 mm",
    weight: "Silent: 520 kg | Open: 460 kg",
    startingSystem: "Electric Starter 12V",
    noiseLevel: "< 70 dB (Silent Soundproof)",
    image: "/images/products/primtech-psg-38j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Populer Komersial",
    shortDesc: "Unit genset diesel 38 kVA bertenaga mesin YUNNEI YN4M38DBZ. Pilihan prima untuk pabrik makanan, rumah sakit bersalin, dan gedung perkantoran.",
    fullDesc: "PRIMTECH PSG-38J adalah pembangkit listrik diesel 38 kVA Prime / 41 kVA Standby yang andal dalam berbagai kondisi operasional. Dilengkapi canopy berprofil kuning-hitam modern yang kedap suara dan anti-karat, unit ini sangat populer digunakan pada fasilitas komersial perkotaan yang mensyaratkan tingkat kebisingan rendah.",
    features: [
      "Mesin YUNNEI YN4M38DBZ bertenaga dengan Electronic Speed Control halus",
      "Alternator 3-Phase kelas isolasi H dengan brushless exciter dan AVR presisi",
      "SmartGen Digital Controller R120 kompatibel dengan sistem ATS otomatis (Auto Transfer Switch)",
      "Desain canopy heavy-duty dengan ventilasi udara optimal mencegah mesin overheat",
      "Efisiensi konsumsi BBM: 7,6 L/jam (100% Load) dan 4,2 L/jam (50% Load)",
      "Dilengkapi tangki solar harian terpasang di sasis dasar lengkap dengan pelampung level"
    ],
    applications: [
      "Rumah sakit bersalin, puskesmas rawat inap, dan klinik spesialis",
      "Pabrik pengolahan makanan, roti, dan cold storage cold-chain",
      "Gedung perkantoran 4–5 lantai dan pusat bisnis terpadu",
      "Supermarket bahan makanan segar dan pusat perbelanjaan daerah"
    ],
    recommendedLoadMax: "30 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-63j",
    name: "PRIMTECH PSG-63J Diesel Generator",
    model: "PSG-63J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Genset Diesel 63 kVA Prime / 70 kVA Standby Tenaga Mantap & Hemat BBM",
    type: "Genset Diesel Silent Canopy / Open Type",
    fuel: "Solar (Diesel)",
    maxOutput: "70 kVA / 56 kW (Standby)",
    maxOutputWatts: 56000,
    ratedOutput: "63 kVA / 50,4 kW (Prime Power)",
    ratedOutputWatts: 50400,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI YN4E55DBZ (Output 69 kVA, 1500 RPM)",
    speedControl: "Electronic Speed Control",
    controller: "SmartGen Intelligent Controller / R120",
    fuelConsumption: "14,2 L/jam (100% Load) • 10,7 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 2200 x 900 x 1350 mm | Open: 1680 x 720 x 1100 mm",
    weight: "Silent: 1130 kg | Open: 810 kg",
    startingSystem: "Electric Starter 12V",
    noiseLevel: "< 70 dB (Silent Soundproof)",
    image: "/images/products/primtech-psg-63j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Daya Tangguh 63 kVA",
    shortDesc: "Unit genset diesel 63 kVA dengan engine YUNNEI YN4E55DBZ berdaya 69 kVA. Sanggup menggerakkan motorik mesin pabrik, lift gedung, dan pendingin sentral.",
    fullDesc: "PRIMTECH PSG-63J menawarkan daya kontinyu 63 kVA (50,4 kW) dan daya darurat 70 kVA (56 kW) pada voltase industri 400V / 230V. Mesin YUNNEI YN4E55DBZ dilengkapi sistem pendingin radiator efisiensi tinggi (thermostat 72–76°C) yang teruji tahan bekerja non-stop 24 jam saat terjadi pemadaman listrik berkepanjangan.",
    features: [
      "Mesin diesel tugas berat YUNNEI YN4E55DBZ dengan pengaturan kecepatan elektronik",
      "Struktur sasis baja kanal tebal dengan titik angkat crane (lifting lugs) dan lubang forklift",
      "Modul SmartGen R120 dengan fungsi auto-start/stop saat terhubung ke panel ATS",
      "Sistem pembuangan knalpot dilengkapi silencer industri peredam kebisingan",
      "Konsumsi bahan bakar terukur: 14,2 L/jam (100% Load) dan 10,7 L/jam (75% Load)",
      "Pintu akses panel kontrol berkaca transparan dengan kunci pengaman ganda"
    ],
    applications: [
      "Pabrik garmen, tekstil, dan percetakan skala menengah",
      "Hotel berbintang, gedung pertemuan convention hall, dan ballroom",
      "Gedung rumah sakit daerah dan pusat dialisis cuci darah",
      "Instalasi pengolahan air bersih (PDAM) dan stasiun pompa limbah"
    ],
    recommendedLoadMax: "50 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-125j",
    name: "PRIMTECH PSG-125J Common Rail Diesel Generator",
    model: "PSG-125J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Teknologi Common Rail Injection 125 kVA Prime / 138 kVA Standby",
    type: "Genset Diesel Silent Canopy / Open Type",
    fuel: "Solar (Diesel)",
    maxOutput: "138 kVA / 110,4 kW (Standby)",
    maxOutputWatts: 110400,
    ratedOutput: "125 kVA / 100 kW (Prime Power)",
    ratedOutputWatts: 100000,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI YN4F170-33CR (Common Rail Injection System)",
    speedControl: "Common Rail Electronic Injection",
    controller: "SmartGen Intelligent Controller / R120",
    fuelConsumption: "29,0 L/jam (100% Load) • 21,8 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 2200 x 1000 x 1350 mm | Open: 1900 x 780 x 1100 mm",
    weight: "Silent: 1130 kg | Open: 810 kg",
    startingSystem: "Electric Starter 12V",
    noiseLevel: "< 70 dB (Silent Soundproof)",
    image: "/images/products/primtech-psg-125j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Common Rail Injection",
    shortDesc: "Genset diesel 125 kVA dengan teknologi canggih Common Rail Injection System YUNNEI YN4F170-33CR. Pembakaran presisi, emisi bersih, dan sangat hemat solar.",
    fullDesc: "PRIMTECH PSG-125J membawa teknologi modern Common Rail Injection System ke lini genset diesel industri. Menghasilkan Prime Power 125 kVA (100 kW) dan Standby 138 kVA dari mesin YUNNEI YN4F170-33CR (output daya mesin 158 kVA, bore x stroke 107 x 125 mm). Injeksi bahan bakar bertekanan tinggi menjamin pengabutan solar sangat sempurna, respons beban instan tanpa asap hitam, serta efisiensi solar luar biasa.",
    features: [
      "Mesin Common Rail YUNNEI YN4F170-33CR dengan kontrol injeksi bahan bakar elektronik mikro-detik",
      "Stabilitas frekuensi dan tegangan luar biasa, sangat aman untuk beban server IT dan data center",
      "Emisi gas buang jauh lebih bersih dan suara ruang bakar lebih halus dibanding genset konvensional",
      "SmartGen Digital Controller R120 dengan integrasi monitoring jarak jauh (telemetry)",
      "Konsumsi BBM efisien: 29 L/jam pada 100% load dan 21,8 L/jam pada 75% load",
      "Canopy baja anti-korosi dengan finishing powder coating tahan cuaca outdoor maritim"
    ],
    applications: [
      "Data center, fasilitas telekomunikasi, dan ruang server perbankan",
      "Rumah sakit kelas A/B (ruang operasi ICU, CT scan, lab MRI)",
      "Pabrik manufaktur presisi, industri farmasi, dan chemical processing",
      "Mall, pusat perbelanjaan regional, dan bandara penerbangan"
    ],
    recommendedLoadMax: "100 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-250j",
    name: "PRIMTECH PSG-250J 6-Cylinder Common Rail Generator",
    model: "PSG-250J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Mesin 6 Silinder Common Rail 250 kVA Prime / 275 kVA Standby",
    type: "Genset Diesel Heavy Open Type / Silent Canopy",
    fuel: "Solar (Diesel)",
    maxOutput: "275 kVA / 220 kW (Standby)",
    maxOutputWatts: 220000,
    ratedOutput: "250 kVA / 200 kW (Prime Power)",
    ratedOutputWatts: 200000,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI D6R339-34CR (6-Cylinder Common Rail, 8.9L)",
    speedControl: "Common Rail Electronic Injection",
    controller: "SmartGen Intelligent Controller / R250",
    fuelConsumption: "61,0 L/jam (100% Load) • 45,8 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 3300 x 1500 x 2000 mm | Open: 2630 x 1150 x 1520 mm",
    weight: "Silent: 3100 kg | Open: 2400 kg",
    startingSystem: "Electric Starter 24V",
    noiseLevel: "Heavy Power House / Silent Canopy",
    image: "/images/products/primtech-psg-250j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Heavy Duty 250 kVA",
    shortDesc: "Genset industri 250 kVA bermesin 6 Silinder YUNNEI D6R339-34CR Common Rail berkapasitas 8.9 Liter. Torsi perkasa untuk beban pabrik, peleburan, dan kontraktor.",
    fullDesc: "PRIMTECH PSG-250J dirancang untuk operasional tugas berat kontinu dengan daya utama 250 kVA (200 kW) dan kapasitas cadangan 275 kVA (220 kW). Blok mesin 6 silinder segaris D6R339-34CR berkapasitas silinder 8.9 Liter dengan sistem common rail menghasilkan pembakaran yang sangat bertenaga, sanggup mengatasi lonjakan daya mendadak dari motor listrik induksi berkapasitas tinggi di kawasan industri.",
    features: [
      "Mesin 6 Silinder In-line YUNNEI D6R339-34CR Common Rail (Displacement 8.9 Liter)",
      "Alternator industri heavy-duty 3-Phase berpendingin kipas internal dengan proteksi IP23",
      "SmartGen R250 Controller canggih dengan perekaman log histori alarm dan parameter mesin",
      "Sistem pendingin radiator tropical duty dengan kapasitas pelepasan panas luar biasa",
      "Sistem starting elektrik 24V bertenaga baterai ganda heavy-duty",
      "Konsumsi bahan bakar solar terkontrol: 61 L/jam (100% Load) dan 45,8 L/jam (75% Load)"
    ],
    applications: [
      "Pabrik semen, smelter, penggilingan baja, dan workshop cetakan mesin",
      "Kawasan industri terpadu, gudang pergudangan logistik raksasa",
      "Proyek konstruksi jalan tol, dermaga pelabuhan, dan pertambangan",
      "Gedung pencakar langit, apartemen bertingkat banyak, dan rumah sakit tipe A"
    ],
    recommendedLoadMax: "200 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-375j",
    name: "PRIMTECH PSG-375J Industrial Powerhouse Generator",
    model: "PSG-375J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Pembangkit Daya Industri 375 kVA Prime / 415 kVA Standby",
    type: "Genset Diesel Heavy Open Type / Silent Canopy",
    fuel: "Solar (Diesel)",
    maxOutput: "415 kVA / 332 kW (Standby)",
    maxOutputWatts: 332000,
    ratedOutput: "375 kVA / 300 kW (Prime Power)",
    ratedOutputWatts: 300000,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI D6S422-35CR (Displacement 10.3 Liter, 1500 RPM)",
    speedControl: "Electronic Speed Control / Common Rail",
    controller: "SmartGen Intelligent Controller / R250",
    fuelConsumption: "83,1 L/jam (100% Load) • 62,3 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 4200 x 1900 x 2200 mm | Open: 2950 x 1500 x 1700 mm",
    weight: "Silent: 6200 kg | Open: 4600 kg",
    startingSystem: "Electric Starter 24V",
    noiseLevel: "Heavy Power House / Silent Canopy",
    image: "/images/products/primtech-psg-375j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Pembangkit Pabrik 375 kVA",
    shortDesc: "Unit genset industri raksasa 375 kVA bermesin YUNNEI D6S422-35CR 10.3 Liter. Solusi suplai daya mandiri untuk sentra pabrik pengolahan, tambang, dan smelter.",
    fullDesc: "PRIMTECH PSG-375J adalah pembangkit daya skala besar berkapasitas 375 kVA Prime / 415 kVA Standby pada tegangan 400V 3-Phase. Menghubungkan mesin bertenaga mekanik 400 kVA (Displacement 10.3 Liter) dengan alternator heavy-duty berpendingin ganda, genset ini dirancang untuk operasional pabrik yang tidak boleh berhenti sedetik pun.",
    features: [
      "Mesin diesel kapasitas 10.3 Liter YUNNEI D6S422-35CR dengan Electronic Speed Control presisi",
      "Alternator brushless kawat tembaga murni dengan ketahanan insulasi Class H",
      "SmartGen R250 Controller terpadu dengan proteksi fasa, frekuensi, tekanan oli dan temperatur",
      "Sasis sasis baja struktural heavy-gauge tahan deformasi getaran berat",
      "Efisiensi konsumsi bahan bakar teruji: 83,1 L/jam pada beban 100% penuh",
      "Dapat dihubungkan ke sistem sinkronisasi paralel (paralleling / synchronizing) multi-genset"
    ],
    applications: [
      "Pabrik pengolahan kelapa sawit (PKS) dan kilang minyak nabati",
      "Kawasan pertambangan batubara, nikel, dan pengolahan mineral",
      "Pusat data center nasional dan fasilitas komputasi awan skala besar",
      "Bandara internasional, pelabuhan peti kemas kontainer, dan stasiun sentral"
    ],
    recommendedLoadMax: "300 kVA (beban kontinyu aman 80%)"
  },
  {
    slug: "primtech-psg-500j",
    name: "PRIMTECH PSG-500J Mega Power Industrial Generator",
    model: "PSG-500J",
    brand: "PRIMTECH",
    series: "Prime Series Diesel",
    tagline: "Flagship Mega Daya 500 kVA Prime / 550 kVA Standby Tanpa Kompromi",
    type: "Genset Diesel Heavy Open Type / Silent Canopy",
    fuel: "Solar (Diesel)",
    maxOutput: "550 kVA / 440 kW (Standby)",
    maxOutputWatts: 440000,
    ratedOutput: "500 kVA / 400 kW (Prime Power)",
    ratedOutputWatts: 400000,
    voltage: "400 V / 230 V",
    phase: "3-Phase",
    frequency: "50 Hz",
    engine: "YUNNEI D6T665-35CR2 (Displacement 11.7 Liter, 1500 RPM)",
    speedControl: "Electronic Speed Control / Common Rail",
    controller: "SmartGen Intelligent Controller / R250",
    fuelConsumption: "97,0 L/jam (100% Load) • 72,8 L/jam (75% Load)",
    fuelTank: "Tangki Dasar Terintegrasi Sasis",
    dimensions: "Silent: 4300 x 1900 x 2200 mm | Open: 3180 x 1500 x 1700 mm",
    weight: "Silent: 6800 kg | Open: 5100 kg",
    startingSystem: "Electric Starter 24V",
    noiseLevel: "Heavy Power House / Silent Canopy",
    image: "/images/products/primtech-psg-500j.webp",
    brochurePdf: "/downloads/katalog-genset-diesel-primtech-prime-series.pdf",
    badge: "Flagship Mega Power 500 kVA",
    shortDesc: "Varian flagship 500 kVA Prime / 550 kVA Standby bertenaga mesin YUNNEI D6T665-35CR2 11.7 Liter. Keandalan mutlak untuk kebutuhan daya raksasa.",
    fullDesc: "PRIMTECH PSG-500J adalah mahakarya pembangkit listrik industri berkapasitas 500 kVA (400 kW) Prime Power dan 550 kVA (440 kW) Standby Power. Menggunakan mesin diesel turbocharger intercooled YUNNEI D6T665-35CR2 berkapasitas silinder 11.7 Liter dengan bobot mesin bersih 1170 kg, unit ini merupakan sumber tenaga utama paling kokoh untuk infrastruktur strategis nasional dan fasilitas manufaktur berat.",
    features: [
      "Mesin diesel raksasa YUNNEI D6T665-35CR2 11.7 Liter dengan pendingin turbo intercooler",
      "Daya keluaran 500 kVA / 400 kW kontinyu dengan cadangan darurat 550 kVA / 440 kW",
      "Sistem injeksi bahan bakar berpresisi tinggi dengan kontrol putaran elektronik 1500 RPM",
      "SmartGen Industrial Controller R250 siap sinkronisasi panel genset paralel (multiple synchronizing)",
      "Konsumsi bahan bakar terukur: 97 L/jam (100% Load) dan 72,8 L/jam (75% Load)",
      "Tersedia tipe Open Type untuk instalasi ruang power house dengan attenuator ducting"
    ],
    applications: [
      "Pabrik peleburan besi dan baja, manufaktur otomotif, dan semen curah",
      "Fasilitas data center tier 3/4 dengan sistem dual genset redundant N+1",
      "Proyek infrastruktur mega: bendungan, terowongan jalan tol, pelabuhan laut dalam",
      "Kawasan pertambangan terpencil tanpa jaringan PLN yang beroperasi 24/7 non-stop"
    ],
    recommendedLoadMax: "400 kVA (beban kontinyu aman 80%)"
  }
];

export const allProducts: ProductSpec[] = [...vgenProducts, ...primtechProducts];

export function getProductBySlug(slug: string): ProductSpec | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByBrand(brand: string): ProductSpec[] {
  return allProducts.filter((p) => p.brand.toLowerCase() === brand.toLowerCase());
}
