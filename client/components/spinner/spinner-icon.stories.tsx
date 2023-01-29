import type { Meta, StoryObj } from "@storybook/react";
import { SpinnerIcon } from "./spinner-icon";

const meta: Meta<typeof SpinnerIcon> = {
  component: SpinnerIcon,
};

export default meta;
type Story = StoryObj<typeof SpinnerIcon>;

export const Default: Story = {
  name: "SpinnerIcon",
  args: {
    show: true,
    className: "text-4xl text-red-400",
  },
  render: (props: any) => <SpinnerIcon {...props} />,
};
