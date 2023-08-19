import * as database from "./index";
import { expect, it, describe, test } from "vitest";

describe("Database", () => {
  it("deve ser definido", () => {
    expect(database).toBeDefined();
  });

  test.each(Object.keys(database))(
    "%s deve possuir chave primária",
    (table: any) => {
      expect(database[table].idColumn).toBeDefined();
    }
  );

  test.each(Object.keys(database))(
    "%s deve possuir lista de campos",
    (table: any) => {
      expect(database[table].getFields().length).toBeGreaterThan(0);
    }
  );
});
