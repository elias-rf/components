import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import { TColumn } from "./grid";

export type TGridHeadFilterProps = {
  col: TColumn;
};

export function GridHeadFilter({ col, ...rest }: TGridHeadFilterProps) {
  return (
    <TableCell
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
    </TableCell>
  );
}
