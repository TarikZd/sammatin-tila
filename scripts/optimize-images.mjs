import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { join, parse } from 'path';

const RAW_DIR = 'assets/raw';
const OUT_DIR = 'public/images';

const SIZES = [480, 768, 1024, 1920];
const PLACEHOLDER_SIZE = 32;
const WEBP_QUALITY = 82;

if (!existsSync(RAW_DIR)) {
  console.error(`Error: ${RAW_DIR} does not exist`);
  process.exit(1);
}

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const files = readdirSync(RAW_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Found ${files.length} images to process\n`);

for (const file of files) {
  const inputPath = join(RAW_DIR, file);
  const name = parse(file).name;

  console.log(`Processing: ${file}`);

  // Generate blurred placeholder (32px WebP)
  const placeholderPath = join(OUT_DIR, `${name}-placeholder.webp`);
  await sharp(inputPath)
    .resize(PLACEHOLDER_SIZE, PLACEHOLDER_SIZE, { fit: 'inside' })
    .webp({ quality: 20 })
    .toFile(placeholderPath);
  console.log(`  -> placeholder: ${name}-placeholder.webp`);

  // Generate full-size WebP
  const fullPath = join(OUT_DIR, `${name}.webp`);
  await sharp(inputPath).webp({ quality: WEBP_QUALITY }).toFile(fullPath);
  const meta = await sharp(fullPath).metadata();
  console.log(`  -> ${name}.webp (${meta.width}x${meta.height})`);

  // Generate responsive sizes (only for images large enough)
  for (const width of SIZES) {
    if (width >= meta.width || width === 1920) continue;

    const outputPath = join(OUT_DIR, `${name}-${width}.webp`);
    await sharp(inputPath)
      .resize(width, undefined, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    console.log(`  -> ${name}-${width}.webp (${width}w)`);
  }

  console.log('');
}

console.log('Done!');
