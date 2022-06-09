import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useUserStore from "../../state/user-store";
import Page from "./page";
import Page403 from "../../pages/page-403";
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
      } else {
        setCanFlag(resource || location.pathname);
      }
    }
    go();
  }, []);

  if (canFlag === "wait")
    return (
      <Page>
        <div className="flex items-center justify-center w-full h-full">
          <SpinnerIcon
            show={true}
            className="w-20 h-20"
          />
        </div>
      </Page>
    );

  if (canFlag === "ok") return <>{children}</>;

  return <Page403 />;
}
