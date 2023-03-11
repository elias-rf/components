import { TEvent } from "../../../types";
import { Menu } from "../menu/menu";
import { TMenuItemEvent, TMenuTitleEvent } from "../menu/menu.types";
import { MenuBody } from "../menu/menu_body";
import { MenuGroup } from "../menu/menu_group";
import { MenuItem } from "../menu/menu_item";
import { MenuTitle } from "../menu/menu_title";

export type TDefaultLayoutEvent = TEvent & {
  component: "DefaultLayout";
  event: "onClickEvent";
};

export type TDefaultLayoutProps = {
  children?: React.ReactNode;
  isAuthenticated: boolean;
  onClickEvent: (e: TDefaultLayoutEvent) => void;
  menu: any;
};

/** componente layout com menu */
export function DefaultLayout({
  isAuthenticated,
  menu,
  onClickEvent,
  children,
}: TDefaultLayoutProps) {
  function handleOnClick({ value, event }: TMenuTitleEvent | TMenuItemEvent) {
    onClickEvent({
      name: "DefaultLayout",
      component: "DefaultLayout",
      value,
      event,
    });
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
              onClickEvent={handleOnClick}
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
                        onClickEvent={handleOnClick}
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
                    onClickEvent={handleOnClick}
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
