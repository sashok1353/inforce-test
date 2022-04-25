import { Container, createStyles, Divider, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { closeDialog } from "../../store/dialogSlice";
import DialogButtonsBar from "../dialog/DialogButtonsBar";
import getFields from "./productFormFields";
import { FormProvider, useForm } from "react-hook-form";
import { Product, saveProduct } from "../../store/productSlice";
import { AppDispatch } from "../../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      background: theme.palette.primary.light,
    },
  })
);

const ProductForm = () => {
  const formMethods = useForm<Product>();
  const { handleSubmit } = formMethods;
  const dispatch: AppDispatch = useDispatch();
  const onClose = () => dispatch(closeDialog());
  const formFields = getFields();
  const classes = useStyles();

  return (
    <FormProvider {...formMethods}>
      <Paper className={classes.paper} elevation={3}>
        <form
          autoComplete="off"
          onSubmit={handleSubmit((product) => {
            return dispatch(saveProduct(product));
          })}>
          <Container>
            <Grid container spacing={1}>
              {formFields}
            </Grid>
          </Container>
          <Divider style={{ marginTop: 4, marginBottom: 8 }} variant="fullWidth" />
          <DialogButtonsBar disable={false} onClose={onClose} submitName="save" />
        </form>
      </Paper>
    </FormProvider>
  );
};

export default ProductForm;
