import { Button } from "@mui/material";
import type { TFormStatus } from "@/types";
import { UseFormReturn } from "react-hook-form";

export type TButtonCancelProps = {
  form: UseFormReturn<any>;
  onClick?: () => void;
  onStatus: (status: TFormStatus) => void;
  status: TFormStatus;
  sx?: any;
};

export const ButtonCancel = ({
  form,
  onClick,
  onStatus,
  status,
  sx,
}: TButtonCancelProps) => {
  function handleButtonCancel() {
    if (onClick) onClick();
    form.reset();
    onStatus("view");
  }

  return (
    <Button
      size="small"
      onClick={handleButtonCancel}
      variant="outlined"
      disabled={status === "view"}
      sx={sx}
    >
      Cancelar
    </Button>
  );
};
