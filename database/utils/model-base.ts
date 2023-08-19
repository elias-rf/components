import { Model } from "objection";

export class ModelBase extends Model {
  static getFields(): string[] {
    return [];
  }

  static getIdColumns(): string[] {
    let idColumn = this.idColumn as string[];
    if (!Array.isArray(this.idColumn)) {
      idColumn = [this.idColumn];
    }
    return idColumn;
  }

  static getIdArray(id: { [field: string]: any }) {
    const idColumn = this.getIdColumns();

    const response = idColumn.reduce((acc, field) => {
      acc.push(id[field]);
      return acc;
    }, [] as string[]);
    if (response.length === 0) {
      throw new Error(`${id} não é um id válido`);
    }
    return response;
  }

  static assertSelect(select?: string[]) {
    if (select === undefined) return;

    if (select[0] === "*") return;

    const nameList = this.getFields();
    const fieldsInvalidos = [];
    let fieldsLivres = nameList.sort();

    for (const fld of select) {
      if (!nameList.includes(fld)) {
        fieldsInvalidos.push(fld);
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== fld);
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length === 1
            ? "é um campo válido"
            : "são campos válidos"
        } em ${this.tableName} use: ${fieldsLivres}`
      );
    }
  }

  static assertId(id: { [field: string]: any }) {
    const idColumn = this.getIdColumns();
    const fieldsInvalidos = [];
    let fieldsLivres = idColumn.sort();

    for (const field in id) {
      if (!idColumn.includes(field)) {
        fieldsInvalidos.push(field);
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field);
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length === 1 ? "é id válido" : "são ids válidos"
        }${
          fieldsLivres.length > 0 ? ` em ${this.tableName} use: ` : ""
        }${fieldsLivres}`
      );
    }
  }

  static assertSort(sort: { [field: string]: "asc" | "desc" }) {
    const nameList = this.getFields();
    const fieldsInvalidos = [];
    let fieldsLivres = nameList.sort();

    for (const field in sort) {
      if (!nameList.includes(field)) {
        fieldsInvalidos.push(field);
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field);
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length == 1 ? "é válido" : "são válidos"
        } para order em ${this.tableName} use: ${fieldsLivres}`
      );
    }
  }

  static assertFilter(filter: { [field: string]: any }) {
    const nameList = this.getFields();
    const fieldsInvalidos = [];
    let fieldsLivres = nameList.sort();

    for (const field in filter) {
      if (!nameList.includes(field)) fieldsInvalidos.push(field);
      fieldsLivres = fieldsLivres.filter((f) => f !== field);
    }
    if (fieldsInvalidos.length > 0) {
      throw new Error(
        `[${fieldsInvalidos}] não ${
          fieldsInvalidos.length === 1
            ? "é um campo válido"
            : "são campos válidos"
        } para where em ${this.tableName} use: ${fieldsLivres}`
      );
    }
  }

  static assertData(data: Record<string, any>) {
    const nameListOk = this.getFields();

    const fieldsInvalidos = [];
    let fieldsLivres = nameListOk;

    for (const field in data) {
      if (!nameListOk.includes(field)) {
        fieldsInvalidos.push(field);
      }
      fieldsLivres = fieldsLivres.filter((f) => f !== field);
    }

    if (fieldsInvalidos.length === 1) {
      throw new Error(
        `[${fieldsInvalidos}] não é um campo válido${
          fieldsLivres.length > 0 ? ` em ${this.tableName} use: ` : ""
        }${fieldsLivres}`
      );
    }

    if (fieldsInvalidos.length > 1) {
      throw new Error(
        `[${fieldsInvalidos}] não são campos válidos${
          fieldsLivres.length > 0 ? ` em ${this.tableName} use: ` : ""
        }${fieldsLivres}`
      );
    }
  }
}
