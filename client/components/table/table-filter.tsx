import React from "react";
import { TFieldDef, TWhere } from "../../../types";
import { whereUtil } from "../../lib/http/where-util";
import { Textbox } from "../form/textbox";

export type TTableFilter = {
  schemaField: TFieldDef;
  onWhere?: (event: any) => void;
  where?: TWhere[];
};

export function TableFilter({ schemaField, where, onWhere }: TTableFilter) {
  const [inputValue, setInputValue] = React.useState(
    whereUtil.getValue(where || [], schemaField.name)
  );

  React.useEffect(() => {
    const newVlr = whereUtil.getValue(where || [], schemaField.name);
    if (inputValue !== newVlr) {
      setInputValue(newVlr);
    }
  }, [where]);

  function handleOnInput(event: any) {
    if (onWhere) {
      const rsp: TTableFilter = {
        name: schemaField.name,
        value: whereUtil.setUnique(where || [], schemaField.name, event.value),
        component: "TableFilter",
        event: "onWhere",
      };
      onWhere(rsp);
    }
  }

  return (
    <th key={schemaField.name}>
      <Textbox
        name={schemaField.name}
        value={inputValue}
        key={schemaField.name}
        className={"w-full border-2 border-gray-300 px-1"}
        onChange={(e: any) => setInputValue(e.value)}
        onInput={handleOnInput}
      />
    </th>
  );
}
