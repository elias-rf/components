import { z } from "@er/utils/src";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useStateValidate } from "./use-state-validate";

describe("useStateValidate", () => {
  it.only("deve inicializar hook", () => {
    const body: any = renderHook(() => useStateValidate("Valor"));
    console.log(
      `🚀 ~ file: use-state-validate.spec.ts ~ line 9 ~ it.only ~ body`,
      body
    );
    expect(body.result.current[0]).toEqual({
      value: "Valor",
      isDirty: false,
      isValid: true,
      error: "",
    });
  });

  it("deve alterar valor do hook", () => {
    const body: any = renderHook(() => useStateValidate("Valor"));
    body.result.current[1]("valor2");
    expect(body.result.current[0]).toEqual({
      value: "valor2",
      isDirty: true,
      isValid: true,
      error: "",
    });
  });

  it("deve alterar e restaurar valor do hook", () => {
    const body: any = renderHook(() => useStateValidate("Valor", {}));
    body.result.current[1]("valor2");
    body.result.current[1]("Valor");
    expect(body.result.current[0]).toEqual({
      value: "Valor",
      isDirty: false,
      isValid: true,
      error: "",
    });
  });

  it("deve alterar valor do hook com validação", () => {
    const body: any = renderHook(() =>
      useStateValidate("Valor", {
        validate: (v: any) => {
          const rsp = z.string().length(3).safeParse(v);
          if (rsp.success) {
            return null;
          }
          return rsp.error.issues[0].message;
        },
      })
    );
    body.result.current[1](2);
    expect(body.result.current[0]).toEqual({
      value: 2,
      isDirty: true,
      isValid: false,
      error: "Esperado string, recebido number",
    });
  });
});
