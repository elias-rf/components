import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from "./badge";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    onClickEvent: { action: "onClick" },
    onCloseEvent: { action: "onClose" },
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
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (props: any) => {
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
};

export const Clicable: ComponentStory<typeof Badge> = (props: any) => {
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
};

export const Closable: ComponentStory<typeof Badge> = (props: any) => {
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
};
