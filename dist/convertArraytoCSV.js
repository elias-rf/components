"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertArrayToCSV(header, dados) {
    const hdr = header.map(lbl => `"${lbl[1]}"`).join(';');
    const bdy = dados
        .map(rec => {
        const lin = [];
        header.forEach(h => {
            lin.push(`"${rec[h[0]]}"`);
        });
        return lin.join(';');
    })
        .join('\r\n');
    const rsp = hdr.concat('\r\n', bdy);
    return rsp;
}
exports.default = convertArrayToCSV;
//# sourceMappingURL=convertArraytoCSV.js.map