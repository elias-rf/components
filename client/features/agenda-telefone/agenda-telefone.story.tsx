import { Box } from "@/client/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { AgendaTelefone } from "./agenda-telefone";

const meta: Meta<typeof AgendaTelefone> = {
  component: AgendaTelefone,
};

export default meta;
type Story = StoryObj<typeof AgendaTelefone>;

const AgendaTelefoneStory = () => {
  const [state, setState] = React.useState({});

  return (
    <>
      <Box sx={{ border: "1px solid cyan" }}>
        <AgendaTelefone onState={setState} />
      </Box>
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  );
};

export const Default: Story = { render: () => <AgendaTelefoneStory /> };
