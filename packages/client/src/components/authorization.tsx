import { CurrentUser } from "@vt/types";
import { isEmpty } from "@vt/utils";
import React, { useEffect, useState } from "react";

import Page403 from "../pages/page-403";
import { Page } from "./page";
import { SpinnerIcon } from "./spinner-icon";

interface AuthorizationProps {
  children: React.ReactNode;
  can: (resource: string, idGroup: string) => Promise<boolean>;
  currentUser: () => Promise<CurrentUser>;
  resource: string;
}

export function Authorization({
  children,
  resource,
  can,
  currentUser,
}: AuthorizationProps) {
  const [canFlag, setCanFlag] = useState("wait");

  useEffect(() => {
    async function go() {
      const user = await currentUser();
      if (isEmpty(user)) {
        setCanFlag(resource);
        return;
      }
      const rsp2 = await can(resource, user.idGroup);
      const rsp = true;
      if (rsp) {
        setCanFlag("ok");
      } else {
        setCanFlag(resource);
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
