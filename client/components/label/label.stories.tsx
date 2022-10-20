import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "./label";

export default {
  title: "Components/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = (props) => {
  return (
    <>
      <Label {...props} />
    </>
  );
};

Default.args = {
  name: "textbox1",
  children: "Label",
};
