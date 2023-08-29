export function convertType(type:string) {
  switch (type) {
    case "tinyint":
    case "bit":
    case "tCodigoEmpresa":
    case "smallint":
    case "numeric":
      return "int";
    case "char":
    case "tNomePessoa":
    case "text":
    case "tMemo":
    case "tSmallMemo":
    case "varchar":
      return "string";
    case "real":
    case "decimal":
    case "money":
    case "smallmoney":
      return "float";
    case "smalldatetime":
      return "date";
    default:
      return type;
  }
}
