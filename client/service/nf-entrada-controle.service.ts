import { TNfEntradaControleRpc } from "../../types/nf-entrada-controle.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "nf_entrada_controle";

export const nfEntradaControleService =
  rpcFactory<TNfEntradaControleRpc>(SERVICE);
