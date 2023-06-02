import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { TId } from "@/types";
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

  async can({ id }: { id: TId }) {
    zod(
      id,
      zd.object({
        group_id: zd.string(),
        subject_id: zd.string(),
      })
    );
    let rsp = false;

    const list = await this.models.groupSubject.list({
      filter: { group_id: id.group_id },
      limit: 10000,
    });

    for (const rec of list) {
      if (id.subject_id.startsWith(rec.subject_id)) {
        rsp = true;
      }
    }
    return rsp;
  }
}
