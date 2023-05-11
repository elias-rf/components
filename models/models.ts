import { connections } from "@/config/connections";
import { agendaTelefoneModelRegister } from "./agenda-telefone/model";

export const models = {};

agendaTelefoneModelRegister({
  connections,
  models,
});
