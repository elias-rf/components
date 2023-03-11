import type { Meta, StoryObj } from "@storybook/react";
import { EstExt } from "./est_ext";

const meta: Meta<typeof EstExt> = {
  component: EstExt,
};
export default meta;
type Story = StoryObj<typeof EstExt>;

export const Est_Ext: Story = {
  render: () => {
    return <EstExt dia="2020-01-01" />;
  },
};
