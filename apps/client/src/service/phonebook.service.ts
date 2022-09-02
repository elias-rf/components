import { TPhonebookRecord } from "@er/server/src/model/oftalmo/phonebook.model";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TPhonebookRecord };

export const phonebookService = {
  ...rpcFactory<TPhonebookRecord>("phonebook"),

  clear() {
    return {
      id: "",
      name: "",
      department: "",
      email: "",
    };
  },
};
