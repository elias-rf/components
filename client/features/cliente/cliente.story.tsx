import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { Cliente } from "./cliente";

const meta: Meta<typeof Cliente> = {
  component: Cliente,
};

export default meta;
type Story = StoryObj<typeof Cliente>;

const ClienteStory = () => {
  const [state, setState] = React.useState({});

  return (
    <>
      <Cliente onState={setState} />
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  );
};

export const Default: Story = { render: () => <ClienteStory /> };
