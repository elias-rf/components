import { TAgendaTelefone } from "../../types/agenda-telefone.type";
import { crudFactory } from "../lib/http/crud.factory";

export const agendaTelefoneService = {
  ...crudFactory<TAgendaTelefone>("agenda_telefone"),
};
