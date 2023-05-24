import type { Meta, StoryObj } from "@storybook/angular";
import { LayoutComponent } from "src/app/core/layout/layout.component";

const meta: Meta<LayoutComponent> = {
  component: LayoutComponent,
};

export default meta;
type Story = StoryObj<LayoutComponent>;

export const Default: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
