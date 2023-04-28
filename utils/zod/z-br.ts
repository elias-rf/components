// import i18next, { i18n } from "i18next";
import { ZodErrorMap, ZodIssueCode, ZodParsedType } from "zod";
import { template } from "../string/template";

export const br = {
  errors: {
    invalid_type:
      "O dado deve ser do tipo {expected}, porém foi enviado {received}",
    invalid_type_received_undefined: "Obrigatório",
    invalid_literal: "Valor literal inválido, era esperado {expected}",
    unrecognized_keys: "Chave(s) não reconhecida(s) no objeto: {keys}",
    invalid_union: "Entrada inválida",
    invalid_union_discriminator:
      "Valor discriminador inválido. Foi esperado {options}",
    invalid_enum_value:
      "Enum no formato inválido. Foi esperado {- options}, porém foi recebido '{received}'",
    invalid_arguments: "Argumento de função inválido",
    invalid_return_type: "Tipo de retorno de função inválido",
    invalid_date: "Data inválida",
    custom: "Entrada inválida",
    invalid_intersection_types:
      "Valores de interseção não poderam ser mesclados",
    not_multiple_of: "O número deverá ser múltiplo de {multipleOf}",
    not_finite: "Número não pode ser infinito",
    invalid_string: {
      email: "E-mail inválido",
      ip: "IP inválido",
      url: "URL inválida",
      uuid: "UUID inválido",
      cuid: "CUID inválido",
      cuid2: "CUID2 inválido",
      ulid: "ULID inválido",
      emoji: "emoji inválido",
      regex: "Combinação inválida",
      datetime: "datetime inválido",
      startsWith: 'Entrada inválida: precisa iniciar com "{startsWith}"',
      endsWith: 'Entrada inválida: precisa terminar com "{endsWith}"',
    },
    too_small: {
      array: {
        inclusive: "O array deve conter no mínimo {minimum} elemento(s)",
        not_inclusive: "O array deve conter mais de {minimum} elemento(s)",
      },
      string: {
        inclusive: "A string precisa conter pelo menos {minimum} caracter(es)",
        not_inclusive: "A string precisa conter mais de {minimum} caracter(es)",
      },
      number: {
        inclusive: "O número precisa ser maior ou igual a {minimum}",
        not_inclusive: "O número precisa ser maior que {minimum}",
      },
      bigint: {
        inclusive: "O número precisa ser maior ou igual a {minimum}",
        not_inclusive: "O número precisa ser maior que {minimum}",
      },
      set: {
        exact: "Entrada inválida",
        inclusive: "Entrada inválida",
        not_inclusive: "Entrada inválida",
      },
      date: {
        inclusive: "Data precisa ser maior ou igual a {minimum, datetime}",
        not_inclusive: "Data precisa ser maior que {minimum, datetime}",
      },
    },
    too_big: {
      array: {
        inclusive: "O array deve conter no máximo {maximum} elemento(s)",
        not_inclusive: "O array deve conter menos de {maximum} elemento(s)",
      },
      string: {
        inclusive: "A string pode conter no máximo {maximum} caracter(es)",
        not_inclusive: "A string deve conter menos que {maximum} caracter(es)",
      },
      number: {
        inclusive: "Número deve ser menor ou igual a {maximum}",
        not_inclusive: "Número deve ser menor que {maximum}",
      },
      set: {
        exact: "Entrada inválida",
        inclusive: "Entrada inválida",
        not_inclusive: "Entrada inválida",
      },
      date: {
        inclusive: "A data precisa ser menor ou igual a {- maximum, datetime}",
        not_inclusive: "A data precisa ser menor que {- maximum, datetime}",
      },
    },
  },
  validations: {
    email: "email",
    ip: "ip",
    url: "url",
    uuid: "uuid",
    ulid: "ulid",
    cuid: "cuid",
    cuid2: "cuid2",
    regex: "regex",
    datetime: "datetime",
    emoji: "emoji",
  },
  types: {
    function: "function",
    number: "number",
    string: "string",
    nan: "nan",
    integer: "integer",
    float: "float",
    boolean: "boolean",
    date: "date",
    bigint: "bigint",
    undefined: "undefined",
    symbol: "symbol",
    null: "null",
    array: "array",
    object: "object",
    unknown: "unknown",
    promise: "promise",
    void: "void",
    never: "never",
    map: "map",
    set: "set",
  },
};

