/**
 * Extract text from a PDF into docs/content-from-pdf.md for the agentified V1 workflow.
 * Usage: node scripts/extract-pdf-text.js [path/to/your.pdf]
 * Default: content/site-content.pdf (create that folder and add your PDF if you use default)
 */

const fs = require("fs");
const path = require("path");

const pdfPath = process.argv[2] || path.join(__dirname, "../content/site-content.pdf");
const outPath = path.join(__dirname, "../docs/content-from-pdf.md");

if (!fs.existsSync(pdfPath)) {
  console.error("PDF not found:", pdfPath);
  console.error("Usage: node scripts/extract-pdf-text.js <path-to-pdf>");
  process.exit(1);
}

async function run() {
  let pdf;
  try {
    pdf = require("pdf-parse");
  } catch (e) {
    console.error("Missing dependency. Run: npm install pdf-parse");
    process.exit(1);
  }

  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  const content = `# Content extracted from PDF\n\n${data.text}`;
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content, "utf8");
  console.log(`Extracted ${data.numpages} page(s) to ${outPath}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
