import { Box } from "@material-ui/core";
import Products from "./Products";

const ProductsView = () => (
  <Box height={"90vh"} display={"flex"} flexDirection={"column"}>
    <Products />
  </Box>
);

export default ProductsView;
