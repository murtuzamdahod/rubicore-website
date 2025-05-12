import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET() {
  let browser;
  try {
    // Launch Puppeteer
    // Note: Consider Puppeteer-core and managing browser downloads/paths for production
    browser = await puppeteer.launch({ 
      headless: true, 
      // Optional: args for environments like Docker/serverless
      // args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();

    // Construct the full URL to the whitepaper page
    // Ensure the base URL is correct for your environment (e.g., from env vars)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'; 
    const whitepaperUrl = `${baseUrl}/resources/whitepapers/achieving-roi-with-ai-agents-whitepaper`;

    // Navigate to the page
    // Increased timeout and using networkidle0 for better rendering capture
    await page.goto(whitepaperUrl, { waitUntil: 'networkidle0', timeout: 60000 }); 

    // Optional: Wait for specific elements if dynamic content loading is slow
    // await page.waitForSelector('.some-critical-element');

    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true, // Crucial for capturing styles
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      },
      // Consider adding page numbers, headers/footers if needed
      // displayHeaderFooter: true,
      // headerTemplate: '<div></div>', // Empty to remove default header
      // footerTemplate: '<div style="font-size:10px; margin: 0 auto;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
    });

    await browser.close(); // Ensure browser is closed even on success

    // Create the response with PDF content and headers
    const response = new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        // Suggest a filename for the download
        'Content-Disposition': 'attachment; filename="RubiCore-Achieving-ROI-with-AI-Agents.pdf"',
      },
    });

    return response;

  } catch (error) {
    console.error('Error generating PDF:', error);
    // Ensure browser is closed in case of error
    if (browser) {
      try {
        await browser.close();
      } catch (closeError) {
        console.error('Error closing browser after PDF generation error:', closeError);
      }
    }
    // Return a standard error response
    return new NextResponse(JSON.stringify({ error: 'Failed to generate PDF.', details: error instanceof Error ? error.message : String(error) }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
     });
  }
}
