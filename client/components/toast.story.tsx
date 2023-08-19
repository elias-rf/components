import { Button } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Toast } from "./toast";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

function ToastStory({ open }: any) {
  const [show, setShow] = React.useState<boolean>(open);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show</Button>
      <Toast
        open={show}
        onClose={() => setShow(false)}
        message="This is a toast message."
      />
    </>
  );
}

export const Default: Story = {
  render: () => <ToastStory />,
};
