import { formatMoney } from "@mono/utils/format/format-money";

export const moeda = {
  format: (vlr: any) => {
    return formatMoney(vlr);
  },
  parse: (vlr: string) => {
    const num = vlr.replaceAll(/[^0-9,-]/g, "");
    const intl = num.replaceAll(",", ".");
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
    const num = vlr.replaceAll(/[^0-9,-]/g, "");
    const intl = num.replaceAll(",", ".");
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
      const num = vlr.replaceAll(/[^0-9,-]/g, "");
      const intl = num.replaceAll(",", ".");
      const rsp = parseInt(intl);
      if (isNaN(rsp)) {
        return 0;
      }
      return rsp;
    }
    return vlr;
  },
};
