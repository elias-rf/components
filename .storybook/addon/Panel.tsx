import { AddonPanel } from "@storybook/components";
import { STORY_CHANGED } from "@storybook/core-events";
import React from "react";
import { EVENT_ID } from "./constants";

interface PanelProps {
  active: boolean;
}

const MyPanel = (props: any) => {
  const [state, setState] = React.useState("ok");
  function onEvent(e) {
    console.log(e);
  }

  function onChange(e) {
    console.log(e);
  }

  React.useEffect(() => {
    props.api.on(EVENT_ID, onEvent);
    props.api.on(STORY_CHANGED, onChange);
    return () => {
      props.api.off(EVENT_ID, onEvent);
      props.api.off(STORY_CHANGED, onChange);
    };
  });
  return <div>Addon: {state}</div>;
};

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <MyPanel {...props} />
    </AddonPanel>
  );
};
