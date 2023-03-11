export function parseAlias(text: string) {
  const componentes = text.split(" as ");
  if (componentes.length > 1)
    return { [componentes[0].trim()]: componentes[1].trim() };
  return text.trim();
}

export function stringifyAlias(aliases: any): string {
  if (typeof aliases === "string") return aliases;
  const name = Object.keys(aliases)[0];
  const alias = aliases[name];
  return `${name} as ${alias}`;
}
