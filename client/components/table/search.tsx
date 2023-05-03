import { TFieldDef, TWhere } from "@/types";
import { Button, Select, Space, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { BadgeClose } from "../badge-close";

type TSearchProps = {
  schema: TFieldDef[];
  where: TWhere[];
  onWhere: (event: TWhere[]) => void;
};

// retorna uma lista de igualdades de acordo como o tipo do campo
function getEqualitys(field: string, schema: TFieldDef[]) {
  const equalitys: any = {
    "=": "igual a",
    "<": "menor que",
    "<=": "menor ou igual",
    ">": "maior que",
    ">=": "maior ou igual",
    "*abc*": "contêm",
    "abc*": "começa com",
    "*abc": "termina com",
    null: "(vazio)",
  };

  const aux: TFieldDef | undefined = schema.find(
    (item: { name: string }) => item.name === field
  );

  const tipo = aux?.typeField;

  switch (tipo) {
    case "boolean":
      return { "=": "igual a" };
    case "string":
      // eslint-disable-next-line no-case-declarations
      const rsp = { ...equalitys };
      delete rsp["<"];
      delete rsp["<="];
      delete rsp[">"];
      delete rsp[">="];
      return rsp;
    default:
      return equalitys;
  }
}

// retorna o nome do campo
function getFieldTitle(field: string, schema: TFieldDef[]) {
  const aux = schema.find((col: { name: string }) => col.name === field);
  const rsp = aux?.label;
  return rsp || "";
}

// retorna o nome da igualdade
function getEqualityName(equality: string) {
  let rsp = equality;
  if (rsp === "like") {
    rsp = "⊂";
  }
  return rsp || "";
}

export function Search({ schema = [], where = [], onWhere }: TSearchProps) {
  const [whr, setWhr] = useState<TWhere[]>([]); // where de trabalho
  const [fieldSelect, setFieldSelect] = useState(schema[0]?.name); // campo selecionado, default 1o campo.
  const [equalitySelect, setEqualitySelect] = useState<string>("="); // igualdade selecionada, default =
  const [valueInput, setValueInput] = useState(""); // valor selecionado, default ""

  React.useEffect(() => {
    setWhr(where);
  }, [where]);

  function handleAdd() {
    let flag = true;
    const response = [...whr];
    response.forEach((flt) => {
      if (flt[0] === fieldSelect && flt[1] === equalitySelect) {
        flt[2] = valueInput;
        flag = false;
      }
    });
    if (flag) response.push([fieldSelect, equalitySelect, valueInput]);
    setWhr(response);
    onWhere(response);
    setValueInput("");
  }

  function handleSelectField(value: string) {
    setFieldSelect(value);
    if (Object.keys(getEqualitys(value, schema)).includes(equalitySelect)) {
      return;
    }
    setEqualitySelect("=");
  }

  function handleInput(e: any) {
    setValueInput(e.currentTarget.value);
  }

  function handleDel(idx: number) {
    const aux = [...whr];
    aux.splice(idx, 1);
    setWhr(aux);
    onWhere(aux);
  }

  function handleEdit(idx: number) {
    const flt = [...whr[idx]];

    setFieldSelect(flt[0]);
    setEqualitySelect(flt[1]);
    setValueInput(flt[2]);
  }

  return (
    <div>
      <div className={"flex flex-wrap"}>
        {whr.map((item, idx) => (
          <div
            className={"px-1 pb-1"}
            key={idx}
          >
            <BadgeClose
              onClose={() => handleDel(idx)}
              onClick={() => handleEdit(idx)}
              variant="outline"
              color="gray"
            >
              {`${getFieldTitle(item[0], schema)} ${getEqualityName(item[1])} ${
                item[2]
              }`}
            </BadgeClose>
          </div>
        ))}
      </div>

      <div className={"flex"}>
        <Select
          value={fieldSelect}
          onChange={handleSelectField}
          data={schema.map(
            ({ name, label }: { name: string; label?: string }) => ({
              value: name,
              label: label || name,
            })
          )}
        ></Select>
        <Space w={"xs"} />
        <Select
          value={equalitySelect}
          onChange={(value) => setEqualitySelect(value || "")}
          data={Object.entries(getEqualitys(fieldSelect, schema)).map(
            ([key, value]: any) => ({ value: key, label: value })
          )}
        ></Select>
        <Space w={"xs"} />
        <TextInput
          name="valor"
          value={valueInput}
          onChange={handleInput}
        />
        <Space w={"xs"} />
        <Button
          onClick={handleAdd}
          variant="outline"
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
}
