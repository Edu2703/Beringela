'use strict';

const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../public/carousel');
const WIDTH = 1080;
const HEIGHT = 1920;
const TOTAL_SLIDES = 11;

const slides = [
  {
    id: '01',
    type: 'cover',
    emoji: '🇧🇷',
    title: 'O BRASIL EM NÚMEROS',
    subtitle: 'Você tem noção de como\nisso está dividido?',
    footer: 'Base: ~203 milhões de pessoas',
  },
  {
    id: '02',
    type: 'intro',
    number: '203',
    unit: 'MILHÕES',
    label: 'DE BRASILEIROS',
    subtitle: 'Mas olha como isso se divide 👇',
  },
  {
    id: '03',
    type: 'stat',
    emoji: '👶',
    category: 'Crianças',
    number: '43',
    unit: 'MILHÕES',
    percent: '21% da população',
  },
  {
    id: '04',
    type: 'stat',
    emoji: '👴',
    category: 'Aposentados',
    number: '39',
    unit: 'MILHÕES',
    percent: '19% da população',
  },
  {
    id: '05',
    type: 'stat',
    emoji: '🏛️',
    category: 'Funcionários públicos',
    number: '14',
    unit: 'MILHÕES',
    percent: '7% da população',
  },
  {
    id: '06',
    type: 'stat',
    emoji: '🧾',
    category: 'MEIs ativos',
    number: '11',
    unit: 'MILHÕES',
    percent: '5% da população',
  },
  {
    id: '07',
    type: 'stat',
    emoji: '🏪',
    category: 'Pequenas empresas',
    number: '17',
    unit: 'MILHÕES de pessoas',
    percent: '8% da população',
  },
  {
    id: '08',
    type: 'stat',
    emoji: '💰',
    category: 'Benefícios sociais',
    number: '70',
    unit: 'MILHÕES',
    percent: '34% da população',
  },
  {
    id: '09',
    type: 'summary',
    label: 'Crianças + aposentados',
    number: '82',
    unit: 'MILHÕES',
    percent: '40% do Brasil',
  },
  {
    id: '10',
    type: 'question',
    title: 'AGORA PENSA…',
    body: 'Quem sustenta\nessa conta?',
  },
  {
    id: '11',
    type: 'closing',
    line1: 'Não é sobre opinião.',
    line2: 'É sobre números.',
  },
];

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap" rel="stylesheet">`;

const BASE_CSS = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: 1080px;
    height: 1920px;
    overflow: hidden;
    background: #08090C;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  .slide {
    width: 1080px;
    height: 1920px;
    position: relative;
    background: #08090C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 80px 100px;
  }
  .top-bar {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 6px;
    background: linear-gradient(90deg, #FFD600 0%, #FFE566 50%, #FFD600 100%);
    box-shadow: 0 2px 20px rgba(255,214,0,0.7);
  }
  .slide-counter {
    position: absolute;
    bottom: 52px; right: 72px;
    font-size: 30px;
    font-weight: 400;
    color: rgba(240,240,240,0.22);
    letter-spacing: 3px;
  }
  .number-big {
    font-size: 280px;
    font-weight: 900;
    color: #FFD600;
    letter-spacing: -8px;
    line-height: 0.9;
    text-shadow:
      0 0 18px rgba(255,214,0,1.0),
      0 0 50px rgba(255,214,0,0.85),
      0 0 100px rgba(255,214,0,0.55),
      0 0 200px rgba(255,214,0,0.25);
  }
  .unit-text {
    font-size: 72px;
    font-weight: 700;
    color: #FFD600;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 8px;
    text-shadow:
      0 0 18px rgba(255,214,0,0.8),
      0 0 50px rgba(255,214,0,0.4);
  }
  .divider {
    width: 90px;
    height: 4px;
    background: #FFD600;
    border-radius: 2px;
    margin: 44px 0;
    box-shadow: 0 0 16px rgba(255,214,0,0.7), 0 0 40px rgba(255,214,0,0.3);
  }
  .glow-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,214,0,0.045) 0%, transparent 70%);
    pointer-events: none;
  }
`;

function wrapSlide(content, id) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  ${FONT_LINK}
  <style>${BASE_CSS}</style>
</head>
<body>
  <div class="slide">
    <div class="top-bar"></div>
    <div class="glow-bg"></div>
    ${content}
    <div class="slide-counter">${id} / ${TOTAL_SLIDES}</div>
  </div>
</body>
</html>`;
}

function buildCover(s) {
  return wrapSlide(`
    <div style="
      display:flex; flex-direction:column; align-items:center; text-align:center;
    ">
      <div style="font-size:108px; line-height:1; margin-bottom:52px;">${s.emoji}</div>
      <h1 style="
        font-size:86px; font-weight:900; color:#F0F0F0;
        text-transform:uppercase; letter-spacing:-1px; line-height:1.05;
        margin-bottom:44px;
      ">${s.title}</h1>
      <div class="divider"></div>
      <p style="
        font-size:50px; font-weight:400; color:rgba(240,240,240,0.6);
        line-height:1.45; white-space:pre-line; max-width:820px;
        margin-bottom:72px;
      ">${s.subtitle}</p>
      <p style="
        font-size:36px; font-weight:400; color:rgba(240,240,240,0.28);
        letter-spacing:1px;
      ">${s.footer}</p>
    </div>
  `, s.id);
}

