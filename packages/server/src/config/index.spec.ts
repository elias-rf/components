import { expect, test } from "vitest";
import { config } from "./index";
test("config.schema", () => {
  expect(Object.keys(config)).toEqual(["app", "auth", "db"]);
});
