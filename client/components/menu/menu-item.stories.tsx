import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuGroup } from "./menu-group";

export default {
  title: "Components/Menu/MenuGroup",
  component: MenuGroup,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
} as ComponentMeta<typeof MenuGroup>;

export const Default: ComponentStory<typeof MenuGroup> = () => {
  return (
    <>
      <MenuGroup title="group1">
        <div>Itens de menu 1</div>
      </MenuGroup>
      <MenuGroup title="group2">
        <div>Itens de menu 2</div>
      </MenuGroup>
    </>
  );
};
