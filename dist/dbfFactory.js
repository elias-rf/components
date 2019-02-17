"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fsys = require("fs");
const trimExString_1 = require("./trimExString");
function recordOffset(recNum, header) {
    return (recNum - 1) * header.recSize + header.headerSize + 1;
}
function dbfFactory(dbfFile, fs = fsys) {
    let fd;
    const headerDbf = {
        versao: 0,
        update: new Date(),
        recNum: 0,
        headerSize: 0,
        recSize: 0,
        numFields: 0,
    };
    const fields = [];
    const dbf = {
        header() {
            return headerDbf;
        },
        fields() {
            return fields;
        },
        open(fileName) {
            const buf = Buffer.alloc(32, 0);
            fd = fs.openSync(fileName, 'r');
            fs.readSync(fd, buf, 0, buf.length, 0);
            headerDbf.versao = buf[0];
            headerDbf.update = new Date(buf[1] + 1900, buf[2] - 1, buf[3]);
            headerDbf.recNum =
                buf[7] * 16777216 + buf[6] * 65536 + buf[5] * 256 + buf[4];
            headerDbf.headerSize = buf[9] * 256 + buf[8];
            headerDbf.recSize = buf[11] * 256 + buf[10];
            headerDbf.numFields = Math.floor((headerDbf.headerSize - 32) / 32);
            for (let ctField = 0; ctField < headerDbf.numFields; ctField += 1) {
                fs.readSync(fd, buf, 0, buf.length, (ctField + 1) * 32);
                const field = { nome: '', tipo: '', tamanho: 0, inicio: 0 };
                field.nome = trimExString_1.default(buf.slice(0, 11).toString());
                if (buf[17] > 0) {
                    field.tipo = 'F';
                }
                else {
                    field.tipo = buf.slice(11, 12).toString();
                }
                field.tamanho = buf[16];
                if (ctField === 0) {
                    field.inicio = 0;
                }
                else {
                    field.inicio =
                        fields[ctField - 1].inicio + fields[ctField - 1].tamanho;
                }
                fields[ctField] = field;
            }
            return fields;
        },
        recordCount() {
            return headerDbf.recNum;
        },
        moveTo(recNum) {
            return new Promise((resolve, reject) => {
                if (recNum < 1) {
                    reject(new Error('registro anterior ao primeiro'));
                    return;
                }
                if (recNum > headerDbf.recNum) {
                    reject(new Error('registro posterior ao último'));
                    return;
                }
                const offset = recordOffset(recNum, headerDbf);
                const buffer = Buffer.alloc(headerDbf.recSize);
                let field = { nome: '', tipo: '', tamanho: 0, inicio: 0 };
                let vlr = '';
                const record = {};
                fs.read(fd, buffer, 0, buffer.length, offset, (_err, _bytesRead, buf) => {
                    record['#'] = recNum;
                    for (let ct = 1; ct <= headerDbf.numFields; ct += 1) {
                        field = fields[ct - 1];
                        vlr = buf
                            .slice(field.inicio, field.inicio + field.tamanho)
                            .toString();
                        switch (field.tipo) {
                            case 'C':
                                record[field.nome] = vlr.trim();
                                break;
                            case 'L':
                                record[field.nome] = vlr === ' ' ? null : vlr === 'T';
                                break;
                            case 'N':
                                if (vlr.trim() === '') {
                                    record[field.nome] = null;
                                }
                                else {
                                    record[field.nome] = parseInt(vlr.trim(), 10);
                                }
                                break;
                            case 'F':
                                if (vlr.trim() === '') {
                                    record[field.nome] = null;
                                }
                                else {
                                    record[field.nome] = parseFloat(vlr.trim());
                                }
                                break;
                            case 'D':
                                if (vlr.trim() === '') {
                                    record[field.nome] = null;
                                }
                                else {
                                    record[field.nome] = new Date(`${vlr.substr(0, 4)}-${vlr.substr(4, 2)}-${vlr.substr(6, 2)}T00:00:00Z`);
                                }
                                break;
                            default:
                                record[field.nome] = vlr;
                                break;
                        }
                    }
                    resolve(record);
                });
            });
        },
        close() {
            fs.closeSync(fd);
        },
    };
    if (dbfFile !== undefined) {
        dbf.open(dbfFile);
    }
    return dbf;
}
exports.default = dbfFactory;
//# sourceMappingURL=dbfFactory.js.map