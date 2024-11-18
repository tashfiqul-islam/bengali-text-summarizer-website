const { chromium } = require('playwright')
const sharp = require('sharp')

;(async () => {
  try {
    const browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()

    // Force light mode explicitly
    await page.emulateMedia({ colorScheme: 'light' })
    await page.addInitScript(() => {
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.classList.remove('dark')
    })

    // Set viewport to maintain consistent layout
    const viewportWidth = 2560 // Fixed viewport width
    const viewportHeight = 1305 // Fixed viewport height
    await page.setViewportSize({ width: viewportWidth, height: viewportHeight })

    console.log('Navigating to the page...')
    await page.goto('http://localhost:3000/project-dashboard', { waitUntil: 'networkidle' })

    // Optional wait to ensure all dynamic content is rendered
    console.log('Waiting for the page to fully load...')
    await page.waitForTimeout(7000)

    // Temporarily adjust styles for fixed elements
    console.log('Adjusting styles for fixed elements...')
    await page.evaluate(() => {
      const fixedElements = document.querySelectorAll('header, nav')
      fixedElements.forEach(el => {
        el.style.position = 'static' // Prevent fixed elements from breaking layout
      })
    })

    // Take full-page screenshot
    console.log('Taking a high-quality full-page screenshot...')
    const fullPageScreenshotBuffer = await page.screenshot({
      fullPage: true, // Capture the entire scrollable page
      type: 'png', // PNG for lossless quality
    })

    console.log('Processing screenshot for 600 DPI scaling...')
    const outputFile = 'project-dashboard-600dpi-full-page.png'

    const scalingFactor = 5 // 5x scaling for sharpness
    const dpi = 600 // DPI for print quality

    // Use Sharp to upscale the screenshot for 600 DPI
    await sharp(fullPageScreenshotBuffer)
      .resize({
        width: viewportWidth * scalingFactor, // Scale the width by factor
        height: null, // Auto-scale height to maintain aspect ratio
        fit: 'contain',
      })
      .withMetadata({ density: dpi }) // Embed 600 DPI for print readiness
      .toFile(outputFile)

    console.log(`Full-page 600 DPI scaled screenshot saved as ${outputFile}`)

    // Reset styles for fixed elements (optional)
    await page.evaluate(() => {
      const fixedElements = document.querySelectorAll('header, nav')
      fixedElements.forEach(el => {
        el.style.position = '' // Reset back to original styles
      })
    })

    await browser.close()
  } catch (error) {
    console.error('Error while capturing the screenshot:', error)
  }
})()
