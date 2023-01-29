import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    onClickEvent: { action: "onClickEvent" },
    onCloseEvent: { action: "onCloseEvent" },
    color: {
      options: [
        "default",
        "dark",
        "red",
        "green",
        "yellow",
        "indigo",
        "purple",
        "pink",
      ],
      control: { type: "select" },
    },
  },
  args: {
    name: "Badge1",
    children: `Badge_1`,
    large: false,
    color: "default",
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: (props: any) => {
    return (
      <>
        <Badge
          name={props.name}
          large={props.large}
          color={props.color}
          className={props.className}
        >
          {props.children}
        </Badge>
      </>
    );
  },
};

export const Clicable: Story = {
  render: (props: any) => {
    return (
      <>
        <Badge
          name={props.name}
          large={props.large}
          color={props.color}
          onClickEvent={props.onClickEvent}
          className={props.className}
        >
          {props.children}
        </Badge>
      </>
    );
  },
};

export const Closable: Story = {
  render: (props: any) => {
    return (
      <>
        <Badge
          name={props.name}
          large={props.large}
          color={props.color}
          onClickEvent={props.onClickEvent}
          onCloseEvent={props.onCloseEvent}
          className={props.className}
        >
          {props.children}
        </Badge>
      </>
    );
  },
};
