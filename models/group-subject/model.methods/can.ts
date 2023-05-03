import { TTableDef } from "@/types";
import { zd, zod } from "@/utils/zod/zod";
import { Knex } from "knex";
import { TGroupSubjectCan } from "../group-subject.type";

export function canFactory({
  connection,
  table,
}: {
  connection: Knex;
  table: TTableDef;
}): TGroupSubjectCan {
  return async ({ id }) => {
    zod(
      id,
      zd.object({
        group_id: zd.string(),
        subject_id: zd.string(),
      })
    );
    let rsp = false;
    const list = await connection(table.table).where({
      idGroup: id.group_id,
    });
    for (const rec of list) {
      if (id.subject_id.startsWith(rec.idSubject)) {
        rsp = true;
      }
    }
    return rsp;
  };
}
