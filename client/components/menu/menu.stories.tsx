import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IEvent } from "../../../types";
import { Menu } from "./menu";
import { MenuBody } from "./menu-body";
import { MenuGroup } from "./menu-group";
import { MenuItem } from "./menu-item";
import { MenuTitle } from "./menu-title";

export default {
  title: "Components/Menu/Menu",
  component: Menu,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof MenuItem> = (args: {
  onClick: (e: IEvent) => void;
}) => {
  return (
    <>
      <Menu {...args}>
        <MenuTitle {...args} to="/#">
          Titulo
        </MenuTitle>
        <MenuBody version="1.0">
          <MenuGroup title="Grupo 1">
            <MenuItem {...args} to="/11#">
              Item 11
            </MenuItem>
            <MenuItem {...args} to="/12#">
              Item 12
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="Grupo 2">
            <MenuItem {...args} to="/21#">
              Item 21
            </MenuItem>
            <MenuItem {...args} to="/22#">
              Item 22
            </MenuItem>
          </MenuGroup>
        </MenuBody>
      </Menu>
    </>
  );
};
