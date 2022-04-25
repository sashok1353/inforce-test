import { useSelector } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import { Box, createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AppState } from "../../store";

import { DialogState, DialogType } from "../../store/dialogSlice";
import ConnectionErrorDialogRedux from "../system/ConnectionErrorDialog";
import ProductForm from "../product/ProductForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogTitle: {
      background: theme.palette.primary.main,
      color: theme.palette.text.primary,
      textAlign: "center",
      padding: 4,
    },
  })
);

interface DialogElement {
  title?: string | undefined;
  component: JSX.Element;
}

const dialogTypesMapping = new Map<DialogType, DialogElement>([
  [DialogType.ConnectionFailure, { title: "serverUnreachable", component: <ConnectionErrorDialogRedux /> }],
  [DialogType.ProductCreation, { title: "Add Product", component: <ProductForm /> }],
]);

const ModalDialog = (): JSX.Element => {
  const classes = useStyles();
  const { isOpen, type, subTitle } = useSelector<AppState, DialogState>((state) => state.dialog);
  const { title, component } = dialogTypesMapping.get(type)!;

  return (
    <div>
      <Dialog open={isOpen} maxWidth="sm">
        {title && (
          <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
            <Box>
              <Typography variant="h6">{title}</Typography>
              <div>
                <Typography variant="subtitle2">{subTitle}</Typography>
              </div>
            </Box>
          </DialogTitle>
        )}
        <DialogContent>{component}</DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalDialog;
