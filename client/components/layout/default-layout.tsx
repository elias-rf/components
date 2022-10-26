import React from "react";
import { IEvent } from "../../../types";

import { Menu } from "../menu/menu";
import { MenuBody } from "../menu/menu-body";
import { MenuGroup } from "../menu/menu-group";
import { MenuItem } from "../menu/menu-item";
import { MenuTitle } from "../menu/menu-title";

export const layoutActionTypes = { logout: "LOGOUT", navigate: "NAVIGATE" };

type TDefaultLayoutProps = {
  children?: React.ReactNode;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
  onClick: (e: IEvent) => void;
  menu: any;
};

export function DefaultLayout({
  isAuthenticated,
  menu,
  onClick,
  children,
}: TDefaultLayoutProps) {
  function handleOnClick(event: IEvent) {
    onClick(event);
  }

  return (
    <section
      data-name="DefaultLayout"
      className="flex flex-col h-screen lg:flex-row"
    >
      <nav data-name="DefaultLayout_Menu" className="print:hidden">
        <div className="flex-initial">
          <Menu>
            <MenuTitle to={menu.title.to} onClick={handleOnClick}>
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
                        key={item.title}
                        onClick={handleOnClick}
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
                  <MenuItem to={"/login"} onClick={handleOnClick}>
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
