import React from "react";
import { useFormContext } from "./form.context";

export type TFieldProps = {
  name: string;
  validate?: (value: any) => string | undefined;
  field: (props: { getInputProps: () => any }) => React.ReactNode;
};

/**
 * Renders a form field based on the given props.
 *
 * @param {object} props - The props object.
 * @param {string} props.name - The name of the field.
 * @param {function} [props.validate] - The validation function for the field value.
 * @param {function} props.field - The function that renders the field component.
 * @return {JSX.Element} The rendered field component.
 */
export const Field = ({ name, validate, field }: TFieldProps) => {
  const form = useFormContext();
  const [value, setValue] = React.useState(form.values[name] || "");
  const [dispInput, setDispInput] = React.useState(false);
  const error = form.errors[name] !== undefined;

const setError = (value) => {
  const err = validate && validate(value || "");
    form.setErrors({ [name]: err });
}

  React.useEffect(() => {
    setValue(form.values[name] || "");
  }, [name, form.values]);

  const setFormValue = (newValue: any) => {
    form.setValues({ [name]: newValue });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    setError(e.currentTarget.value)
    if (dispInput) setDispInput(false);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    setError(e.currentTarget.value)
    if (!dispInput) {
      setFormValue(e.currentTarget.value);
      setDispInput(true);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      if (!dispInput) {
        setFormValue(value);
        setDispInput(true);
      }
      e.preventDefault();
    }
  };

  const getInputProps = () => {
    return {
      value,
      onChange,
      onBlur,
      onKeyDown,
      error,
      helperText: form.errors[name],
    };
  };

  return <>{field({ getInputProps, name })}</>;
};
