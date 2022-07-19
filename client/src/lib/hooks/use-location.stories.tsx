import type { Story } from "@ladle/react";
import React from "react";
import { Action } from "../../../../types";
import { Button } from "../../components";
import useLocation from "./use-location";

export default {
  title: "useLocation",
};

export const Default: Story = (props: any) => {
  const loc1 = useLocation();
  const loc2 = useLocation();
  const [selected, setSelected] = React.useState("ok");

  function handleDispatch(action: Action) {
    console.log(action);
    if (action.payload.field === "selected") {
      setSelected(action.payload.value);
    }
  }

  return (
    <>
      <div>Location 1</div>
      <Button dispatch={() => loc1.replace("?story=uselocation--default&v1=1")}>
        V1=1
      </Button>
      <Button dispatch={() => loc1.replace("?story=uselocation--default&v2=2")}>
        V2=2
      </Button>
      <div>{loc1.pathname}</div>
      <div>{loc1.search}</div>
      <div>Location 2</div>
      <Button dispatch={() => loc2.replace("?story=uselocation--default&v1=1")}>
        V1=1
      </Button>
      <Button dispatch={() => loc2.replace("?story=uselocation--default&v2=2")}>
        V2=2
      </Button>
      <div>{loc2.pathname}</div>
      <div>{loc2.search}</div>
    </>
  );
};
