import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.oftalmo, "phonebook", "id", [
  "id",
  "name",
  "department",
  "email",
]);
