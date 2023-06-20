import { TWhere } from "@/types";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";

type TSearchProps = {
  schema: { name: string; typeField?: string; label: string }[];
  where: TWhere[];
  onWhere: (event: TWhere[]) => void;
};

// retorna uma lista de igualdades de acordo como o tipo do campo
function getEqualitys(
  field: string,
  schema: { name: string; typeField?: string }[]
) {
  const equalitys: any = {
    "=": "igual a",
    "<": "menor que",
    "<=": "menor ou igual",
    ">": "maior que",
    ">=": "maior ou igual",
    "?abc?": "contêm",
    "abc?": "começa com",
    "?abc": "termina com",
    "-": "(vazio)",
  };

  const aux = schema.find((item: { name: string }) => item.name === field);

  const tipo = aux?.typeField || "string";

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
function getFieldTitle(
  field: string,
  schema: { name: string; label: string }[]
) {
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

  function handleSelectField(event: SelectChangeEvent) {
    const value = event.target.value;
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
    <Grid
      container
      spacing={1}
      direction={"column"}
    >
      <Grid
        container
        spacing={1}
      >
        {whr.map((item, idx) => (
          <Grid key={idx}>
            <Chip
              size="small"
              label={`${getFieldTitle(item[0], schema)} ${getEqualityName(
                item[1]
              )} ${item[2]}`}
              onDelete={() => handleDel(idx)}
              onClick={() => handleEdit(idx)}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={1}
        alignItems="center"
      >
        <Grid
          xs={12}
          sm={3}
        >
          <Select
            label="Campo"
            value={fieldSelect}
            onChange={handleSelectField}
            size="small"
            fullWidth
          >
            {schema.map(({ name, label }: { name: string; label?: string }) => (
              <MenuItem
                value={name}
                key={name}
              >
                {label || name}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={3}
        >
          <Select
            label="Igualdade"
            value={equalitySelect}
            size="small"
            fullWidth
            onChange={(event) => setEqualitySelect(event.target.value || "")}
          >
            {Object.entries(getEqualitys(fieldSelect, schema)).map(
              ([key, value]: any) => (
                <MenuItem
                  value={key}
                  key={key}
                >
                  {value}
                </MenuItem>
              )
            )}
          </Select>
        </Grid>
        <Grid
          xs={12}
          sm={4}
        >
          <TextField
            label="Valor"
            name="valor"
            size="small"
            value={valueInput}
            onChange={handleInput}
            fullWidth
          />
        </Grid>
        <Grid xs={2}>
          <Button
            onClick={handleAdd}
            variant="outlined"
            fullWidth
          >
            Filtrar
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
