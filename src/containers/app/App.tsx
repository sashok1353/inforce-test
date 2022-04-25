import ModalDialog from "../../components/dialog/ModalDialog";
import ProductsView from "../sales/ProductsView";
import { Button, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { DialogType, openDialog } from "../../store/dialogSlice";

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ModalDialog />
      <ProductsView />
      <Paper>
        <Button onClick={() => dispatch(openDialog({ type: DialogType.ProductCreation }))} name="Add Product">
          Add Product
        </Button>
      </Paper>
    </>
  );
};

export default App;
