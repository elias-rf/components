import { formatMoney } from "../../utils/format/format-money";
import { replaceAll } from "./replace-all";

export const moeda = {
  format: (vlr: any) => {
    return formatMoney(vlr);
  },
  parse: (vlr: any) => {
    const num = replaceAll(vlr, /[^0-9,-]/g, "");
    const intl = replaceAll(num, ",", ".");
    const rsp = parseFloat(intl);
    if (isNaN(rsp)) {
      return 0.0;
    }
    return rsp;
  },
};

export const moedaReal = {
  format: (vlr: any) => {
    return "R$ " + formatMoney(vlr);
  },
  parse: (vlr: any) => {
    const num = replaceAll(vlr, /[^0-9,-]/g, "");
    const intl = replaceAll(num, ",", ".");
    const rsp = parseFloat(intl);
    if (isNaN(rsp)) {
      return 0.0;
    }
    return rsp;
  },
};

export const inteiro = {
  format: (vlr: any) => {
    return formatMoney(vlr, 0);
  },
  parse: (vlr: any) => {
    if (typeof vlr === "string") {
      const num = replaceAll(vlr, /[^0-9,-]/g, "");
      const intl = replaceAll(num, ",", ".");
      const rsp = parseInt(intl);
      if (isNaN(rsp)) {
        return 0;
      }
      return rsp;
    }
    return vlr;
  },
};
