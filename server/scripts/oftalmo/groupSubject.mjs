import { connections } from "../connections.mjs";
import { copy } from "../copy.mjs";

await copy(connections.oftalmo, "groupSubject", "id", ["idGroup", "idSubject"]);
