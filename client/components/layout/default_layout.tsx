import React from "react";
import { Menu } from "../menu/menu";
import { MenuBody } from "../menu/menu_body";
import { MenuGroup } from "../menu/menu_group";
import { MenuItem } from "../menu/menu_item";
import { MenuTitle } from "../menu/menu_title";

export type TDefaultLayoutProps = {
  children?: React.ReactNode;
  isAuthenticated: boolean;
  onClick: (e: React.MouseEvent) => void;
  menu: any;
};

/** componente layout com menu */
export function DefaultLayout({
  isAuthenticated,
  menu,
  onClick,
  children,
}: TDefaultLayoutProps) {
  function handleOnClick(e: React.MouseEvent) {
    onClick(e);
  }

  return (
    <section
      data-name="DefaultLayout"
      className={"flex flex-col h-screen lg:flex-row"}
    >
      <nav
        data-name="DefaultLayout_Menu"
        className={"print:hidden"}
      >
        <div className={"flex-initial"}>
          <Menu>
            <MenuTitle
              to={menu.title.to}
              onClick={handleOnClick}
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
                <div className={"pl-2"}>
                  <MenuItem
                    to={"/login"}
                    onClick={handleOnClick}
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
        className={"flex-auto overflow-auto"}
      >
        {children}
      </section>
    </section>
  );
}
