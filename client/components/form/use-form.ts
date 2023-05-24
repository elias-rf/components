import React from "react";

export const useForm = (
  onSubmit?: (values: any) => void,
  initialValues: Record<string, any> = {}
) => {
  const [values, _setValues] = React.useState<{ [field: string]: any }>(
    initialValues
  );
  const [errors, _setErrors] = React.useState<{
    [field: string]: string | undefined;
  }>({});
  const [validates, _setValidates] = React.useState<{
    [field: string]: (value: any) => string | undefined;
  }>({});
  const [initials, setInitialVls] = React.useState(initialValues);
  const [dirty, setDirty] = React.useState(false);
  const [valid, setValid] = React.useState(true);
  const [dispInput, _setDispInput] = React.useState<Record<string, any>>({});

  // atualiza dirty
  React.useEffect(() => {
    setDirty(
      Object.keys(values).reduce((res, key) => {
        return res || values[key] !== initials[key];
      }, false)
    );
  }, [values, initials]);

  // atualiza valid
  React.useEffect(() => {
    setValid(
      Object.keys(errors).reduce((res, key) => {
        return !res || errors[key] === undefined;
      }, true)
    );
  }, [errors]);

  const setValues = (newValue: Record<string, any>) => {
    _setValues((values) => ({ ...values, ...newValue }));
  };

  const setDispInput = (newDispInput: Record<string, any>) => {
    _setDispInput((dispInput) => ({ ...dispInput, ...newDispInput }));
  };

  const setErrors = (newError: Record<string, any>) => {
    const field = Object.keys(newError)[0];
    const value = newError[field];
    const err = validates[field] && validates[field](value || "");
    _setErrors((errors) => ({ ...errors, [field]: err }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ [e.currentTarget.name]: e.currentTarget.value });
    setErrors({ [e.currentTarget.name]: e.currentTarget.value });
    if (dispInput[e.currentTarget.name])
      setDispInput({ [e.currentTarget.name]: false });
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setValues({ [e.currentTarget.name]: e.currentTarget.value });
    setErrors({ [e.currentTarget.name]: e.currentTarget.value });
    if (!dispInput[e.currentTarget.name]) {
      setDispInput({ [e.currentTarget.name]: true });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key.toLowerCase() === "enter") {
      e.preventDefault();
      if (!dispInput) {
        setDispInput({ [e.currentTarget.name]: true });
      }
    }
  };

  const reset = (newInitials?: Record<string, any>) => {
    if (newInitials) {
      setInitialVls(newInitials);
      setValues(newInitials);
    } else {
      setValues(initials);
    }
  };

  const submit = () => {
    if (!valid) return;
    reset(values);
    // setDirty(false);
    onSubmit && onSubmit(values);
  };

  const getInputProps = (
    name: string,
    validate?: (value: any) => string | undefined
  ) => {
    // atribui validação apenas 1 vez
    if (!validates[name] && validate) {
      _setValidates((validates) => ({ ...validates, [name]: validate }));
    }
    // inicializa se não houver valor default
    if (values[name] === undefined) {
      setValues({ [name]: "" });
    }

    return {
      name,
      value: values[name],
      onChange,
      onBlur,
      onKeyDown,
      error: errors[name] !== undefined,
      helperText: errors[name],
    };
  };

  const validate = () => {
    for (const field in values) {
      setErrors({
        [field]: values[field],
      });
    }
  };

  const frm = {
    values,
    errors,
    dirty,
    valid,
    initials,
    setValues,
    setErrors,
    reset,
    submit,
    getInputProps,
    validate,
  };
  return frm;
};

export type TUseForm = ReturnType<typeof useForm>;
