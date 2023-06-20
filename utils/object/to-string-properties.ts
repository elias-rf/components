// replace all properties with null to string

export function toStringProperties(obj: { [Key: string]: any }): {
  [Key: string]: string;
} {
  const replacedObj = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value === null ? "" : value,
    ])
  );
  return replacedObj;
}
