import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu } from "./menu";
import { MenuBody } from "./menu_body";
import { MenuGroup } from "./menu_group";
import { MenuItem } from "./menu_item";
import { MenuTitle } from "./menu_title";

export default {
  title: "Components/Menu/Menu",
  component: Menu,
  subcomponents: { MenuTitle, MenuItem },
  argTypes: { onClickEvent: { action: "onClick" } },
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof MenuTitle> = (args: any) => {
  function handleOnClickEvent(event: React.MouseEvent) {
    args.onClickEvent(event);
  }

  return (
    <>
      <Menu {...args}>
        <MenuTitle
          onClick={handleOnClickEvent}
          to="/#"
        >
          Titulo
        </MenuTitle>
        <MenuBody version="1.0">
          <MenuGroup title="Grupo 1">
            <MenuItem
              onClick={handleOnClickEvent}
              to="/11#"
            >
              Item 11
            </MenuItem>
            <MenuItem
              onClick={handleOnClickEvent}
              to="/12#"
            >
              Item 12
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="Grupo 2">
            <MenuItem
              onClick={handleOnClickEvent}
              to="/21#"
            >
              Item 21
            </MenuItem>
            <MenuItem
              onClick={handleOnClickEvent}
              to="/22#"
            >
              Item 22
            </MenuItem>
          </MenuGroup>
        </MenuBody>
      </Menu>
    </>
  );
};

Default.storyName = "Menu";
