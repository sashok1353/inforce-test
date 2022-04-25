import { Box, createStyles, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    fieldsWrapper: {
      flexDirection: "column",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      [theme.breakpoints.up("sm")]: {
        width: 500,
      },
    },
  })
);

const ConnectionErrorDialog = () => {
  const classes = useStyles();

  return (
    <Box className={classes.fieldsWrapper}>
      <Typography variant="h6">No connection to server</Typography>
    </Box>
  );
};

export default ConnectionErrorDialog;
