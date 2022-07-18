import { ComponentStory } from "@storybook/react";
import { SpinnerIcon } from "./spinner-icon";

export default {
  title: "SpinnerIcon",
  component: SpinnerIcon,
};

const Template: ComponentStory<typeof SpinnerIcon> = (props: any) => (
  <SpinnerIcon {...props} />
);

export const Default: ComponentStory<typeof SpinnerIcon> = Template.bind({});

Default.args = {
  show: true,
};
