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

type TDefaultLayoutProps = {
  children?: React.ReactNode;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  dispatch: (action: LayoutAction) => void;
  menu: any;
};

export function DefaultLayout({
  isAuthenticated,
  dispatch,
  menu,
  children,
}: TDefaultLayoutProps) {
  return (
    <section
      data-name="DefaultLayout"
      className="flex flex-col h-screen lg:flex-row"
    >
      <nav
        data-name="DefaultLayout_Menu"
        className="print:hidden"
      >
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
      </nav>
      <section
        data-name="DefaultLayout_Main"
        className="flex-auto overflow-auto"
      >
        {children}
      </section>
    </section>
  );
}
