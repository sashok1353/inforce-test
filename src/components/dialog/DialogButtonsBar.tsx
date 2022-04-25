import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

interface DialogButtons {
  onClose: () => void;
  disable: boolean;
  submitName: string;
}

const DialogButtonsBar = ({ onClose, disable, submitName }: DialogButtons) => {
  return (
    <DialogActions color="">
      <Button onClick={onClose} variant="contained" color="default">
        Cancel
      </Button>
      <Button disabled={disable} variant="contained" type="submit" color="secondary">
        {submitName}
      </Button>
    </DialogActions>
  );
};

export default DialogButtonsBar;
