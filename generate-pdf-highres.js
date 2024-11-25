const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null, // Ensure full viewport rendering
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()

  // Navigate to the target page
  await page.goto('http://localhost:3000/', {
    waitUntil: 'networkidle0', // Ensures all network requests are complete
  })

  // Set to light mode explicitly (if applicable)
  await page.evaluate(() => {
    localStorage.setItem('vite-ui-theme', 'light') // Force light mode
    const event = new Event('storage')
    window.dispatchEvent(event) // Trigger a theme change
  })

  // Wait for the page to update to light mode
  await new Promise(resolve => setTimeout(resolve, 2000)) // Replace waitForTimeout

  // Wait for the main content to load fully
  await new Promise(resolve => setTimeout(resolve, 10000)) // Extra buffer for rendering dynamic content

  // Define A0 dimensions in inches (300 DPI):
  const A0_WIDTH = 33.1 // Inches
  const A0_HEIGHT = 46.8 // Inches
  const DPI = 300 // Target DPI

  // Calculate pixel dimensions for A0 at 300 DPI
  const PIXEL_WIDTH = Math.round(A0_WIDTH * DPI) // ~9930px
  const PIXEL_HEIGHT = Math.round(A0_HEIGHT * DPI) // ~14040px

  // Set the viewport to match A0 dimensions at 300 DPI
  await page.setViewport({
    width: PIXEL_WIDTH,
    height: PIXEL_HEIGHT,
  })

  // Generate the PDF
  await page.pdf({
    path: 'poster-a0-high-quality.pdf',
    printBackground: true, // Include backgrounds
    width: `${PIXEL_WIDTH}px`, // Exact width in pixels
    height: `${PIXEL_HEIGHT}px`, // Exact height in pixels
    scale: 1, // Preserve high quality
    pageRanges: '1', // Ensure a single-page output
  })

  console.log('PDF successfully generated: poster-a0-high-quality.pdf')

  await browser.close()
})()
