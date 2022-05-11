import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useUserStore from "../../state/user-store";

import SpinnerIcon from "./spinner-icon";

interface AuthorizationProps {
  children: React.ReactNode;
  resource?: string;
}

export default function Authorization({
  children,
  resource,
}: AuthorizationProps) {
  const [canFlag, setCanFlag] = useState("wait");
  const can = useUserStore((state) => state.can);
  const currentUser = useUserStore((state) => state.currentUser);
  const location = useLocation();

  useEffect(() => {
    async function go() {
      const rsp = await can(resource || location.pathname, currentUser.idGroup);

      if (rsp) {
        setCanFlag("ok");
      }
    }
    go();
  }, []);

  if (canFlag === "wait")
    return (
      <>
        OK
        <SpinnerIcon />
      </>
    );

  if (canFlag === "ok") return <>{children}</>;

  return <div>nao pode {canFlag}.</div>;
}
