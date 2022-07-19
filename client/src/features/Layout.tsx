import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DefaultLayout, LayoutAction, layoutActionTypes } from "../components";
import { menu } from "../menu";
import { authenticationService } from "../service/authentication.service";
import { userStore } from "../state/user-store";

export function Layout({ children }: { children?: any }) {
  const authenticated = userStore((state: any) => state.isAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    authenticationService.isAuthenticated();
  }, []);

  async function handleMenu(action: LayoutAction) {
    if (action.type === layoutActionTypes.navigate) {
      if (action.payload.to === "/logout") {
        await authenticationService.logout();
      }
      navigate(action.payload.to);
    }
  }

  return (
    <DefaultLayout
      menu={menu}
      dispatch={handleMenu}
      signOut={authenticationService.logout}
      isAuthenticated={authenticated}
    >
      <Outlet />
      {children}
    </DefaultLayout>
  );
}
