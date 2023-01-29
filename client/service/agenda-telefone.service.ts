import { TAgendaTelefoneRpc } from "../../types/agenda-telefone.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "agendaTelefone";

export const agendaTelefoneService: TAgendaTelefoneRpc =
  rpcFactory<TAgendaTelefoneRpc>(SERVICE);
