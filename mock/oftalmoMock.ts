import _ from "lodash";
import dal from "../record/dal";

export default function oftalmoMock(stack: any) {
  const tbl: string = _.find(stack, "knex").knex;
  const where = _.find(stack, "where").where;
  const response = dal(db[tbl]).where(where).get();
  return Promise.resolve(response);
}
