// node -r esbuild-runner/register type_create.ts produto_item
import * as changeCase from "change-case";
import fs from "fs";
import { getSegments } from "./get-segments";

function getFile(tableNameParam: string) {
  try {
    return fs.readFileSync(
      `../model/${tableNameParam}/${tableNameParam}.store.ts`,
      { encoding: "utf-8" }
    );
  } catch (error) {
    return "";
  }
}

export function storeCreate(fileName: string) {
  const tableNamePascal = changeCase.pascalCase(fileName);
  const tableNameCamel = changeCase.camelCase(fileName);
  const tableNameParam = changeCase.paramCase(fileName);

  const file = getFile(tableNameParam);
  const segments = getSegments(file);

  const template = `import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { ${tableNameCamel}ServiceFactory } from "./${tableNameParam}.service";
import type {
  T${tableNamePascal},
  T${tableNamePascal}Clear,
  T${tableNamePascal}Create,
  T${tableNamePascal}Del,
  T${tableNamePascal}List,
  T${tableNamePascal}Read,
  T${tableNamePascal}Schema,
  T${tableNamePascal}Update,
} from "./${tableNameParam}.type";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
${segments.import}

type T${tableNamePascal}Store = {
  fetching: boolean;
  argsList: Parameters<T${tableNamePascal}List>[0];
  refreshList: () => Promise<void>;
  dataList: T${tableNamePascal}[];
  getList: T${tableNamePascal}List;
  dataRead: T${tableNamePascal};
  getRead: T${tableNamePascal}Read;
  dataSchema: TFieldClient[];
  getSchema: T${tableNamePascal}Schema;
  dataClear: T${tableNamePascal};
  getClear: T${tableNamePascal}Clear;
  setCreate: T${tableNamePascal}Create;
  setUpdate: T${tableNamePascal}Update;
  setDel: T${tableNamePascal}Del;
  ${segments.type}
};

export const ${tableNameCamel}Store(
  ${tableNameCamel}Service = ${tableNameCamel}ServiceFactory(rpcFactory)
) {
  const ${tableNameCamel}Svc = ${tableNameCamel}Service;

  return create<T${tableNamePascal}Store>((set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "${tableNameCamel}List" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await ${tableNameCamel}Svc.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await ${tableNameCamel}Svc.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await ${tableNameCamel}Svc.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await ${tableNameCamel}Svc.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return ${tableNameCamel}Svc.mutation.create(args);
    },
    async setUpdate(args) {
      return ${tableNameCamel}Svc.mutation.update(args);
    },
    async setDel(args) {
      return ${tableNameCamel}Svc.mutation.del(args);
    },
    ${segments.store}
  }));
}
`;

  fs.writeFileSync(
    `../model/${tableNameParam}/${tableNameParam}.store.ts`,
    template
  );
  console.log("store:", fileName, "created");
}
