const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

const pdfRouter = require("./router/router")

app.use(pdfRouter)
app.use(express.static('client'));
app.use(express.static("PDFs"))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/index.html"));
})

app.listen(port, () => {
    console.log(`We are on port ${port}`);
})