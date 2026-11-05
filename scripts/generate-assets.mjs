import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
fs.mkdirSync(outputDir, { recursive: true });

const ASSETS = [
  {
    name: 'machine-silent.webp',
    title: 'SILENT CANOPY GENERATOR',
    sub: '10 kVA – 500 kVA | Low Noise &lt; 68 dB',
    bg: '#0F1E2E',
    accent: '#F5B82E',
    icon: `<rect x="180" y="160" width="440" height="240" rx="20" fill="#1A2D42" stroke="#F5B82E" stroke-width="6"/>
           <rect x="220" y="200" width="120" height="160" rx="10" fill="#101C2B" stroke="#64748B" stroke-width="3"/>
           <line x1="240" y1="230" x2="320" y2="230" stroke="#64748B" stroke-width="4"/>
           <line x1="240" y1="260" x2="320" y2="260" stroke="#64748B" stroke-width="4"/>
           <line x1="240" y1="290" x2="320" y2="290" stroke="#64748B" stroke-width="4"/>
           <line x1="240" y1="320" x2="320" y2="320" stroke="#64748B" stroke-width="4"/>
           <circle cx="530" cy="240" r="35" fill="#101C2B" stroke="#F5B82E" stroke-width="4"/>
           <path d="M530 220 L530 260 M510 240 L550 240" stroke="#F5B82E" stroke-width="3"/>
           <rect x="370" y="200" width="100" height="70" rx="6" fill="#101C2B" stroke="#00E5FF" stroke-width="2"/>
           <text x="385" y="240" fill="#00E5FF" font-family="sans-serif" font-weight="bold" font-size="16">DSE-7320</text>
           <rect x="160" y="400" width="480" height="30" rx="6" fill="#0B131E"/>`
  },
  {
    name: 'machine-diesel.webp',
    title: 'HEAVY INDUSTRIAL DIESEL RIG',
    sub: '500 kVA – 2.000 kVA | Heavy Duty Continuous',
    bg: '#121820',
    accent: '#F5B82E',
    icon: `<rect x="160" y="220" width="300" height="180" rx="12" fill="#1E293B" stroke="#94A3B8" stroke-width="5"/>
           <circle cx="230" cy="310" r="45" fill="#0F172A" stroke="#F5B82E" stroke-width="4"/>
           <circle cx="370" cy="310" r="45" fill="#0F172A" stroke="#F5B82E" stroke-width="4"/>
           <rect x="460" y="200" width="180" height="200" rx="16" fill="#0F172A" stroke="#38BDF8" stroke-width="6"/>
           <rect x="490" y="230" width="120" height="60" rx="6" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
           <text x="505" y="265" fill="#38BDF8" font-family="sans-serif" font-weight="bold" font-size="14">STAMFORD</text>
           <rect x="140" y="400" width="520" height="30" rx="6" fill="#0B131E"/>
           <path d="M280 160 L350 160 L360 220 L270 220 Z" fill="#F5B82E"/>`
  },
  {
    name: 'machine-portable.webp',
    title: 'PORTABLE COMPACT GENERATOR',
    sub: '1 kVA – 10 kVA | Gasoline &amp; Small Diesel',
    bg: '#141D28',
    accent: '#F5B82E',
    icon: `<rect x="220" y="180" width="360" height="220" rx="16" fill="none" stroke="#F5B82E" stroke-width="8"/>
           <rect x="260" y="210" width="180" height="150" rx="8" fill="#1E293B" stroke="#64748B" stroke-width="3"/>
           <rect x="460" y="210" width="100" height="150" rx="8" fill="#0F172A" stroke="#94A3B8" stroke-width="3"/>
           <circle cx="260" cy="400" r="30" fill="#0F172A" stroke="#64748B" stroke-width="6"/>
           <circle cx="540" cy="400" r="30" fill="#0F172A" stroke="#64748B" stroke-width="6"/>
           <rect x="300" y="150" width="200" height="30" rx="8" fill="#F5B82E"/>`
  },
  {
    name: 'machine-opentype.webp',
    title: 'OPEN TYPE POWER GENERATOR',
    sub: '20 kVA – 2.000 kVA | Power House Plant',
    bg: '#0F1A26',
    accent: '#38BDF8',
    icon: `<rect x="180" y="200" width="440" height="200" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="4"/>
           <rect x="200" y="160" width="120" height="70" rx="6" fill="#0F172A" stroke="#F5B82E" stroke-width="4"/>
           <line x1="220" y1="185" x2="300" y2="185" stroke="#F5B82E" stroke-width="4"/>
           <rect x="460" y="220" width="140" height="150" rx="10" fill="#0F172A" stroke="#94A3B8" stroke-width="4"/>
           <circle cx="380" cy="300" r="50" fill="#0F172A" stroke="#F5B82E" stroke-width="5"/>
           <rect x="150" y="400" width="500" height="30" rx="6" fill="#0B131E"/>`
  },
  {
    name: 'machine-trailer.webp',
    title: 'MOBILE TRAILER GENERATOR',
    sub: '25 kVA – 250 kVA | Heavy Duty Mobility',
    bg: '#101B27',
    accent: '#F5B82E',
    icon: `<rect x="200" y="170" width="380" height="210" rx="16" fill="#1A2D42" stroke="#F5B82E" stroke-width="5"/>
           <circle cx="280" cy="390" r="40" fill="#0F172A" stroke="#94A3B8" stroke-width="8"/>
           <circle cx="500" cy="390" r="40" fill="#0F172A" stroke="#94A3B8" stroke-width="8"/>
           <path d="M120 370 L200 370 L200 390 L120 390 Z" fill="#F5B82E"/>
           <circle cx="120" cy="380" r="14" fill="#0F172A" stroke="#F5B82E" stroke-width="4"/>`
  },
  {
    name: 'machine-ats.webp',
    title: 'PANEL ATS-AMF &amp; SYNCHRONIZING',
    sub: 'Auto Transfer Switch 100A – 4.000A',
    bg: '#0D1722',
    accent: '#F5B82E',
    icon: `<rect x="240" y="140" width="320" height="280" rx="12" fill="#1E293B" stroke="#F5B82E" stroke-width="6"/>
           <rect x="270" y="170" width="260" height="70" rx="6" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
           <text x="290" y="210" fill="#00E5FF" font-family="sans-serif" font-weight="bold" font-size="18">AUTO STATUS: OK</text>
           <circle cx="310" cy="290" r="22" fill="#EF4444"/>
           <circle cx="400" cy="290" r="22" fill="#F5B82E"/>
           <circle cx="490" cy="290" r="22" fill="#10B981"/>
           <rect x="350" y="340" width="100" height="50" rx="8" fill="#0F172A" stroke="#94A3B8" stroke-width="3"/>`
  },
  {
    name: 'machine-loadbank.webp',
    title: 'LOAD BANK TESTING FACILITY',
    sub: 'Uji Beban Penuh 100 kW – 2.000 kW',
    bg: '#111A24',
    accent: '#F5B82E',
    icon: `<rect x="200" y="160" width="400" height="230" rx="14" fill="#1E293B" stroke="#EF4444" stroke-width="5"/>
           <circle cx="300" cy="275" r="45" fill="#0F172A" stroke="#F5B82E" stroke-width="4"/>
           <circle cx="500" cy="275" r="45" fill="#0F172A" stroke="#F5B82E" stroke-width="4"/>
           <text x="260" y="280" fill="#F5B82E" font-family="sans-serif" font-weight="bold" font-size="14">FAN 1</text>
           <text x="460" y="280" fill="#F5B82E" font-family="sans-serif" font-weight="bold" font-size="14">FAN 2</text>
           <rect x="360" y="190" width="80" height="170" rx="6" fill="#0F172A" stroke="#94A3B8" stroke-width="2"/>`
  },
  {
    name: 'before-blackout.webp',
    title: 'TANPA GENSET / PEMADAMAN LISTRIK',
    sub: 'Produksi Terhenti • Server Down • Kerugian Finansial',
    bg: '#181111',
    accent: '#EF4444',
    icon: `<rect x="200" y="160" width="400" height="240" rx="12" fill="#201515" stroke="#EF4444" stroke-width="4"/>
           <text x="280" y="270" fill="#EF4444" font-family="sans-serif" font-weight="900" font-size="42">BLACKOUT</text>
           <path d="M380 180 L360 220 L400 220 L370 260" stroke="#EF4444" stroke-width="4" fill="none"/>
           <text x="240" y="330" fill="#991B1B" font-family="sans-serif" font-weight="bold" font-size="16">Sistem Mati • Kerugian Operasional Tinggi</text>`
  },
  {
    name: 'after-gensetora.webp',
    title: 'DENGAN GENSETORA POWER SOLUTIONS',
    sub: 'Listrik Stabil 100% • ATS 5 Detik Otomatis Nyala',
    bg: '#0F231D',
    accent: '#10B981',
    icon: `<rect x="200" y="160" width="400" height="240" rx="12" fill="#0D2E24" stroke="#10B981" stroke-width="5"/>
           <path d="M410 190 L380 250 L420 250 L390 310 Z" fill="#F5B82E"/>
           <text x="260" y="340" fill="#34D399" font-family="sans-serif" font-weight="bold" font-size="18">100% KONTINUITAS DAYA AKTIF</text>
           <circle cx="300" cy="220" r="15" fill="#10B981"/>
           <text x="325" y="225" fill="#A7F3D0" font-family="sans-serif" font-size="14">ATS Ready</text>`
  }
];

