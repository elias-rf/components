import type { Meta, StoryObj } from "@storybook/react";
import { ChevronIcon } from "./chevron-icon";

const meta: Meta<typeof ChevronIcon> = {
  component: ChevronIcon,
};

export default meta;
type Story = StoryObj<typeof ChevronIcon>;

export const Default: Story = {
  argTypes: {
    rotate: {
      options: [0, 90, 180, 270],
      control: { type: "radio" },
    },
  },
  args: {
    rotate: 0,
  },
  render: (props: any) => <ChevronIcon {...props} />,
};
