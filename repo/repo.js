const pool = require("../utils/pool")

class pdfRepo {
    constructor() {}

    getPdf() {
        return pool.query("SELECT * FROM pdfs");
    }

    addPdf(name) {
        console.log("This is repo")
        console.log(name)
        // return pool.query(
        //     "INSERT INTO pdfs (name) VALUES ($1)", [name]
        // );
    }
}

module.exports = pdfRepo