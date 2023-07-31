import { Box } from "@/client/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { Usuario } from "./usuario";

const meta: Meta<typeof Usuario> = {
  component: Usuario,
};

export default meta;
type Story = StoryObj<typeof Usuario>;

const UsuarioStory = () => {
  const [state, setState] = React.useState({});

  return (
    <>
      <Box sx={{ border: "1px solid cyan" }}>
        <Usuario onState={setState} />
      </Box>
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  );
};

export const Default: Story = { render: () => <UsuarioStory /> };
