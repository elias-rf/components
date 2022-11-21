import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SpinnerIcon } from "./spinner-icon";

export default {
  title: "Components/SpinnerIcon",
  component: SpinnerIcon,
} as ComponentMeta<typeof SpinnerIcon>;

export const Default: ComponentStory<typeof SpinnerIcon> = (props: any) => (
  <SpinnerIcon {...props} />
);

Default.args = {
  show: true,
  className: "text-4xl text-red-400",
};

Default.storyName = "SpinnerIcon";
