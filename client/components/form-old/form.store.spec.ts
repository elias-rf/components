import { describe, expect, it } from "vitest";
import { useFormStore } from "./form.store";

describe("formStore", () => {
  const { getState } = useFormStore;

  it("deve inicializar", () => {
    expect(getState().forms).toEqual({});
  });
  it("deve setar field", () => {
    getState().setField("cliente", "nome", "fulano");
    expect(getState().forms).toEqual({ cliente: { nome: "fulano" } });
  });
  it("deve deletar form", () => {
    getState().setField("cliente", "nome", "fulano");
    getState().delForm("cliente");
    expect(getState().forms).toEqual({ cliente: null });
  });
  it("deve field.onInput", () => {
    getState().setField("cliente", "nome", "fulano");
    getState().delForm("cliente");
    expect(getState().forms).toEqual({ cliente: null });
  });
});
