import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuIcon } from "./menu-icon";

export default {
  title: "Components/Menu/MenuIcon",
  component: MenuIcon,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
} as ComponentMeta<typeof MenuIcon>;

export const Default: ComponentStory<typeof MenuIcon> = (props) => {
  return (
    <>
      <MenuIcon {...props} />
    </>
  );
};

Default.args = {
  opened: true,
};
