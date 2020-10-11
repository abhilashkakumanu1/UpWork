const fs = require("fs")
const pug = require("pug")
const jsonData = require("./data.json")

const html = pug.renderFile("template.pug", {
    ...jsonData,
    pretty: true
})

fs.writeFileSync("index.html", html)


