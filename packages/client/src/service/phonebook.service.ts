import { rpcFactory } from "../lib/http/rpc.factory";

export type PhonebookRecord = {
  id: string;
  name: string;
  department: string;
  email: string;
};

export const phonebookService = {
  ...rpcFactory("phonebook"),
  clear() {
    return {
      id: "",
      name: "",
      department: "",
      email: "",
    };
  },
};
