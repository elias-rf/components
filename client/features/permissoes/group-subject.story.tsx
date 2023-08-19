import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { GroupSubject } from "./group-subject";

const meta: Meta<typeof GroupSubject> = {
  component: GroupSubject,
};

export default meta;
type Story = StoryObj<typeof GroupSubject>;

const GroupSubjectListStory = () => {
  const [state, setState] = React.useState({});

  return (
    <>
      <Box sx={{ border: "1px solid cyan" }}>
        <GroupSubject onState={setState} />
      </Box>
      <JsonViewer
        value={{
          state,
        }}
      />
    </>
  );
};

export const Default: Story = { render: () => <GroupSubjectListStory /> };
