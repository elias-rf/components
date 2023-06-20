import type { TFormStatus } from "@/types";
import Button from "@mui/material/Button";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { MsgBox } from "./msg-box";

export type TButtonDelProps = {
  onClick: () => void;
  form: UseFormReturn<any>;
  status: TFormStatus;
  onStatus: (status: TFormStatus) => void;
  sx?: any;
};

export const ButtonDel = ({
  form,
  status,
  onStatus,
  onClick,
  sx,
}: TButtonDelProps) => {
  const [showConfirm, setShowConfirm] = React.useState(false);

  function handleButtonDel() {
    setShowConfirm(true);
  }

  async function handleButtonDelConfirm(confirm: boolean) {
    setShowConfirm(false);
    if (confirm) {
      onClick();
      form.reset();
      onStatus("view");
    }
  }

  return (
    <>
      <Button
        size="small"
        onClick={handleButtonDel}
        variant="outlined"
        color="error"
        disabled={status !== "view"}
        sx={sx}
      >
        Excluir
      </Button>
      <MsgBox
        show={showConfirm}
        handleClose={handleButtonDelConfirm}
      />
    </>
  );
};
