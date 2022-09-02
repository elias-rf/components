import { TConnections } from "../dal/connections";
import { TGroupSubject } from "../type/group-subject.type";
import { Entity } from "./entity";

export class GroupSubjectModel extends Entity<TGroupSubject> {
  constructor(connections: TConnections) {
    super(connections, "group_subject");
  }
}
