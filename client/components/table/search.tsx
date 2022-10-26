import React, { useState } from "react";
import { IEvent, Schema, SchemaField, Where } from "../../../types";
import { Badge } from "../badge";
import { Button } from "../button";
import { Select } from "../select/select";
import { Textbox } from "../textbox/textbox";

type SearchProps = {
  schema: Schema;
  where: Where[];
  onWhere: (event: IEvent) => void;
};

export function Search({ schema = [], where = [], onWhere }: SearchProps) {
  const [whr, setWhr] = useState<Where[]>([]); // where de trabalho
  const [fieldSelect, setFieldSelect] = useState(schema[0]?.field); // campo selecionado, default 1o campo.
  const [equalitySelect, setEqualitySelect] = useState("="); // igualdade selecionada, default =
  const [valueInput, setValueInput] = useState(""); // valor selecionado, default ""

  React.useEffect(() => {
    setWhr(where);
  }, [where]);

  // retorna uma lista de igualdades de acordo como o tipo do campo
  function getEqualitys(field: string) {
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

    const aux: SchemaField | undefined = schema.find(
      (item: { field: string }) => item.field === field
    );

    const tipo = aux?.type;

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
  function getFieldTitle(field: string) {
    const aux = schema.find((col: { field: string }) => col.field === field);
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

  function handleAdd() {
    let flag = true;
    whr.forEach((flt) => {
      if (flt[0] === fieldSelect && flt[1] === equalitySelect) {
        flt[2] = valueInput;
        flag = false;
      }
    });
    if (flag) whr.push([fieldSelect, equalitySelect, valueInput]);
    setWhr(whr);
    onWhere({
      name: "",
      component: "Search",
      value: whr,
      event: "onWhere",
    });
    setValueInput("");
  }

  function handleSelectField(event: IEvent) {
    setFieldSelect(event.value);
    if (Object.keys(getEqualitys(event.value)).includes(equalitySelect)) {
      return;
    }
    setEqualitySelect("=");
  }

  function handleInput(e: IEvent) {
    setValueInput(e.value);
  }

  function handleDel(idx: number) {
    const aux = [...whr];
    aux.splice(idx, 1);
    setWhr(aux);
    onWhere({
      name: "",
      component: "Search",
      value: aux,
      event: "onWhere",
    });
  }

  function handleEdit(idx: number) {
    const flt = [...whr[idx]];
    setFieldSelect(flt[0]);
    setEqualitySelect(flt[1]);
    setValueInput(flt[2]);
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {whr.map((item, idx) => (
          <div className="px-1 pb-1" key={idx}>
            <Badge
              onClose={() => handleDel(idx)}
              onClick={() => handleEdit(idx)}
            >
              {`${getFieldTitle(item[0])} ${getEqualityName(item[1])} ${
                item[2]
              }`}
            </Badge>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="self-center p-1">
          <Select
            value={fieldSelect}
            onChange={handleSelectField}
            style={{ width: "10rem" }}
          >
            {schema.map((column: { field: string; label?: string }) => (
              <option value={column.field} key={column.field}>
                {column.label || column.field}
              </option>
            ))}
          </Select>
        </div>
        <div className="self-center p-1">
          <Select
            value={equalitySelect}
            onChange={(e: IEvent) => setEqualitySelect(e.value)}
            style={{ width: "10rem" }}
          >
            {Object.entries(getEqualitys(fieldSelect)).map(
              ([key, value]: any) => (
                <option value={key} key={key}>
                  {value}
                </option>
              )
            )}
          </Select>
        </div>
        <div className="self-center p-1">
          <Textbox
            name="valor"
            value={valueInput}
            field={"valor"}
            onChange={handleInput}
          />
        </div>
        <div className="p-1">
          <Button size="xs" onClick={handleAdd}>
            Filtrar
          </Button>
        </div>
      </div>
    </div>
  );
}
