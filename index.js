import fs from "fs";
import { PDFDocument } from "pdf-lib";

const pagesArray = [
  7, 8, 12, 16, 17, 21, 22, 23, 27, 28, 32, 36, 37, 41, 42, 43, 44, 45, 57, 58,
  59, 60, 61, 68, 69, 70, 82, 83, 84, 85, 86, 87, 90, 94, 95, 96, 120, 124,
];

const removePDFPages = async (inputString, outputString, pagesToRemove) => {
  const pdf = fs.readFileSync(inputString);
  const pdfDoc = await PDFDocument.load(pdf);

  pagesToRemove.forEach((pageN, idx) => {
    if (idx === 0) pageN = pageN - 1;
    else pageN = pageN - 1 - idx;

    pdfDoc.removePage(pageN);
  });

  const pdfBytes = await pdfDoc.save();

  fs.writeFileSync(outputString, pdfBytes);
};

removePDFPages("input_file.pdf", "output_file.pdf", pagesArray);
