import type { TFormStatus } from "@/types";
import Button from "@mui/material/Button";
import { UseFormReturn } from "react-hook-form";

export type TButtonEditProps = {
  onClick?: () => void;
  form: UseFormReturn<any>;
  status: TFormStatus;
  onStatus: (status: TFormStatus) => void;
  sx?: any;
};
export const ButtonEdit = ({
  status,
  onStatus,
  form,
  onClick,
  sx,
}: TButtonEditProps) => {
  function handleButtonEdit() {
    if (onClick) onClick();
    form.reset();
    onStatus("edit");
  }

  return (
    <Button
      size="small"
      onClick={handleButtonEdit}
      variant="outlined"
      disabled={status !== "view"}
      sx={sx}
    >
      Editar
    </Button>
  );
};
