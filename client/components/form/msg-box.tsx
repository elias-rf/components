import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const MsgBox = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: (resonse: boolean) => void;
}) => {
  return (
    <Dialog
      open={show}
      onClose={() => handleClose(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Tem certeza que deseja excluir?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Esta ação não poderá ser desfeita.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => handleClose(false)}
        >
          Cancelar
        </Button>
        <Button
          onClick={() => handleClose(true)}
          color="error"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