function buildIntro(s) {
  return wrapSlide(`
    <div style="
      display:flex; flex-direction:column; align-items:center; text-align:center;
    ">
      <p style="
        font-size:40px; font-weight:700; color:rgba(240,240,240,0.45);
        text-transform:uppercase; letter-spacing:10px; margin-bottom:16px;
      ">${s.label}</p>
      <div class="number-big" style="font-size:250px; letter-spacing:-6px;">${s.number}</div>
      <div class="unit-text">${s.unit}</div>
      <div class="divider"></div>
      <p style="
        font-size:50px; font-weight:500; color:rgba(240,240,240,0.78);
        line-height:1.35;
      ">${s.subtitle}</p>
    </div>
  `, s.id);
}

function buildStat(s) {
  return wrapSlide(`
    <div style="
      display:flex; flex-direction:column; align-items:center; text-align:center;
    ">
      <div style="font-size:84px; line-height:1; margin-bottom:28px;">${s.emoji}</div>
      <p style="
        font-size:46px; font-weight:700; color:rgba(240,240,240,0.42);
        text-transform:uppercase; letter-spacing:6px; margin-bottom:16px;
      ">${s.category}</p>
      <div class="number-big">${s.number}</div>
      <div class="unit-text" style="font-size:64px; letter-spacing:3px;">${s.unit}</div>
      <div class="divider"></div>
      <p style="
        font-size:54px; font-weight:600; color:rgba(240,240,240,0.52);
      ">${s.percent}</p>
    </div>
  `, s.id);
}

function buildSummary(s) {
  return wrapSlide(`
    <div style="
      display:flex; flex-direction:column; align-items:center; text-align:center;
    ">
      <p style="
        font-size:50px; font-weight:500; color:rgba(240,240,240,0.5);
        letter-spacing:1px; margin-bottom:24px;
      ">${s.label}</p>
      <div class="number-big" style="font-size:300px; letter-spacing:-10px;">${s.number}</div>
      <div class="unit-text">${s.unit}</div>
      <div class="divider"></div>
      <p style="
        font-size:68px; font-weight:700; color:#F0F0F0;
      ">${s.percent}</p>
    </div>
  `, s.id);
}

function buildQuestion(s) {
  return wrapSlide(`
    <div style="
      display:flex; flex-direction:column; align-items:center; text-align:center;
    ">
      <h2 style="
        font-size:88px; font-weight:900; color:#F0F0F0;
        text-transform:uppercase; letter-spacing:-1px;
        margin-bottom:52px;
      ">${s.title}</h2>
      <div class="divider" style="margin-bottom:52px;"></div>
      <p style="
        font-size:76px; font-weight:700; color:#FFD600;
        line-height:1.3; white-space:pre-line;
        text-shadow:
          0 0 20px rgba(255,214,0,0.9),
          0 0 60px rgba(255,214,0,0.5),
          0 0 120px rgba(255,214,0,0.25);
      ">${s.body}</p>
    </div>
  `, s.id);
}

function buildClosing(s) {
  return wrapSlide(`
    <div style="
      display:flex; flex-direction:column; align-items:center; text-align:center;
      gap: 36px;
    ">
      <p style="
        font-size:64px; font-weight:300; font-style:italic;
        color:rgba(240,240,240,0.65); letter-spacing:-0.5px;
      ">${s.line1}</p>
      <p style="
        font-size:92px; font-weight:900; color:#FFD600;
        letter-spacing:-2px;
        text-shadow:
          0 0 18px rgba(255,214,0,1.0),
          0 0 50px rgba(255,214,0,0.8),
          0 0 100px rgba(255,214,0,0.45),
          0 0 200px rgba(255,214,0,0.2);
      ">${s.line2}</p>
    </div>
  `, s.id);
}

function buildHTML(slide) {
  switch (slide.type) {
    case 'cover':    return buildCover(slide);
    case 'intro':    return buildIntro(slide);
    case 'stat':     return buildStat(slide);
    case 'summary':  return buildSummary(slide);
    case 'question': return buildQuestion(slide);
    case 'closing':  return buildClosing(slide);
    default: throw new Error(`Unknown slide type: ${slide.type}`);
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: WIDTH, height: HEIGHT });

  // Warm up font cache
  await page.setContent(`<!DOCTYPE html><html><head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300&display=swap" rel="stylesheet">
    <style>
      body { background:#08090C; }
      span { font-family:'Inter'; font-size:1px; color:transparent; position:absolute; }
    </style>
  </head><body>
    <span style="font-weight:300;font-style:italic">x</span>
    <span style="font-weight:400">x</span>
    <span style="font-weight:600">x</span>
    <span style="font-weight:700">x</span>
    <span style="font-weight:900">x</span>
  </body></html>`, { waitUntil: 'networkidle' });

  console.log('Fonts ready. Generating slides…\n');

  for (const slide of slides) {
    const html = buildHTML(slide);
    await page.setContent(html, { waitUntil: 'load' });

    const buffer = await page.screenshot({ type: 'png', fullPage: false });

    const w = buffer.readUInt32BE(16);
    const h = buffer.readUInt32BE(20);
    if (w !== WIDTH || h !== HEIGHT) {
      throw new Error(`slide-${slide.id}: got ${w}×${h}, expected ${WIDTH}×${HEIGHT}`);
    }

    const filename = `slide-${slide.id}.png`;
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), buffer);
    console.log(`  ✓  ${filename}   ${Math.round(buffer.length / 1024)} KB`);
  }

  await browser.close();
  console.log(`\nAll ${slides.length} slides → ${OUTPUT_DIR}`);
}

main().catch((err) => {
  console.error('\n✗', err.message);
  process.exit(1);
});
