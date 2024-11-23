const { chromium } = require('playwright')
const sharp = require('sharp')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // Navigate to the website
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' })

  // Wait for 6 seconds to ensure all content is fully loaded
  console.log('Waiting for the page to fully load...')
  await page.waitForTimeout(10000)

  // Measure the full scrollable dimensions of the page
  const { width, height } = await page.evaluate(() => ({
    width: document.documentElement.scrollWidth,
    height: document.documentElement.scrollHeight,
  }))

  console.log(`Page dimensions: ${width}px x ${height}px`)

  // Set a high-resolution viewport
  await page.setViewportSize({ width, height })

  // Simulate a high device pixel ratio for sharper rendering
  await page.evaluate(() => {
    Object.defineProperty(window, 'devicePixelRatio', { get: () => 3 }) // Increase pixel density
  })

  // Capture a full-page screenshot
  const screenshotPath = 'full-page.png'
  const screenshotBuffer = await page.screenshot({
    fullPage: true, // Ensures the entire scrollable content is captured
    type: 'png',
  })

  // Process the screenshot with sharp to embed 300 DPI
  const dpi = 300
  const outputFilePath = 'full-page-300dpi.png'
  await sharp(screenshotBuffer)
    .resize({
      width: width * 3, // Increase the width by 3x for higher resolution
      height: height * 3, // Proportional height scaling
    })
    .withMetadata({ density: dpi }) // Embed DPI metadata for print quality
    .toFile(outputFilePath)

  console.log(`High-quality PNG saved as ${outputFilePath}`)
  await browser.close()
})()
