import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { TIds } from "@/types";
import { CrudModel } from "@/utils/crud/crud-model";
import { zd, zod } from "@/utils/zod/zod";
import { group_subject } from "./group-subject.table";

export class GroupSubjectModel extends CrudModel {
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[group_subject.database], group_subject);
    models.groupSubject = this;
    this.models = models;
  }

  async can({ ids }: { ids: TIds }) {
    zod(
      ids,
      zd.object({
        group_id: zd.string(),
        subject_id: zd.string(),
      })
    );
    let rsp = false;
    const subject_id = ids.find((id) => id.id === "subject_id") || {
      value: "",
    };
    const list = await this.models.groupSubject.list({
      filters: ids,
    });
    for (const rec of list) {
      if (subject_id.value.startsWith(rec.idSubject)) {
        rsp = true;
      }
    }
    return rsp;
  }
}
