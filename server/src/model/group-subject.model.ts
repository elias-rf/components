import { TConnections } from "../dal/connections";
import { EntityModel } from "./entity";

export type TGroupSubject = {
  group_id?: string;
  subject_id?: string;
};

export class GroupSubjectModel extends EntityModel<TGroupSubject> {
  constructor(connections: TConnections) {
    super(connections, "group_subject");
  }
}
