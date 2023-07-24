import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { renameFieldToName } from "@/utils/schema/rename-fields";
import { Knex } from "knex";
import { group_subject } from "./group-subject.table";

export class GroupSubjectModel extends CrudModel {
  connection: Knex;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[group_subject.database], group_subject);
    this.connection = connections[group_subject.database];
    models.groupSubject = this;
    this.models = models;
  }

  async listPermissions({
    group_id,
    subject_ids,
  }: {
    group_id: string;
    subject_ids: string[];
  }) {
    const resp = await this.connection("groupSubject")
      .select("idSubject")
      .where({ idGroup: group_id })
      .whereIn("idSubject", subject_ids);

    return renameFieldToName(resp, this.table.fields);
  }

  async can({
    usuario_id,
    subject_id,
  }: {
    usuario_id: number;
    subject_id: string;
  }) {
    const groups = await this.models.usuario.read({
      id: { usuario_id },
      select: ["group_id"],
    });

    const groupList = groups.group_id.split(",");

    if (groupList.includes("0")) {
      return true;
    }

    const permissions = await this.connection("groupSubject")
      .select("idSubject")
      .whereIn("idGroup", groupList)
      .where("idSubject", subject_id);

    return permissions.length > 0;
  }
}
