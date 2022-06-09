import t from "prop-types";
import React, { useState } from "react";
import { Schema, SchemaField, Where } from "../../../..";
import Badge from "../badge";
import Button, { ButtonAction } from "../form/button";
import Select, { SelectAction } from "../form/select";
import Textbox, { TextboxAction } from "../form/textbox";

export const searchActionTypes: { where: "WHERE" } = { where: "WHERE" };

export type SearchAction = {
  type: typeof searchActionTypes.where;
  payload: Where[];
};

type SearchProps = {
  schema: Schema;
  where: Where[];
  dispatch: (action: SearchAction) => void;
};

function createWhere(where: Where[]) {
  return { type: searchActionTypes.where, payload: where };
}

export default function Search({
  schema: { fields },
  where = [],
  dispatch,
}: SearchProps) {
  const [whr, setWhr] = useState<Where[]>([]); // where de trabalho
  const [fieldSelect, setFieldSelect] = useState(fields[0]?.field); // campo selecionado, default 1o campo.
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

    const aux: SchemaField | undefined = fields.find(
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
    const aux = fields.find((col: { field: string }) => col.field === field);
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

  function handleAdd(action: ButtonAction) {
    let flag = true;
    whr.forEach((flt) => {
      if (flt[0] === fieldSelect && flt[1] === equalitySelect) {
        flt[2] = valueInput;
        flag = false;
      }
    });
    if (flag) whr.push([fieldSelect, equalitySelect, valueInput]);
    setWhr(whr);
    dispatch(createWhere(whr));
    setValueInput("");
  }

  function handleSelectField(action: SelectAction) {
    setFieldSelect(action.payload.value);
    if (
      Object.keys(getEqualitys(action.payload.value)).includes(equalitySelect)
    ) {
      return;
    }
    setEqualitySelect("=");
  }

  function handleInput(action: TextboxAction) {
    setValueInput(action.payload.value);
  }

  function handleDel(idx: number) {
    const aux = [...whr];
    aux.splice(idx, 1);
    setWhr(aux);
    dispatch(createWhere(aux));
  }

  function handleEdit(idx: number) {
    const flt = [...whr[idx]];
    // handleDel(idx);
    // setWhr(whr);
    setFieldSelect(flt[0]);
    setEqualitySelect(flt[1]);
    setValueInput(flt[2]);
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {whr.map((item, idx) => (
          <div
            className="px-1 pb-1"
            key={idx}
          >
            <Badge
              onClose={() => handleDel(idx)}
              onClick={() => handleEdit(idx)}
            >
              {getFieldTitle(item[0]) +
                " " +
                getEqualityName(item[1]) +
                " " +
                item[2]}
            </Badge>
          </div>
        ))}
      </div>

      <div className="flex">
        <div className="self-center p-1">
          <Select
            value={fieldSelect}
            dispatch={handleSelectField}
            style={{ width: "10rem" }}
          >
            {fields.map((column: { field: string; label?: string }) => (
              <option
                value={column.field}
                key={column.field}
              >
                {column.label || column.field}
              </option>
            ))}
          </Select>
        </div>
        <div className="self-center p-1">
          <Select
            value={equalitySelect}
            dispatch={(action: SelectAction) =>
              setEqualitySelect(action.payload.value)
            }
            style={{ width: "8rem" }}
          >
            {Object.entries(getEqualitys(fieldSelect)).map(
              ([key, value]: any) => (
                <option
                  value={key}
                  key={key}
                >
                  {value}
                </option>
              )
            )}
          </Select>
        </div>
        <div className="self-center p-1">
          <Textbox
            value={valueInput}
            field={"valor"}
            dispatch={handleInput}
          />
        </div>
        <div className="p-1">
          <Button dispatch={handleAdd}>Filtrar</Button>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  schema: t.shape({
    fields: t.arrayOf(
      t.shape({
        field: t.string.isRequired,
        label: t.string.isRequired,
        type: t.string,
      }).isRequired
    ).isRequired,
  }),
  status: t.shape({
    where: t.arrayOf(t.array),
  }),
  onWhere: t.func,
};
