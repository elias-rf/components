import { vi } from "vitest";

const hex = [
  0x03, // versão
  0x74,
  0x0b,
  0x16, // data update
  0x02,
  0x00,
  0x00,
  0x00, // numRecords
  0xc2,
  0x00, // tamanho header
  0x12,
  0x00, // tamanho do record
  0x00,
  0x00, // reservado
  0x00,
  0x00, // reservado DBASE IV
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00, // reservado multiuser
  0x00, // usa .mdx
  0x00, // lingua
  0x00,
  0x00, // reservado

  // Field Descritor
  0x46,
  0x49,
  0x45,
  0x4c,
  0x44,
  0x31,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00, // FIELD1
  0x43, // C
  0x00,
  0x00,
  0x00,
  0x00, // reservado
  0x01, // field length
  0x00, // decimal
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,

  0x46,
  0x49,
  0x45,
  0x4c,
  0x44,
  0x32,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00, // FIELD2
  0x4e, // N
  0x00,
  0x00,
  0x00,
  0x00, // reservado
  0x01, // field length
  0x00, // decimal
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,

  0x46,
  0x49,
  0x45,
  0x4c,
  0x44,
  0x33,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00, // FIELD3
  0x4e, // N
  0x00,
  0x00,
  0x00,
  0x00, // reservado
  0x06, // field length
  0x02, // decimal
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,

  0x46,
  0x49,
  0x45,
  0x4c,
  0x44,
  0x34,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00, // FIELD4
  0x4c, // L
  0x00,
  0x00,
  0x00,
  0x00, // reservado
  0x01, // field length
  0x00, // decimal
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,

  0x46,
  0x49,
  0x45,
  0x4c,
  0x44,
  0x35,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00, // FIELD5
  0x44, // D
  0x00,
  0x00,
  0x00,
  0x00, // reservado
  0x08, // field length
  0x00, // decimal
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,

  0x0d, // fim do Field Descritor

  0x00,

  // #1
  0x20, // _ ou * para excluido
  0x61, // a
  0x31, // 1
  0x20,
  0x20,
  0x31,
  0x2e,
  0x31,
  0x30, // __1.10
  0x54, // T
  0x32,
  0x30,
  0x30,
  0x30,
  0x30,
  0x31,
  0x30,
  0x31, // 20000101
  // #2
  0x20, // _ ou * para excluido
  0x62, // b
  0x32, // 2
  0x20,
  0x20,
  0x32,
  0x2e,
  0x32,
  0x30, // __2.20
  0x46, // F
  0x32,
  0x30,
  0x30,
  0x30,
  0x30,
  0x31,
  0x30,
  0x32, // 20000102

  0x1a, // eof
];

const dbfMock = Buffer.from(hex);

function readSync(_fd, buf, offset, len, pos) {
  return dbfMock.copy(buf, offset, pos, pos + len);
}

const fs = {
  //   module.exports = {
  readSync: vi.fn(readSync),

  read: vi.fn((_fd, buf, offset, len, pos, cb) => {
    const rsp = dbfMock.copy(buf, offset, pos, pos + len);
    cb(null, rsp, buf);
  }),

  openSync: vi.fn(() => 1),

  closeSync: vi.fn(() => 1),
};

export default fs;
