import type { Story } from "@ladle/react";
import { action } from "@ladle/react";
import { Badge, TBadgeProps } from "./badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: { dispatch: { action: "dispatch" } },
};

export const Default: Story<TBadgeProps> = (props: any) => {
  return (
    <>
      <Badge {...props} />
    </>
  );
};

Default.args = {
  name: "Badge1",
  children: `Badge_1`,
  large: false,
};
Default.argTypes = {
  color: {
    options: ["default", "red", "green", "yellow", "indigo", "purple", "pink"],
    control: { type: "select" },
  },
};

export const Clicable: Story<TBadgeProps> = (props: any) => {
  return (
    <>
      <Badge
        {...props}
        onClick={action("onClick")}
      />
    </>
  );
};

Clicable.args = {
  name: "Badge1",
  children: `Badge_1`,
  large: false,
};
Clicable.argTypes = {
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
};

export const Closable: Story<TBadgeProps> = (props: any) => {
  return (
    <>
      <Badge
        {...props}
        onClick={action("onClick")}
        onClose={action("onClose")}
      />
    </>
  );
};

Closable.args = {
  name: "Badge1",
  children: `Badge_1`,
  large: false,
};

Closable.argTypes = {
  color: {
    options: ["default", "red", "green", "yellow", "indigo", "purple", "pink"],
    control: { type: "select" },
  },
};
