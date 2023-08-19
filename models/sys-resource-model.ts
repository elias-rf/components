import { SysResource } from "@/database";
import { CrudObjection } from "@/models/utils/crud-objection";

class SysResourceModel extends CrudObjection {
  constructor() {
    super(SysResource);
  }
}

export const sysResourceModel = new SysResourceModel();