const jsonStringifyReplacer = (_: string, value: any): any => {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
};

function joinValues<T extends any[]>(array: T, separator = " | "): string {
  return array
    .map((val) => (typeof val === "string" ? `'${val}'` : val))
    .join(separator);
}

export const errorMapBr: ZodErrorMap = (issue) => {
  let message = "";
  let minimum: number | bigint | Date;
  let maximum: number | bigint | Date;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = br.errors.invalid_type_received_undefined;
      } else {
        message = template(br.errors.invalid_type, {
          expected: issue.expected,
          received: issue.received,
        });
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = template(br.errors.invalid_literal, {
        expected: JSON.stringify(issue.expected, jsonStringifyReplacer),
      });
      break;
    case ZodIssueCode.unrecognized_keys:
      message = template(br.errors.unrecognized_keys, {
        keys: joinValues(issue.keys, ", "),
        count: issue.keys.length,
      });
      break;
    case ZodIssueCode.invalid_union:
      message = template(br.errors.invalid_union, {});
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = template(br.errors.invalid_union_discriminator, {
        options: joinValues(issue.options),
      });
      break;
    case ZodIssueCode.invalid_enum_value:
      message = template(br.errors.invalid_enum_value, {
        options: joinValues(issue.options),
        received: issue.received,
      });
      break;
    case ZodIssueCode.invalid_arguments:
      message = template(br.errors.invalid_arguments, {
        defaultValue: message,
      });
      break;
    case ZodIssueCode.invalid_return_type:
      message = template(br.errors.invalid_return_type, {
        defaultValue: message,
      });
      break;
    case ZodIssueCode.invalid_date:
      message = template(br.errors.invalid_date, {
        defaultValue: message,
      });
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("startsWith" in issue.validation) {
          message = template(br.errors.invalid_string.startsWith, {
            startsWith: issue.validation.startsWith,
            defaultValue: message,
          });
        } else if ("endsWith" in issue.validation) {
          message = template(br.errors.invalid_string.endsWith, {
            endsWith: issue.validation.endsWith,
            defaultValue: message,
          });
        }
      } else {
        message = template(br.errors.invalid_string[issue.validation], {
          validation: template(br.validations[issue.validation], {
            defaultValue: issue.validation,
          }),
          defaultValue: message,
        });
      }
      break;
    case ZodIssueCode.too_small:
      minimum =
        issue.type === "date"
          ? new Date(issue.minimum as number)
          : issue.minimum;
      message = template(
        br.errors.too_small[issue.type][
          issue.exact
            ? "exact"
            : issue.inclusive
            ? "inclusive"
            : "not_inclusive"
        ],
        {
          minimum,
          count: typeof minimum === "number" ? minimum : undefined,
          defaultValue: message,
        }
      );
      break;
    case ZodIssueCode.too_big:
      maximum =
        issue.type === "date"
          ? new Date(issue.maximum as number)
          : issue.maximum;
      message = template(
        `errors.too_big.${issue.type}.${
          issue.exact
            ? "exact"
            : issue.inclusive
            ? "inclusive"
            : "not_inclusive"
        }`,
        {
          maximum,
          count: typeof maximum === "number" ? maximum : undefined,
          defaultValue: message,
        }
      );
      break;
    case ZodIssueCode.custom:
      message = template(issue.params?.i18n ?? br.errors.custom, {
        defaultValue: message,
      });
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = template(br.errors.invalid_intersection_types, {
        defaultValue: message,
      });
      break;
    case ZodIssueCode.not_multiple_of:
      message = template(br.errors.not_multiple_of, {
        multipleOf: issue.multipleOf,
        defaultValue: message,
      });
      break;
    case ZodIssueCode.not_finite:
      message = template(br.errors.not_finite, {
        defaultValue: message,
      });
      break;
    default:
  }

  return { message };
};
