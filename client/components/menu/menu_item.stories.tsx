import type { Meta, StoryObj } from "@storybook/react";
import { MenuGroup } from "./menu_group";

const meta: Meta<typeof MenuGroup> = {
  title: "Components/Menu/MenuItem",
  component: MenuGroup,
};

export default meta;
type Story = StoryObj<typeof MenuGroup>;

export const Primary: Story = {
  render: () => {
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
  },
};
