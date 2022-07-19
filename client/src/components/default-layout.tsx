import React from "react";

import { Menu } from "./menu";
import { MenuBody } from "./menu-body";
import { MenuGroup } from "./menu-group";
import { MenuItem } from "./menu-item";
import { MenuTitle } from "./menu-title";

export const layoutActionTypes = { logout: "LOGOUT", navigate: "NAVIGATE" };

export type LayoutAction =
  | {
      type: typeof layoutActionTypes.logout;
      payload: {};
    }
  | {
      type: typeof layoutActionTypes.navigate;
      payload: { to: string };
    };

type DefaultLayoutProps = {
  children?: React.ReactNode;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  dispatch: (action: LayoutAction) => void;
  menu: any;
};

export function DefaultLayout({
  signOut,
  isAuthenticated,
  dispatch,
  menu,
  children,
}: DefaultLayoutProps) {
  async function logoutHandle() {
    await signOut();
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="print:hidden">
        <div className="flex-initial">
          <Menu>
            <MenuTitle
              to={menu.title.to}
              dispatch={dispatch}
            >
              {menu.title.title}
            </MenuTitle>
            {isAuthenticated ? (
              <MenuBody version={menu.versao}>
                {menu.groups.map((group: any) => (
                  <MenuGroup
                    icon={group.icon}
                    title={group.title}
                    key={group.title}
                  >
                    {group.items.map((item: any) => (
                      <MenuItem
                        to={item.to}
                        dispatch={dispatch}
                        key={item.title}
                      >
                        {item.title}
                      </MenuItem>
                    ))}
                  </MenuGroup>
                ))}
              </MenuBody>
            ) : (
              <MenuBody version={menu.versao}>
                <div className="pl-2">
                  <MenuItem
                    to={"/login"}
                    dispatch={dispatch}
                  >
                    Login
                  </MenuItem>
                </div>
              </MenuBody>
            )}
          </Menu>
        </div>
      </div>
      <main className="flex-auto overflow-auto">{children}</main>
    </div>
  );
}
