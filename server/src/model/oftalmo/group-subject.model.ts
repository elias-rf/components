import { Schema } from "@er/types";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type GroupSubjectRecord = {
  idGroup?: string;
  idSubject?: string;
};

export class GroupSubjectModel extends Model<GroupSubjectRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "groupSubject", "groupSubject", [
      "idGroup",
      "idSubject",
    ]);
  }

  async schema(): Promise<Schema> {
    return {
      pk: ["idSubject", "idGroup"],
      fields: [
        {
          field: "idSubject",
          label: "Permissão",
          type: "ID",
        },
        {
          field: "idGroup",
          label: "Grupo",
          type: "ID",
        },
      ],
    };
  }
}
