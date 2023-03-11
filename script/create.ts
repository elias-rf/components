import fs from "fs";
import minimist from "minimist";
import { modelCreate } from "./aux/model-create";
import { rpcCreate } from "./aux/rpc-create";
import { serviceCreate } from "./aux/service-create";
import { storeCreate } from "./aux/store-create";
import { typeCreate } from "./aux/type-create";

const { module, lib } = minimist(process.argv);

if (module === undefined && lib === undefined) {
  console.log(
    "Use: tsx create.ts --module=[model|rpc|service|store|type] --lib=filename"
  );
  process.exit(0);
}

const modules = {
  model: modelCreate,
  rpc: rpcCreate,
  service: serviceCreate,
  store: storeCreate,
  type: typeCreate,
};

console.log({ module, lib });

const folderNames = fs.readdirSync("../model", { withFileTypes: true });

const filenames = folderNames.reduce((response, fld) => {
  if (fld.isDirectory()) response.push(fld.name);
  return response;
}, [] as string[]);

for (const filename of filenames) {
  if (lib === undefined || lib === filename) {
    let mdl: keyof typeof modules;
    for (mdl in modules) {
      if (module === undefined || module === mdl) {
        modules[mdl](filename);
      }
    }
  }
}
