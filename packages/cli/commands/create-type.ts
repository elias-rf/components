import path from "path";

export async function createType(schema, type) {
  const fileName = path.basename(schema);
  const distName = path.dirname(schema);
  const [file, fileType, ext] = fileName.split(".");
  const fileDest = `${distName}/${file}.type.ts`;
  const schemaSrc = await import(schema);
  console.log(fileDest);
  console.log(schemaSrc);
}
