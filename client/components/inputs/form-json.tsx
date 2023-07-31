import { Grid2Props } from "@mui/material/Unstable_Grid2";
import {
  Checkbox,
  DateField,
  FormField,
  FormFields,
  NumberField,
  RadioButton,
  Select,
  Switch,
  TextField,
  TextFieldMultiple,
} from "./index";

type TComponentsProps = {
  component: any;
  label: string;
  required?: boolean;
  disabled?: boolean;
  value: any;
  onChange: any;
  onBlur: any;
  error: boolean;
  helperText: string;
  items?: string[];
  labels?: string[];
};

function Components(props: TComponentsProps) {
  const components = {
    Checkbox,
    FormField,
    FormFields,
    Switch,
    NumberField,
    TextField,
    TextFieldMultiple,
    Select,
    RadioButton,
    DateField,
  };
  type TComponent = keyof typeof components;
  const Component = components[props.component as TComponent] || TextField;

  return <Component {...props} />;
}

export type TFormJsonField = {
  name: string;
  component: string;
  label: string;
  defaultValue: any;
  required?: boolean;
  disabled?: boolean;
  items?: string[];
  labels?: string[];
  rules?: any;
  xs?: Grid2Props["xs"];
  sm?: Grid2Props["sm"];
  md?: Grid2Props["md"];
  lg?: Grid2Props["lg"];
  xl?: Grid2Props["xl"];
};

type TFormJson = {
  form: any;
  fields: TFormJsonField[];
};

export function FormJson({ form, fields }: TFormJson) {
  return (
    <>
      <FormFields>
        {fields.map((fld) => {
          return (
            <FormField
              key={fld.name}
              name={fld.name}
              control={form.control}
              defaultValue={fld.defaultValue}
              rules={fld.rules}
              xs={fld.xs}
              sm={fld.sm}
              md={fld.md}
              lg={fld.lg}
              xl={fld.xl}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }: any) => (
                <Components
                  component={fld.component}
                  label={fld.label}
                  required={fld.required}
                  disabled={fld.disabled}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error ? true : false}
                  helperText={error?.message}
                  items={fld.items}
                  labels={fld.labels}
                />
              )}
            />
          );
        })}
      </FormFields>
    </>
  );
}
