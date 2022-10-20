import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="flex space-x-2 space-y-2">
      <Button {...args}>{args.children}</Button>
    </div>
  );
};

Default.args = {
  size: "bs",
  color: "dark",
  name: "teste",
  children: "botão",
};
