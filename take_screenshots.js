const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  path.join(process.env.LOCALAPPDATA || '', 'Google\\Chrome\\Application\\chrome.exe'),
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
];

function getExecutablePath() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) {
      console.log(`Using browser found at: ${p}`);
      return p;
    }
  }
  throw new Error('Chrome or Edge browser executable not found. Please install Chrome or Edge.');
}

const pageNames = [
  "1_Front_Cover",
  "2_About_Me",
  "3_Experience",
  "4_Projects",
  "5_Research_Paper",
  "6_Certifications",
  "7_Skills",
  "8_Classifieds"
];

async function capture() {
  const executablePath = getExecutablePath();
  const outputDir = path.join(__dirname, 'screenshots');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  console.log(`Screenshots will be saved to: ${outputDir}`);

  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // High quality screen viewport for LinkedIn posts
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 2 // Retains sharp, high-res text scaling
  });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  console.log('Waiting for Vintage Loader (5 seconds)...');
  await new Promise(r => setTimeout(r, 5000));

  for (let i = 0; i < pageNames.length; i++) {
    const filename = `page_${pageNames[i]}.png`;
    const outputPath = path.join(outputDir, filename);
    
    console.log(`Capturing ${filename}...`);
    await page.screenshot({ path: outputPath, fullPage: false });
    console.log(`Saved screenshot to ${outputPath}`);

    if (i < pageNames.length - 1) {
      console.log('Navigating to next page...');
      
      // Click next page button
      const nextBtn = await page.$('#page-next');
      if (nextBtn) {
        await nextBtn.click();
      } else {
        console.log('Error: #page-next button not found! Falling back to page dots.');
        const dotBtn = await page.$(`#page-dot-${i + 1}`);
        if (dotBtn) {
          await dotBtn.click();
        } else {
          console.log(`Could not find next button or dot button for page index ${i + 1}`);
          break;
        }
      }
      
      // Wait for flip transition to finish
      await new Promise(r => setTimeout(r, 2200));
    }
  }

  await browser.close();
  console.log('Browser closed. Screenshots finished successfully!');
}

capture().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
