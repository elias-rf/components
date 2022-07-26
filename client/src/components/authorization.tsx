import React, { useEffect } from "react";
import { CurrentUser } from "../../../types";
import { isEmpty } from "../../../utils";

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
  const [loading, setLoading] = React.useState(true);
  const [canUse, setCanUse] = React.useState(false);

  useEffect(() => {
    async function go() {
      const user = await currentUser();
      if (isEmpty(user)) {
        setCanUse(false);
        setLoading(false);
        return;
      }
      const rsp = await can(resource, user.idGroup);
      if (rsp) {
        setCanUse(true);
      } else {
        setCanUse(false);
      }
      setLoading(false);
    }
    setLoading(true);
    go();
  }, []);

  if (loading) {
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
  }

  if (canUse) return <>{children}</>;

  return <Page403 />;
}
