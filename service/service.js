const pdfRepo = require("../repo/repo")

class pdfService {
    constructor(){
        this.pdfRepo = new pdfRepo()
    }

    async getPdf(){
        const data = await this.pdfRepo.getPdf()
        return data.rows
    }

    async addPdf(name) {
        console.log("This is service")
        console.log(name)
        const data = await this.pdfRepo.addPdf(name)
        return data
    }
}

module.exports = pdfService