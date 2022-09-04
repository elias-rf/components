import { TConnections } from "../../dal/connections";
import { Entity } from "../../model/entity";
import { TGroupSubject, TGroupSubjectId } from "./group-subject.type";

export class GroupSubjectModel extends Entity<TGroupSubjectId, TGroupSubject> {
  constructor(connections: TConnections) {
    super(connections, "group_subject");
  }
}
