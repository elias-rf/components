import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { TGroupSubject } from "./group-subject.type";

export class GroupSubjectModel extends Entity<TGroupSubject> {
  constructor(connections: TConnections) {
    super(connections, "group_subject");
  }
}
