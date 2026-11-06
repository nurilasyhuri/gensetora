export interface ProductSpec {
  slug: string;
  name: string;
  model: string;
  brand: string;
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

export function getProductBySlug(slug: string): ProductSpec | undefined {
  return vgenProducts.find((p) => p.slug === slug);
}
