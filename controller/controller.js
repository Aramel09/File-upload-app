const pdfService = require("../service/service")
const path = require("path");


class pdfController {
    constructor(){
        this.pdfService = new pdfService()
    }

    async getPdf(req, res) {
        try {
            const data = await this.pdfService.getPdf()
            res.status(200).send(data)
        } catch (e) {
            console.log(e);
            res.status(500).send("ERROR!");
        }
    }

    async addPdf(req, res) {
        try {      
            const files = req.files;
            console.log(files);
      
            Object.keys(files).forEach( async (key) => {
              const filePath = path.join(__dirname, "../PDFs/", files[key].name);
              files[key].mv(filePath, (err) => {
                if (err)
                  return res.status(500).json({ status: "error", message: err });
              });
              console.log(key)
              const data = await this.pdfService.addPdf(key)
            });
            return res.json({
              status: "Success",
              message: Object.keys(files).toString(),
            });
          } catch (e) {
            console.log(e);
            return res.status(500).json({ status: "error", message: e });
          }
    }
}

module.exports = pdfController