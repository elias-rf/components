import { Meta, StoryObj } from "@storybook/react";
import { EstInt } from "./est_int";

const meta: Meta<typeof EstInt> = {
  component: EstInt,
};
export default meta;
type Story = StoryObj<typeof EstInt>;

export const Est_Int: Story = {
  render: () => {
    return <EstInt />;
  },
};
