const puppeteer = require('puppeteer')
const sharp = require('sharp')

;(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    })

    const page = await browser.newPage()

    // Force light mode
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }])

    // Set an ultra-high-resolution viewport
    const width = 3840 // 4K resolution width
    const height = 2160 // 4K resolution height
    await page.setViewport({
      width: width,
      height: height,
      deviceScaleFactor: 3, // Render at 3x resolution for extreme sharpness
    })

    // Navigate to the page
    console.log('Navigating to the page...')
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle2',
    })

    // Wait for 5 seconds for all content to load
    console.log('Waiting for 5 seconds to ensure full page load...')
    await new Promise(resolve => setTimeout(resolve, 5000))

    // Optionally target specific content (e.g., "main") for precision
    const contentElement = await page.$('main') // Adjust the selector if needed
    if (!contentElement) {
      throw new Error('Main content element not found!')
    }

    console.log('Taking screenshot...')
    const screenshotBuffer = await contentElement.screenshot() // Capture only the main content

    // Use Sharp to ensure pristine quality and set high resolution
    const outputFile = 'home-dark-4k.png'
    await sharp(screenshotBuffer)
      .resize({
        width: 3840 * 3, // Triple the resolution for extra clarity
        height: 2160 * 3,
        fit: 'contain',
      })
      .withMetadata({ density: 300 }) // Embed 300 DPI metadata
      .toFile(outputFile)

    console.log(`Screenshot saved as ${outputFile} with enhanced clarity and 4K resolution`)
    await browser.close()
  } catch (error) {
    console.error('Error while capturing the screenshot:', error)
  }
})()
