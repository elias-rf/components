var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const puppeteer = require("puppeteer");
function toPdf(fileName, html) {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch();
        const page = yield browser.newPage();
        yield page.setContent(html);
        yield page.pdf({
            path: `pdf/${fileName}`,
            printBackground: true,
            margin: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10
            }
        });
        yield browser.close();
    });
}
module.exports = toPdf;
//# sourceMappingURL=toPdf.js.map