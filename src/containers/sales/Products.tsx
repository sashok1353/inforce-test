import { LinearProgress, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CommentModel, loadProducts, ProductsState } from "../../store/productSlice";
import { AppDispatch, AppState } from "../../store";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { useEffect } from "react";
import { closeDialog, DialogType, openDialog } from "../../store/dialogSlice";

const Products = () => {
  const dispatch: AppDispatch = useDispatch();
  const productsState = useSelector<AppState, ProductsState>((state) => state.product);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "count", headerName: "Amount", type: "number", width: 130 },
    {
      field: "width",
      headerName: "Width",
      type: "number",
      width: 130,
      valueFormatter: (value) => {
        return (value.getValue(value.id, "size") as unknown as { width: BigInt }).width;
      },
    },
    {
      field: "size",
      headerName: "Height",
      type: "number",
      width: 130,
      valueFormatter: (value) => {
        return (value.getValue(value.id, "size") as unknown as { height: BigInt }).height;
      },
    },
    { field: "weight", headerName: "Weight", width: 130 },
    {
      field: "comments",
      headerName: "Comments",
      width: 500,
      valueFormatter: (value) => {
        const comments = value.getValue(value.id, "comments") as unknown as CommentModel[];
        let commentStr = "";
        comments.forEach((comment) => (commentStr += comment.date.toISOString() + ": " + comment.description + ";"));
        return commentStr;
      },
    },
  ];

  useEffect(() => {
    if (productsState.error) dispatch(openDialog({ type: DialogType.ConnectionFailure }));
    else dispatch(closeDialog());
  }, [productsState.error]);

  return (
    <>
      {productsState.inProgress ? (
        <LinearProgress />
      ) : (
        <>
          <Paper style={{ height: "30%" }}>
            <DataGrid rows={productsState.products} columns={columns} pageSize={100} density={"comfortable"} autoHeight={true} />
          </Paper>
        </>
      )}
    </>
  );
};

export default Products;
