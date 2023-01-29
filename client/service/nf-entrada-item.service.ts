import { TNfEntradaItemRpc } from "../../types/nf-entrada-item.type";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "nf_entrada_item";

export const nfEntradaItemService = rpcFactory<TNfEntradaItemRpc>(SERVICE);
