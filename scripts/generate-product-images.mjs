import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const products = [
  ["chain-link", "Chain Link", "mesh"],
  ["twisted-chain-link", "Twisted Chain Link", "mesh"],
  ["pvc-chainlink", "PVC Chainlink", "green-mesh"],
  ["barbed-wire", "Barbed Wire", "wire"],
  ["pvc-barbed-wire", "PVC Barbed Wire", "green-wire"],
  ["concertina-coil", "Concertina Coil", "coil"],
  ["razor-wire", "Razor Wire", "razor"],
  ["welded-mesh", "Welded Mesh", "grid"],
  ["green-mesh", "Green Mesh", "green-grid"],
  ["steel-angle", "Steel Angle", "angle"],
  ["l-angle", "L Angle", "angle"],
  ["y-angle", "Y Angle", "y-angle"],
  ["cement-post", "Cement Post", "post"],
  ["bend-post", "Bend Post", "bend"],
  ["white-stone", "White Stone", "white-stone"],
  ["black-stone", "Black Stone", "black-stone"],
  ["fiber-stumph", "Fiber Stumph", "stump"],
  ["lactic-sheet", "Lactic Sheet", "sheet"],
];

function pattern(kind) {
  if (kind.includes("mesh")) {
    const stroke = kind.startsWith("green") ? "#5f8a3b" : "#536150";
    return `
      <g stroke="${stroke}" stroke-width="8" fill="none" opacity="0.9">
        ${Array.from({ length: 12 }, (_, i) => `<path d="M${i * 115 - 260} 780 L${i * 115 + 210} 310 L${i * 115 + 680} 780" />`).join("")}
        ${Array.from({ length: 12 }, (_, i) => `<path d="M${i * 115 - 260} 120 L${i * 115 + 210} 590 L${i * 115 + 680} 120" />`).join("")}
      </g>`;
  }

  if (kind.includes("wire") || kind === "razor") {
    const stroke = kind.startsWith("green") ? "#5f8a3b" : "#313b34";
    return `
      <g stroke="${stroke}" stroke-width="10" fill="none">
        <path d="M120 470 C280 360 430 580 600 470 S920 580 1080 470" />
        <path d="M120 560 C280 450 430 670 600 560 S920 670 1080 560" opacity="0.65" />
      </g>
      <g fill="${stroke}">
        ${Array.from({ length: 10 }, (_, i) => `<path d="M${160 + i * 95} 438 l28 34 l-42 7 z" />`).join("")}
        ${Array.from({ length: 9 }, (_, i) => `<path d="M${210 + i * 98} 530 l32 35 l-45 8 z" opacity="0.75" />`).join("")}
      </g>`;
  }

  if (kind === "coil") {
    return `
      <g stroke="#323b34" stroke-width="9" fill="none">
        ${Array.from({ length: 8 }, (_, i) => `<ellipse cx="${260 + i * 95}" cy="500" rx="118" ry="190" />`).join("")}
      </g>`;
  }

  if (kind.includes("grid")) {
    const stroke = kind.startsWith("green") ? "#5f8a3b" : "#4d5b50";
    return `
      <g stroke="${stroke}" stroke-width="8">
        ${Array.from({ length: 8 }, (_, i) => `<line x1="${180 + i * 120}" y1="230" x2="${180 + i * 120}" y2="710" />`).join("")}
        ${Array.from({ length: 6 }, (_, i) => `<line x1="140" y1="${250 + i * 85}" x2="1060" y2="${250 + i * 85}" />`).join("")}
      </g>`;
  }

  if (kind.includes("angle")) {
    const points =
      kind === "y-angle"
        ? "600,210 655,520 830,710 735,710 600,570 465,710 370,710 545,520"
        : "360,250 520,250 520,610 850,610 850,750 360,750";
    return `<polygon points="${points}" fill="#52605a" stroke="#27302b" stroke-width="14" />`;
  }

  if (kind === "post" || kind === "bend") {
    return `
      <rect x="520" y="210" width="160" height="560" rx="28" fill="#d8d5cc" stroke="#8f8a7d" stroke-width="14" />
      ${kind === "bend" ? '<path d="M600 210 C660 280 705 360 720 455" stroke="#52605a" stroke-width="50" fill="none" stroke-linecap="round" />' : ""}
    `;
  }

  if (kind.includes("stone")) {
    const fill = kind.startsWith("white") ? "#e9e8df" : "#222523";
    const stroke = kind.startsWith("white") ? "#b8b5aa" : "#555b55";
    return `
      <g fill="${fill}" stroke="${stroke}" stroke-width="7">
        ${Array.from({ length: 18 }, (_, i) => `<ellipse cx="${170 + (i % 6) * 170}" cy="${330 + Math.floor(i / 6) * 130}" rx="${70 + (i % 3) * 8}" ry="${42 + (i % 4) * 5}" />`).join("")}
      </g>`;
  }

  if (kind === "sheet") {
    return `<path d="M270 270 H930 V700 H270 Z" fill="#dce5da" stroke="#7d8b7f" stroke-width="14" /><path d="M300 330 H900 M300 420 H900 M300 510 H900 M300 600 H900" stroke="#a8b7aa" stroke-width="8" />`;
  }

  return `<rect x="390" y="260" width="420" height="460" rx="42" fill="#617451" />`;
}

await mkdir("public/products", { recursive: true });

for (const [slug, title, kind] of products) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#f8faf7" />
          <stop offset="1" stop-color="#dce8ce" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <circle cx="965" cy="170" r="230" fill="#cfe0bd" opacity="0.65" />
      <rect x="82" y="92" width="1036" height="716" rx="46" fill="none" stroke="#d1dec8" stroke-width="4" />
      ${pattern(kind)}
      <rect x="90" y="705" width="1020" height="120" rx="30" fill="#172118" opacity="0.92" />
      <text x="130" y="770" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="800">${title}</text>
      <text x="130" y="807" fill="#b6db6b" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="5">NAVI FENCING PRODUCT</text>
    </svg>`;

  await sharp(Buffer.from(svg)).png().toFile(`public/products/${slug}.png`);
}
