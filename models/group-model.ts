import { Group } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class GroupModel extends CrudObjection {
  constructor() {
    super(Group);
  }
}

export const groupModel = new GroupModel();
