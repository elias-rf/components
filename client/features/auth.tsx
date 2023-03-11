import React from "react";
import { groupSubjectStore } from "../../model/group-subject/group-subject.store";
import { usuarioStore } from "../../model/usuario/usuario.store";
import { Authorization } from "../components/authorization";

const { getCan } = groupSubjectStore.getState();
const { getMe } = usuarioStore.getState();

export function Auth({ children }: { children: React.ReactNode }) {
  const can = groupSubjectStore((state) => state.dataCan);
  const currentUser = usuarioStore((state) => state.currentUser);

  React.useEffect(() => {
    async function go() {
      getMe();
      getCan({
        id: {
          group_id: currentUser.group_id || "unknow",
          subject_id: location.pathname,
        },
      });
    }
    go();
  }, [currentUser.group_id]);

  return <Authorization can={can}>{children}</Authorization>;
}
