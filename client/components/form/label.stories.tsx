import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "./label";

export default {
  title: "Components/Form/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (args) => {
  return (
    <>
      <Label {...args} />
    </>
  );
};

Default.args = {
  name: "textbox1",
  children: "Label",
};

Default.storyName = "Label";
