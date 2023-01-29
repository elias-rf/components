import React from "react";
import { Authorization } from "../components/authorization";
import { useLocation } from "../lib/hooks/use-location";
import { authenticationStore } from "../service/authentication.service";
import { groupSubjectStore } from "../service/group-subject.service";

export function Auth({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const getCan = groupSubjectStore((state) => state.getGroupSubjectCan);
  const can = groupSubjectStore((state) => state.dataCan);
  const group_id = authenticationStore((state) => state.currentUser.group_id);

  console.log(location.pathname, group_id, can);
  React.useEffect(() => {
    getCan({ id: { group_id, subject_id: location.pathname } });
  });
  return <Authorization can={can}>{children}</Authorization>;
}
