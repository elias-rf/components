import { z } from "zod";

function joinValues<T extends any[]>(array: T, separator = " | "): string {
  return array
    .map((val) => (typeof val === "string" ? `'${val}'` : val))
    .join(separator);
}

function assertNever(_x: never): never {
  throw new Error();
}

export const customErrorMap = (
  issue: z.ZodIssueOptionalMessage,
  _ctx: any
): { message: string } => {
  let message: string;
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.received === z.ZodParsedType.undefined) {
        message = "Requerido";
      } else {
        message = `Esperado ${issue.expected}, recebido ${issue.received}`;
      }
      break;
    case z.ZodIssueCode.invalid_literal:
      message = `Valor literal inválido, esperado ${JSON.stringify(
        issue.expected
      )}`;
      break;
    case z.ZodIssueCode.unrecognized_keys:
      message = `Chave(s) não conhecida(s) no objeto: ${joinValues(
        issue.keys,
        ", "
      )}`;
      break;
    case z.ZodIssueCode.invalid_union:
      message = `Entrada Inválida`;
      break;
    case z.ZodIssueCode.invalid_union_discriminator:
      message = `Valor discriminador inválido. Esperado ${joinValues(
        issue.options
      )}`;
      break;
    case z.ZodIssueCode.invalid_enum_value:
      message = `Valor enum inválido. Esperado ${joinValues(
        issue.options
      )}, recebido '${issue.received}'`;
      break;
    case z.ZodIssueCode.invalid_arguments:
      message = `Argumentos da função inválidos`;
      break;
    case z.ZodIssueCode.invalid_return_type:
      message = `Retorno da função com tipo inválido`;
      break;
    case z.ZodIssueCode.invalid_date:
      message = `Data inválida`;
      break;
    case z.ZodIssueCode.invalid_string:
      if (issue.validation !== "regex")
        message = `Inválido ${issue.validation}`;
      else message = "Inválido";
      break;
    case z.ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Matriz deve conter ${
          issue.inclusive ? `no mínimo` : `maior que`
        } ${issue.minimum} elemento(s)`;
      else if (issue.type === "string")
        message = `Texto deve conter ${
          issue.inclusive ? `no mínimo` : `mais que`
        } ${issue.minimum} caractere(s)`;
      else if (issue.type === "number")
        message = `Número deve ser maior que ${
          issue.inclusive ? `ou igual a ` : ``
        }${issue.minimum}`;
      else message = "Entrada Inválida";
      break;
    case z.ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Matriz deve conter ${
          issue.inclusive ? `no máximo` : `menor que`
        } ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `Texto deve conter ${
          issue.inclusive ? `no máximo` : `abaixo de`
        } ${issue.maximum} caractere(s)`;
      else if (issue.type === "number")
        message = `Número deve ser menor que ${
          issue.inclusive ? `ou igual a ` : ``
        }${issue.maximum}`;
      else message = "Entrada Inválida";
      break;
    case z.ZodIssueCode.custom:
      message = `Entrada Inválida`;
      break;
    case z.ZodIssueCode.invalid_intersection_types:
      message = `Interseção dos resultados não pode ser combinada`;
      break;
    case z.ZodIssueCode.not_multiple_of:
      message = `Número deve ser múltiplo de ${issue.multipleOf}`;
      break;
    default:
      message = _ctx.defaultError;
      assertNever(issue);
  }
  return { message };
};

z.setErrorMap(customErrorMap);
export { z };
