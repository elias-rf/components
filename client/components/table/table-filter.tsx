import React from "react";
import { IEvent, SchemaField, Where } from "../../../types";
import { whereUtil } from "../../lib/http/where-util";
import { Textbox } from "../textbox/textbox";

type TTableFilter = {
  schemaField: SchemaField;
  onWhere?: (event: IEvent) => void;
  where?: Where[];
};

export function TableFilter({ schemaField, where, onWhere }: TTableFilter) {
  const [inputValue, setInputValue] = React.useState(
    whereUtil.getValue(where || [], schemaField.field)
  );

  React.useEffect(() => {
    const newVlr = whereUtil.getValue(where || [], schemaField.field);
    if (inputValue !== newVlr) {
      console.log("Where alterado");
      setInputValue(newVlr);
    }
  }, [where]);

  function handleOnInput(event: IEvent) {
    if (onWhere)
      onWhere({
        name: schemaField.name,
        value: whereUtil.setUnique(where || [], schemaField.field, event.value),
        component: "Table",
        event: "where",
      });
  }

  return (
    <th key={schemaField.name}>
      <Textbox
        name={schemaField.field}
        value={inputValue}
        key={schemaField.field}
        className={"w-full border-2 border-gray-300 px-1"}
        onChange={(e) => setInputValue(e.value)}
        onInput={handleOnInput}
      />
    </th>
  );
}
