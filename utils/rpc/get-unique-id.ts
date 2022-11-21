let id = 1;

/** Retorna um número que incrementa a cada chamada */
export function getUniqueId(): number {
  return id++;
}
