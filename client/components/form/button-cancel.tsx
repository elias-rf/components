import type { TFormStatus } from "@/types";
import Button from "@mui/material/Button";
import { UseFormReturn } from "react-hook-form";

export type TButtonCancelProps = {
  form: UseFormReturn<any>;
  status: TFormStatus;
  onStatus: (status: TFormStatus) => void;
  onClick?: () => void;
  sx?: any;
};

export const ButtonCancel = ({
  status,
  form,
  onStatus,
  onClick,
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
