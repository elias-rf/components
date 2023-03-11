import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: { onClickEvent: { action: "onClickEvent" } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Button",
  args: {
    size: "bs",
    color: "dark",
    name: "teste",
    children: "botão",
  },
  render: (args) => {
    return (
      <>
        <div className="space-x-2 space-y-2 ">
          <Button color="default">Default</Button>
          <Button color="alternative">Alternative</Button>
          <Button color="dark">Dark</Button>
          <Button color="light">Light</Button>
          <Button color="green">Green</Button>
          <Button color="red">Red</Button>
          <Button color="yellow">Yellow</Button>
          <Button color="purple">Purple</Button>
        </div>
        <div className="space-x-2 space-y-2 ">
          <Button
            disabled
            color="default"
          >
            Default
          </Button>
          <Button
            disabled
            color="alternative"
          >
            Alternative
          </Button>
          <Button
            disabled
            color="dark"
          >
            Dark
          </Button>
          <Button
            disabled
            color="light"
          >
            Light
          </Button>
          <Button
            disabled
            color="green"
          >
            Green
          </Button>
          <Button
            disabled
            color="red"
          >
            Red
          </Button>
          <Button
            disabled
            color="yellow"
          >
            Yellow
          </Button>
          <Button
            disabled
            color="purple"
          >
            Purple
          </Button>
        </div>
        <div className="space-x-2 space-y-2 ">
          <Button size="extraSmall">extraSmall</Button>
          <Button size="small">small</Button>
          <Button size="base">base</Button>
          <Button size="large">large</Button>
          <Button size="extraLarge">extraLarge</Button>
        </div>
      </>
    );
  },
};
