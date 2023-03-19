import { Knex } from "knex";
import { TTableDef } from "../../../types";
import { z, zod } from "../../../utils/zod/z";
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
      z.object({
        group_id: z.string(),
        subject_id: z.string(),
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
