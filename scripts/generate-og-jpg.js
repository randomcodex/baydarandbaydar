import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const srcPngPath = path.join(process.cwd(), 'public', 'og.png')
const dstJpgPath = path.join(process.cwd(), 'public', 'og.jpg')

async function run() {
  try {
    if (!fs.existsSync(srcPngPath)) {
      console.log('[generate-og-jpg] public/og.png not found; skipping')
      return
    }

    const buffer = fs.readFileSync(srcPngPath)
    const image = sharp(buffer)

    const metadata = await image.metadata()
    const targetWidth = 1200
    const targetHeight = 630

    const resized = await image
      .resize(targetWidth, targetHeight, { fit: 'cover' })
      .jpeg({ quality: 85, chromaSubsampling: '4:2:0' })
      .toBuffer()

    fs.writeFileSync(dstJpgPath, resized)
    console.log(`[generate-og-jpg] Wrote ${dstJpgPath} (${targetWidth}x${targetHeight}) from og.png`)
  } catch (err) {
    console.error('[generate-og-jpg] Error generating og.jpg:', err)
    process.exitCode = 0
  }
}

run()
