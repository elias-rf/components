import { Action } from "../../..";
import Textbox from "../../features/ui/form/textbox";
import { Button } from "@/features/ui/form";
import type { Story } from "@ladle/react";
import React from "react";
import useQueryString from "./use-query-string";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default {
  title: "useQueryString",
};

export const Default: Story = (props: any) => {
  const [selected, setSelected] = useQueryString("selected");
  const [story, setStory] = useQueryString("story");

  function handleDispatch(action: Action) {
    console.log(action);
    if (action.payload.field === "selected") {
      setSelected(action.payload.value);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Textbox
            field="selected"
            value={selected}
            dispatch={handleDispatch}
          />
          <div>{selected}</div>
          <div>{selected}</div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
