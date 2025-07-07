const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

const validExts = ['.jpg', '.jpeg', '.png'];

fs.readdirSync(imagesDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!validExts.includes(ext)) return;
  const filePath = path.join(imagesDir, file);
  const baseName = path.basename(file, ext);

  // WebP
  const webpPath = path.join(imagesDir, baseName + '.webp');
  if (!fs.existsSync(webpPath)) {
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath)
      .then(() => console.log(`Created: ${webpPath}`))
      .catch(err => console.error(`Error creating WebP for ${file}:`, err));
  }

  // Optimized JPEG
  const jpegPath = path.join(imagesDir, baseName + '-optimized.jpg');
  if (!fs.existsSync(jpegPath)) {
    sharp(filePath)
      .jpeg({ quality: 75, mozjpeg: true })
      .toFile(jpegPath)
      .then(() => console.log(`Created: ${jpegPath}`))
      .catch(err => console.error(`Error creating optimized JPEG for ${file}:`, err));
  }
}); 