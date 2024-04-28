import { expect, test } from "vitest";
import { config } from "./index.mjs";
test("config.schema", () => {
  expect(Object.keys(config)).toEqual(["app", "auth", "fs", "db"]);
});
