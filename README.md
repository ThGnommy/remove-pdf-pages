# remove-pdf-pages

### Simple node script for deleting pages from a pdf file

---

## How to use

### 1. Download the repository

### 2. run `npm install` in the project dirctory

### 3. Copy the PDF file inside the project directory

### 4. Edit the constant variable `pagesArray` by putting the PDF pages number you want to delete in the array

- #### Example: `const pagesArray = [1, 2, 4]`

### 5. In the function call 👇

`removePDFPages("input_file.pdf", "output_file.pdf", pagesArray);`

Modify the `input_file.pdf` string with the PDF's name you want to modify, then edit the `output_file.pdf` string as you wish

### 6. run `node index.js`

## 🙃 Enjoy your new PDF
