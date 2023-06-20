import type { Meta, StoryObj } from "@storybook/react";
import { Controles } from "./controles";

const meta: Meta<typeof Controles> = {
  component: Controles,
};

export default meta;

type Story = StoryObj<typeof Controles>;

export const Default: Story = {};
