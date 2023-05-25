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

  const setValues = React.useCallback(
    (newValue: Record<string, any>) => {
      const fld = Object.keys(newValue)[0];
      const vlr = newValue[fld];
      if (values[fld] === vlr) return;
      _setValues((values) => ({ ...values, ...newValue }));
    },
    [values]
  );

  const setDispInput = (newDispInput: Record<string, any>) => {
    const fld = Object.keys(newDispInput)[0];
    const vlr = newDispInput[fld];
    if (dispInput[fld] === vlr) return;
    _setDispInput((dispInput) => ({ ...dispInput, ...newDispInput }));
  };

  const setErrors = React.useCallback(
    (newError: Record<string, any>) => {
      const fld = Object.keys(newError)[0];
      const vlr = newError[fld];
      const err = validates[fld] && validates[fld](vlr || "");
      // if (errors[fld] === err) return;
      _setErrors((errors) => ({ ...errors, [fld]: err }));
    },
    [validates]
  );

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fld = e.currentTarget.name;
      const vlr = e.currentTarget.value;
      setValues({ [fld]: vlr });
      setErrors({ [fld]: vlr });
      if (dispInput[e.currentTarget.name])
        setDispInput({ [e.currentTarget.name]: false });
    },
    [dispInput, setErrors, setValues]
  );

  const onBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const fld = e.currentTarget.name;
      const vlr = e.currentTarget.value;
      if (values[fld] === vlr) return;
      setValues({ [fld]: vlr });
      setErrors({ [fld]: vlr });
      if (!dispInput[fld]) {
        setDispInput({ [fld]: true });
      }
    },
    [dispInput, setErrors, setValues, values]
  );

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const fld = e.currentTarget.name;
      if (e.key.toLowerCase() === "enter") {
        e.preventDefault();
        if (!dispInput) {
          setDispInput({ [fld]: true });
        }
      }
    },
    [dispInput]
  );

  const reset = React.useCallback(
    (newInitials?: Record<string, any>) => {
      if (newInitials) {
        setInitialVls(newInitials);
        setValues(newInitials);
      } else {
        setValues(initials);
      }
    },
    [initials, setValues]
  );

  const submit = React.useCallback(() => {
    if (!valid) return;
    reset(values);
    // setDirty(false);
    onSubmit && onSubmit(values);
  }, [valid, values, onSubmit, reset]);

  const getInputProps = React.useCallback(
    (name: string, validate?: (value: any) => string | undefined) => {
      // atribui validação apenas 1 vez
      if (!validates[name] && validate) {
        _setValidates((validates) => ({ ...validates, [name]: validate }));
      }
      // inicializa se não houver valor default
      // if (values[name] === undefined) {
      //   setValues({ [name]: "" });
      // }

      return {
        name,
        value: values[name] || "",
        onChange,
        onBlur,
        onKeyDown,
        error: errors[name] !== undefined,
        helperText: errors[name],
      };
    },
    [errors, onBlur, onChange, onKeyDown, values, validates]
  );

  const validate = React.useCallback(() => {
    for (const field in values) {
      setErrors({
        [field]: values[field],
      });
    }
  }, [values, setErrors]);

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
