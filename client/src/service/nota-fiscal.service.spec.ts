import { it, describe, expect } from "vitest";

import NotaFiscalService from "./nota-fiscal.service";
import knexRequestMock from "../lib/knex/knex-request.mock";

describe("notaFiscal", () => {
  it("deve verificar existencia de NF", async () => {
    const nf = NotaFiscalService(
      knexRequestMock([{ NumNota: "123" }], (e) => {
        expect(e).toEqual({
          url: "/api/knex/plano",
          cache: false,
          response: [{ NumNota: "123" }],
          data: {
            from: "NfMestre",
            select: ["NroNf"],
            where: [
              ["NroNf", "=", "123"],
              ["CdEmpresa", "=", "1"],
            ],
          },
        });
      })
    );
    const resp = await nf.includes("123", "1");
    expect(resp).toBe(true);
  });

  it("deve transferir produtos para Matriz", async () => {
    const rsp = [
      { data: { from: "NfMestre", insert: { NroNf: "12345600" } } },
      {
        data: {
          from: "NfItem",
          insert: { NroNF: "12345600", CdProduto: "123" },
        },
      },
      {
        data: {
          from: "Estoque",
          increment: [["EstAtual", 2]],
          where: [
            ["CdEmpresa", "=", 1],
            ["CdProduto", "=", "123"],
          ],
        },
      },
      { data: { from: "EstatPro", increment: [["Entradas", 2]] } },
      {
        data: {
          from: "Lotes",
          insert: { NumNfEntrada: "12345600", CdProduto: "123", CdLote: "11" },
        },
      },
      {
        data: {
          from: "LotesNotaEntrada",
          insert: { CdProduto: "123", NumLote: "11" },
        },
      },
      {
        data: {
          from: "Lotes",
          insert: { NumNfEntrada: "12345600", CdProduto: "123", CdLote: "21" },
        },
      },
      {
        data: {
          from: "LotesNotaEntrada",
          insert: { CdProduto: "123", NumLote: "21" },
        },
      },
      { data: { from: "NfLogConferencia" } },
    ];
    let ct = 0;
    const nf = NotaFiscalService(
      knexRequestMock([{}], (e) => {
        expect(e).toMatchObject(rsp[ct]);
        ct++;
      })
    );
    const resp = await nf.transferir(
      "12345600",
      "123",
      "2022-01-01",
      "2022-02-01",
      ["11", "21"]
    );
    expect(resp).toBe(true);
  });
});
