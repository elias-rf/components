import { GroupSubject } from "@/database";
import { usuarioModel } from "@/models";
import { CrudObjection } from "@/models/utils/crud-objection";

class GroupSubjectModel extends CrudObjection {
  constructor() {
    super(GroupSubject);
  }

  async listPermissions({
    idGroup,
    idSubjectList,
  }: {
    idGroup: string;
    idSubjectList: string[];
  }) {
    const resp = await GroupSubject.query()
      .select("idSubject")
      .where({ idGroup })
      .whereIn("idSubject", idSubjectList);

    return resp;
  }

  async can({ kUsuario, idSubject }: { kUsuario: number; idSubject: string }) {
    const { idGroup } = await usuarioModel.read({
      id: { kUsuario },
      select: ["idGroup"],
    });

    const idGroupList = idGroup.split(",");

    if (idGroupList.includes("0")) {
      return true;
    }

    const permissions = await GroupSubject.query()
      .select("idSubject")
      .whereIn("idGroup", idGroupList)
      .where("idSubject", idSubject);

    return permissions.length > 0;
  }
}

export const groupSubjectModel = new GroupSubjectModel();
