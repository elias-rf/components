import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from "./badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: { onClick: { action: "onClick" }, onClose: { action: "onClose" } },
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (props) => {
  const { onClick, onClose, ...args } = props;
  return (
    <>
      <Badge {...args} />
    </>
  );
};

Default.args = {
  name: "Badge1",
  children: `Badge_1`,
  large: false,
};
Default.argTypes = {
  color: {
    options: ["default", "red", "green", "yellow", "indigo", "purple", "pink"],
    control: { type: "select" },
  },
};

export const Clicable: ComponentStory<typeof Badge> = (props: any) => {
  const { onClose, ...args } = props;

  return (
    <>
      <Badge {...args} />
    </>
  );
};

Clicable.args = {
  name: "Badge1",
  children: `Badge_1`,
  large: false,
};
Clicable.argTypes = {
  color: {
    options: [
      "default",
      "dark",
      "red",
      "green",
      "yellow",
      "indigo",
      "purple",
      "pink",
    ],
    control: { type: "select" },
  },
};

export const Closable: ComponentStory<typeof Badge> = (props: any) => {
  return (
    <>
      <Badge {...props} />
    </>
  );
};

Closable.args = {
  name: "Badge1",
  children: `Badge_1`,
  large: false,
};

Closable.argTypes = {
  color: {
    options: ["default", "red", "green", "yellow", "indigo", "purple", "pink"],
    control: { type: "select" },
  },
};
