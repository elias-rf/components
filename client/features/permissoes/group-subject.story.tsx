import { Box } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { GroupSubjectList } from "./group-subject";

const meta: Meta<typeof GroupSubjectList> = {
  component: GroupSubjectList,
};

export default meta;
type Story = StoryObj<typeof GroupSubjectList>;

const GroupSubjectListStory = () => {
  const [state, setState] = React.useState({});

  return (
    <>
      <Box sx={{ border: "1px solid cyan" }}>
        <GroupSubjectList onState={setState} />
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