async function generateAll() {
  for (const item of ASSETS) {
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${item.bg}"/>
          <stop offset="100%" stop-color="#080D14"/>
        </linearGradient>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="800" height="500" fill="url(#bgGrad)"/>
      <rect width="800" height="500" fill="url(#grid)"/>

      <!-- Icon Visual Graphic -->
      <g>
        ${item.icon}
      </g>

      <!-- Label Bottom Strip -->
      <rect x="40" y="420" width="720" height="60" rx="10" fill="rgba(16,28,43,0.85)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="60" y="445" fill="${item.accent}" font-family="sans-serif" font-weight="900" font-size="14" letter-spacing="2">${item.title}</text>
      <text x="60" y="465" fill="#94A3B8" font-family="sans-serif" font-size="12">${item.sub}</text>

      <!-- Badge Top Right -->
      <rect x="630" y="30" width="130" height="30" rx="15" fill="rgba(245,184,46,0.15)" stroke="#F5B82E" stroke-width="1"/>
      <text x="650" y="50" fill="#F5B82E" font-family="sans-serif" font-weight="bold" font-size="11" letter-spacing="1">GENSETORA</text>
    </svg>`;

    const dest = path.join(outputDir, item.name);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(dest);
    console.log(`Created ${item.name}`);
  }
}

generateAll().then(() => console.log('All image assets created successfully!'));
