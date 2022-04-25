import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";

export interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  format?: (input: string | undefined) => string | undefined;
  normalize?: (value: string, prevValue: string) => string | undefined;
  onChange?: (event: any) => void;
  onFocus?: (event: any) => void;
  disabled?: boolean;
  defaultValue?: string;
}

interface ControlledTextFieldProps extends FormFieldProps {
  style?: any;
}

export const ControlledTextField = (props: ControlledTextFieldProps) => {
  const { control } = useFormContext();
  const { disabled, style, name, label, type, defaultValue } = props;

  return (
    <Controller
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field }) => <TextField margin="dense" fullWidth disabled={disabled} id={name} label={label} type={type} style={style} {...field} />}
      name={name}
      control={control}
    />
  );
};
