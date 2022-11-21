import Ajv, { ErrorObject } from "ajv";
import localize from "ajv-i18n/localize/pt-BR";
export const ajv = new Ajv({ allErrors: true, messages: false });

export const ajvBr = (errors: ErrorObject[]) => localize(errors);

export const validate = (schema: object, data: any) => {
  const vld = ajv.compile(schema);
  const rsp = vld(data);
  if (rsp) return "";
  ajvBr(vld.errors as any);
  return ajv.errorsText(vld.errors);
};
