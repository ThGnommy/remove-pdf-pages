import fs from "fs";
import { PDFDocument } from "pdf-lib";

const pagesArray = [];

const removePDFPages = async (inputString, outputString, pagesToRemove) => {
  const pdf = fs.readFileSync(inputString);
  const pdfDoc = await PDFDocument.load(pdf);

  // Error handling
  const pageDoenstExist = pagesArray.some(
    (pageNumber) => pageNumber > pdfDoc.getPageCount()
  );
  const includesZero = pagesArray.includes(0);

  if (pageDoenstExist || includesZero)
    throw new Error("A page number you want to delete doens't exist.");

  // Now remove all the pages number present in the array
  pagesToRemove.forEach((pageN, idx) => {
    // Since the index start from zero, we need to subtract the current index to take track how many pages has been deleted previously
    if (idx === 0) pageN = pageN - 1;
    else pageN = pageN - 1 - idx;

    pdfDoc.removePage(pageN);
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputString, pdfBytes);
};

removePDFPages("input_file.pdf", "output_file.pdf", pagesArray);
