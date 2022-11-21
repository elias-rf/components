import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuBody } from "./menu_body";

export default {
  title: "Components/Menu/MenuBody",
  component: MenuBody,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
} as ComponentMeta<typeof MenuBody>;

export const Default: ComponentStory<typeof MenuBody> = (props) => {
  return (
    <>
      <MenuBody {...props}>
        <div>Itens de menu</div>
      </MenuBody>
    </>
  );
};

Default.args = {
  version: "1.0",
};
