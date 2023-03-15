import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: { onClick: { action: "onClickEvent" } },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Button",
  args: {
    size: "base",
    color: "dark",
    name: "teste",
    children: "botão",
  },
  render: () => {
    return (
      <>
        <div className="space-x-2 space-y-2 ">
          <Button
            color="primary"
            onClick={() => null}
          >
            Primary
          </Button>
          <Button
            color="secondary"
            onClick={() => null}
          >
            Secondary
          </Button>
          <Button
            color="dark"
            onClick={() => null}
          >
            Dark
          </Button>
          <Button
            color="light"
            onClick={() => null}
          >
            Light
          </Button>
          <Button
            color="green"
            onClick={() => null}
          >
            Green
          </Button>
          <Button
            color="red"
            onClick={() => null}
          >
            Red
          </Button>
          <Button
            color="yellow"
            onClick={() => null}
          >
            Yellow
          </Button>
          <Button
            color="purple"
            onClick={() => null}
          >
            Purple
          </Button>
        </div>
        <div className="space-x-2 space-y-2 ">
          <Button
            disabled
            color="primary"
            onClick={() => null}
          >
            Primary
          </Button>
          <Button
            disabled
            color="secondary"
            onClick={() => null}
          >
            Secondary
          </Button>
          <Button
            disabled
            color="dark"
            onClick={() => null}
          >
            Dark
          </Button>
          <Button
            disabled
            color="light"
            onClick={() => null}
          >
            Light
          </Button>
          <Button
            disabled
            color="green"
            onClick={() => null}
          >
            Green
          </Button>
          <Button
            disabled
            color="red"
            onClick={() => null}
          >
            Red
          </Button>
          <Button
            disabled
            color="yellow"
            onClick={() => null}
          >
            Yellow
          </Button>
          <Button
            disabled
            color="purple"
            onClick={() => null}
          >
            Purple
          </Button>
        </div>
        <div className="space-x-2 space-y-2 ">
          <Button
            size="extraSmall"
            onClick={() => null}
          >
            extraSmall
          </Button>
          <Button
            size="small"
            onClick={() => null}
          >
            small
          </Button>
          <Button
            size="base"
            onClick={() => null}
          >
            base
          </Button>
          <Button
            size="large"
            onClick={() => null}
          >
            large
          </Button>
          <Button
            size="extraLarge"
            onClick={() => null}
          >
            extraLarge
          </Button>
        </div>
      </>
    );
  },
};
