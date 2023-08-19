import { parseImport, stringifyImport } from "./imports";
import { expect, it, describe } from "vitest";

describe("imports", () => {
  it("import default", () => {
    const imp = 'import defaultExport from "module-name"';
    expect(parseImport(imp)).toEqual({
      names: { default: "defaultExport" },
      moduleName: "module-name",
    });
    expect(stringifyImport(parseImport(imp))).toEqual(imp);
  });

  it("import all named", () => {
    const imp = 'import * as name from "module-name"';
    expect(parseImport(imp)).toEqual({
      names: { default: { "*": "name" } },
      moduleName: "module-name",
    });

    expect(stringifyImport(parseImport(imp))).toEqual(imp);
  });

  it("import named", () => {
    const imp = 'import { export1 } from "module-name"';
    expect(parseImport(imp)).toEqual({
      names: { named: ["export1"] },
      moduleName: "module-name",
    });

    // expect(stringifyImport(parseImport(imp))).toEqual(imp);
  });

  it("import named with alias", () => {
    expect(
      parseImport('import { export1 as alias1 } from "module-name"')
    ).toEqual({
      names: { named: [{ export1: "alias1" }] },
      moduleName: "module-name",
    });
  });

  it("import default with alias", () => {
    expect(
      parseImport('import { default as alias } from "module-name"')
    ).toEqual({
      names: { named: [{ default: "alias" }] },
      moduleName: "module-name",
    });
  });

  it("import 2 nameds", () => {
    expect(
      parseImport('import { export1, export2 } from "module-name"')
    ).toEqual({
      names: { named: ["export1", "export2"] },
      moduleName: "module-name",
    });
  });

  it("import named and named with alias", () => {
    expect(
      parseImport('import { export1, export2 as alias2 } from "module-name"')
    ).toEqual({
      names: { named: ["export1", { export2: "alias2" }] },
      moduleName: "module-name",
    });
  });

  it("import test named with alias", () => {
    expect(
      parseImport('import { "string-name" as alias } from "module-name"')
    ).toEqual({
      names: { named: [{ '"string-name"': "alias" }] },
      moduleName: "module-name",
    });
  });

  it("import default and named", () => {
    expect(
      parseImport('import defaultExport, { export1 } from "module-name"')
    ).toEqual({
      names: { default: "defaultExport", named: ["export1"] },
      moduleName: "module-name",
    });
  });

  it("import module", () => {
    expect(parseImport('import "module-name"')).toEqual({
      moduleName: "module-name",
    });
  });
});
