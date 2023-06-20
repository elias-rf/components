import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MuiTableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import { TColumn } from "./table";

export type TTableHeadFilterProps = {
  col: TColumn;
};

export function TableHeadFilter({ col, ...rest }: TTableHeadFilterProps) {
  return (
    <MuiTableCell
      variant="head"
      padding="none"
    >
      <TextField
        fullWidth
        value={""}
        name={col.name}
        variant="standard"
        size="small"
        hiddenLabel
        InputProps={{
          style: { fontSize: 14, border: "solid 1px #ddd" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 12 }} />
            </InputAdornment>
          ),
        }}
        {...rest}
      />
    </MuiTableCell>
  );
}
