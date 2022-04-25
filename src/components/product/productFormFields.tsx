import { FormFieldProps, ControlledTextField } from "../common/ControlledTextField";
import { Grid } from "@material-ui/core";

const formFields: FormFieldProps[] = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "imageUrl",
    label: "Image URL",
  },
];

const getFields = () => {
  return formFields.map((fieldProps: FormFieldProps) => {
    return (
      <Grid item key={`${fieldProps.name}.grid`}>
        <ControlledTextField key={fieldProps.name} {...fieldProps} />
      </Grid>
    );
  });
};

export default getFields;
