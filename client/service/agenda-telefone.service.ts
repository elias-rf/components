import { TAgendaTelefone } from "../../types/agenda-telefone.type";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TAgendaTelefone };

export const agendaTelefoneService = {
  ...rpcFactory<TAgendaTelefone>("phonebook"),

  clear() {
    return {
      id: "",
      name: "",
      department: "",
      email: "",
    };
  },
};
