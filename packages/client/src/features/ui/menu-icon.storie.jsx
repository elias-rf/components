import React from "react";
import { action } from "@storybook/addon-actions";
import MenuIcon from "./menu/menu-icon";

export default {
  title: "Menu/MenuIcon",
  component: MenuIcon,
  parameters: { controls: { hideNoControlsWarning: true } },
  argTypes: {
    opened: {
      name: "opened",
      description: "flag",
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args) => <MenuIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  opened: true,
};
