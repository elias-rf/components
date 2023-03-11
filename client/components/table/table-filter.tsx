import React from "react";
import { TEvent } from "../../../types";
import { whereUtil } from "../../lib/http/where-util";
import { Textbox } from "../form/textbox";
import { TEventTableFilter, TTableFilter } from "./table.types";

export function TableFilter({
  schemaField,
  where,
  onWhereEvent,
}: TTableFilter) {
  const [inputValue, setInputValue] = React.useState(
    whereUtil.getValue(where || [], schemaField.name)
  );

  React.useEffect(() => {
    const newVlr = whereUtil.getValue(where || [], schemaField.name);
    if (inputValue !== newVlr) {
      setInputValue(newVlr);
    }
  }, [where]);

  function handleOnInput(event: TEvent) {
    if (onWhereEvent) {
      const rsp: TEventTableFilter = {
        name: schemaField.name,
        value: whereUtil.setUnique(where || [], schemaField.name, event.value),
        component: "TableFilter",
        event: "onWhereEvent",
      };
      onWhereEvent(rsp);
    }
  }

  return (
    <th key={schemaField.name}>
      <Textbox
        name={schemaField.name}
        value={inputValue}
        key={schemaField.name}
        className={"w-full border-2 border-gray-300 px-1"}
        onChangeEvent={(e: TEvent) => setInputValue(e.value)}
        onInputEvent={handleOnInput}
      />
    </th>
  );
}
