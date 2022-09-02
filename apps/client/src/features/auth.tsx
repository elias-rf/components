import { useLocation } from "react-router-dom";
import { Authorization } from "../components/authorization";
import { authenticationService } from "../service/authentication.service";
import { groupSubjectService } from "../service/group-subject.service";

export function Auth({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <Authorization
      can={groupSubjectService.can}
      currentUser={authenticationService.me}
      resource={location.pathname}
    >
      {children}
    </Authorization>
  );
}
