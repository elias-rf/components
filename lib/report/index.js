const fs = require("fs");
const path = require("path");
const glob = require("glob");
const chokidar = require("chokidar");
const toPdf = require("./lib/toPdf");
const toHtml = require("./lib/toHtml");
console.log("Watching");
chokidar.watch(["reports", "data"]).on("change", arq => {
    file = path.parse(arq);
    console.log("file: ", file.name);
    const data = fs.readFileSync("data/" + file.name + ".json", "utf8");
    const html = toHtml.render(file.name + ".html", JSON.parse(data));
    fs.writeFileSync("html/" + file.name + ".html", html);
    toPdf(file.name + ".pdf", html);
});
