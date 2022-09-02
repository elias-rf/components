import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "${path} é inválido",
    required: "${path} é obrigatório",
    oneOf: "${path} deve ter um dos seguintes valores: ${values}",
    notOneOf: "${path} não deve ter um dos seguintes valores: ${values}",
    notType: ({ path, type, value, originalValue }) => {
      let isCast = originalValue != null && originalValue !== value;
      let msg =
        `${path} deve ser do tipo \`${type}\`, ` +
        `mas o valor final é: \`${printValue(value, true)}\`` +
        (isCast
          ? ` (cast do valor \`${printValue(originalValue, true)}\`).`
          : ".");

      if (value === null) {
        msg += `\nse a intenção era usar "null" como um valor em branco marque o esquema como \`.nullable()\``;
      }

      return msg;
    },
    defined: "${path} não deve ser indefinido",
  },
  string: {
    length: "${path} deve ter exatamente ${length} caracteres",
    min: "${path} deve ter pelo menos ${min} caracteres",
    max: "${path} deve ter no máximo ${max} caracteres",
    matches: '${path} deve corresponder ao padrão: "${regex}"',
    email: "${path} deve ser um e-mail válido",
    url: "${path} deve ser uma URL válida",
    uuid: "${path} deve ser um UUID válido",
    trim: "${path} não deve conter espaços adicionais no início nem no fim",
    lowercase: "${path} deve estar em letras minúsculas",
    uppercase: "${path} deve estar em letras maiúsculas",
  },
  number: {
    min: "${path} deve ser maior ou igual a ${min}",
    max: "${path} deve menor ou igual a ${max}",
    lessThan: "${path} deve ser menor que ${less}",
    moreThan: "${path} deve ser maior que ${more}",
    notEqual: "${path} não deve ser igual a ${notEqual}",
    positive: "${path} deve ser um número positivo",
    negative: "${path} deve ser um número negativo",
    integer: "${path} deve ser um número inteiro",
  },
  date: {
    min: "${path} deve ser posterior a ${min}",
    max: "${path} deve ser anterior a ${max}",
  },
  boolean: {
    isValue: "${path} deve ser ${value}",
  },
  object: {
    noUnknown: "${path} tem chaves desconhecidas: ${unknown}",
  },
  array: {
    min: "${path} deve ter no mínimo ${min} itens",
    max: "${path} deve ter no máximo ${max} itens",
    length: "${path} deve ter ${length} itens",
  },
});

export { yup };
