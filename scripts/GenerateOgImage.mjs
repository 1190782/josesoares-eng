/**
 * Renders the Open Graph preview card to public/og-image.png.
 *
 * Run with: node scripts/GenerateOgImage.mjs
 *
 * This is a one-off generator rather than a build step: the image only changes
 * when the branding does, so committing the PNG keeps builds fast and keeps
 * sharp out of the deploy path.
 */

import { writeFileSync } from "node:fs";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

const NAVY = "#24323f";
const BRASS = "#e0b36a";
const PAPER = "#faf9f6";
const MUTED = "#a6b7c4";

// Segoe UI is present on Windows and is a close stand-in for the Jost used on
// the site; the card is only ever seen as a thumbnail.
const STACK = "Segoe UI, Helvetica Neue, Arial, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${NAVY}"/>

  <g stroke="${BRASS}" stroke-width="5" opacity="0.85" fill="none">
    <line x1="1005" y1="-20" x2="1240" y2="215"/>
    <line x1="1055" y1="-20" x2="1290" y2="215"/>
    <line x1="1105" y1="-20" x2="1340" y2="215"/>
    <line x1="-40" y1="430" x2="180" y2="650"/>
    <line x1="-40" y1="480" x2="130" y2="650"/>
  </g>

  <rect x="0" y="${HEIGHT - 14}" width="${WIDTH}" height="14" fill="${BRASS}"/>

  <text x="90" y="182" fill="${BRASS}" font-family="${STACK}" font-size="26"
        font-weight="600" letter-spacing="7">ENGENHEIRO DE SOFTWARE, PORTO</text>

  <text x="90" y="290" fill="${PAPER}" font-family="${STACK}" font-size="76"
        font-weight="600" letter-spacing="12">JOSÉ SOARES</text>

  <text x="90" y="382" fill="${PAPER}" font-family="${STACK}" font-size="40"
        font-weight="400">Sites e aplicações para pequenos negócios</text>

  <text x="90" y="472" fill="${MUTED}" font-family="${STACK}" font-size="27"
        font-weight="400">Websites · Lojas online · Sistemas de reservas</text>
  <text x="90" y="516" fill="${MUTED}" font-family="${STACK}" font-size="27"
        font-weight="400">Menus digitais com QR code · Aplicações de gestão</text>

  <text x="90" y="586" fill="${BRASS}" font-family="${STACK}" font-size="24"
        font-weight="600" letter-spacing="3">josesoares-eng.com</text>
</svg>`;

const buffer = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync("public/og-image.png", buffer);

const meta = await sharp(buffer).metadata();
console.log(`public/og-image.png written: ${meta.width}x${meta.height}, ${Math.round(buffer.length / 1024)} KB`);
