import { TextInput } from "@mantine/core";
import { TFieldDef, TWhere } from "@mono/types";
import React from "react";
import { whereUtil } from "../../lib/http/where-util";

export type TTableFilter = {
  schemaField: TFieldDef;
  where?: TWhere[];
  onWhere?: (where: TWhere[]) => void;
};

export function TableFilter({ schemaField, where, onWhere }: TTableFilter) {
  const [inputValue, setInputValue] = React.useState(
    whereUtil.getValue(where || [], schemaField.name)
  );

  // React.useEffect(() => {
  //   const newVlr = whereUtil.getValue(where || [], schemaField.name);
  //   if (inputValue !== newVlr) {
  //     setInputValue(newVlr);
  //   }
  // }, [where]);

  function handleOnInput(event: any) {
    console.log(
      `🚀 ~ file: table-filter.tsx:26 ~ handleOnInput ~ event:`,
      event
    );

    event.stopPropagation();
    if (onWhere) {
      const rsp = whereUtil.setUnique(
        where || [],
        schemaField.name,
        inputValue
      );
      // onWhere(rsp);
    }
  }

  return (
    <th key={schemaField.name}>
      <TextInput
        name={schemaField.name}
        value={inputValue || ""}
        size="xs"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
        onInput={handleOnInput}
      />
    </th>
  );
}
