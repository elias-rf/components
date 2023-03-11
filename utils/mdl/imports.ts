import { trimAll } from "../string/trim-all";
import { parseAlias, stringifyAlias } from "./imports-alias";

function parseDefault(text: string) {
  let response = text.trim();
  const start = text.indexOf("{");
  const end = text.indexOf("}");
  if (start > -1 && end > -1)
    response = (response.slice(0, start) + response.slice(end + 1)).trim();

  return parseAlias(trimAll(response, ","));
}

function parseNamed(text: string) {
  const start = text.indexOf("{");
  const end = text.indexOf("}");
  if (start === -1 || end === -1) return undefined;
  const named = text.substring(start + 1, end).split(",");
  return named.map(parseAlias);
}

function parseDefaultNamed(text: string) {
  const named = parseNamed(text);
  const defaulted = parseDefault(text);
  const response: { default?: any; named?: any } = {};
  if (defaulted) response.default = defaulted;
  if (named) response.named = named;
  return response;
}

export function parseImport(text: string): { names?: any; moduleName: string } {
  const componentes = text.split(" from ");
  const names = componentes[0].slice(7).trim();

  if (componentes.length >= 2) {
    const moduleName = trimAll(componentes[1], '"');
    return { names: parseDefaultNamed(names), moduleName };
  }
  return { moduleName: trimAll(names, '"') };
}

export function stringifyImport(imports: { names?: any; moduleName: string }) {
  let names;
  if (Array.isArray(imports.names)) {
    names = imports.names.join(", ");
  } else {
    names = stringifyAlias(imports.names.default);
  }
  return `import ${names} from "${imports.moduleName}"`;
}
