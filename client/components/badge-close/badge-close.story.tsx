import type { Meta, StoryObj } from "@storybook/react";
import { BadgeClose } from "./badge-close";

const meta: Meta<typeof BadgeClose> = {
  component: BadgeClose,
  argTypes: {
    onClick: { action: "onClickEvent" },
    onClose: { action: "onCloseEvent" },
  },
  args: {
    children: `Badge_1`,
  },
};

export default meta;
type Story = StoryObj<typeof BadgeClose>;

export const Default: Story = {
  render: (props: any) => {
    return (
      <>
        <BadgeClose onClick={props.onClick}>{props.children}</BadgeClose>
      </>
    );
  },
};

export const Closable: Story = {
  render: (props: any) => {
    return (
      <>
        <BadgeClose
          onClick={props.onClick}
          onClose={props.onClose}
        >
          {props.children}
        </BadgeClose>
      </>
    );
  },
};
