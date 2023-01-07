const express = require("express")
const fileUpload = require("express-fileupload");
const PdfController = require("../controller/controller")

const pdfRouter = express.Router()
const pdfController = new PdfController

pdfRouter.get("/PDFs", (req, res) => pdfController.getPdf(req, res));

pdfRouter.post("/PDFs", fileUpload({createParentPath: true}),(req, res) =>
pdfController.addPdf(req,res))

module.exports = pdfRouter