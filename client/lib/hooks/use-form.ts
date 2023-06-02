import React from "react";

export type TUseFormArgs = {
  onSubmit?: (values: { [field: string]: string }) => void;
  onInput?: (values: { [field: string]: string }) => void;
  initialValues?: { [field: string]: string };
};

export const useForm = ({
  onSubmit,
  onInput,
  initialValues = {},
}: TUseFormArgs) => {
  /**
   * valores do form
   */
  const [values, _setValues] = React.useState<{ [field: string]: string }>(
    initialValues
  );

  /**
   * mensagens de erro para cada campo
   */
  const [errors, _setErrors] = React.useState<{
    [field: string]: string | undefined;
  }>({});

  /**
   * funções de validação para cada campo
   */
  const [validates, _setValidates] = React.useState<{
    [field: string]: (value: any) => string | undefined;
  }>({});

  /**
   * valor do input já foi enviado
   */
  const [dispInput, _setDispInput] = React.useState<Record<string, boolean>>(
    {}
  );

  /**
   * lista de campos desabilitados
   */
  const [disableds, _setDisableds] = React.useState<Record<string, boolean>>(
    {}
  );

  /**
   * valores iniciais
   */
  const [initials, setInitialVls] = React.useState(initialValues);

  /**
   * formulário foi alterado
   */
  const [dirty, setDirty] = React.useState(false);
  const [valid, setValid] = React.useState(true);

  const setDispInput = React.useCallback(
    (newDispInput: { [x: string]: boolean } | boolean) => {
      if (typeof newDispInput === "boolean") {
        const resp: { [x: string]: boolean } = {};
        for (const fld in values) {
          resp[fld] = newDispInput;
        }
        _setDispInput(resp);
        return;
      }
      _setDispInput((dispInput) => ({ ...dispInput, ...newDispInput }));
    },
    [values]
  );

  const setValues = React.useCallback(
    (newValue: Record<string, any>) => {
      // values
      const fld = Object.keys(newValue)[0];
      const vlr = newValue[fld];
      if (values[fld] === vlr) return;
      const valuesAux = { ...values };
      valuesAux[fld] = vlr;
      _setValues(valuesAux);
      // errors
      const errorsAux = { ...errors };
      const err = validates[fld] && validates[fld](vlr || "");
      errorsAux[fld] = err;
      _setErrors(errorsAux);
      // valid
      setValid(
        Object.keys(errorsAux).reduce((response, key) => {
          return !response || errorsAux[key] === undefined;
        }, true)
      );
      //dirty
      setDirty(
        Object.keys(valuesAux).reduce((response, key) => {
          return response || valuesAux[key] !== initials[key];
        }, false)
      );
      // dispInput
      setDispInput({ [fld]: false });
    },
    [values, setDispInput, validates, errors, initials]
  );

  const setDisableds = (newDisabled: Record<string, boolean> | boolean) => {
    if (typeof newDisabled === "boolean") {
      const resp: Record<string, boolean> = {};
      for (const fld in values) {
        resp[fld] = newDisabled;
      }
      _setDisableds(resp);
      return;
    }
    const fld = Object.keys(newDisabled)[0];
    const vlr = newDisabled[fld];
    if (disableds[fld] === vlr) return;
    _setDisableds((disableds) => ({ ...disableds, ...newDisabled }));
  };

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fld = e.currentTarget.name;
      const vlr = e.currentTarget.value;
      setValues({ [fld]: vlr });
    },
    [setValues]
  );

  const onBlur = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const fld = e.currentTarget.name;
      const vlr = e.currentTarget.value;
      setValues({ [fld]: vlr });
      if (dispInput[fld] === false) {
        setDispInput({ [fld]: true });
        onInput && onInput({ [fld]: vlr });
      }
    },
    [setValues, dispInput, onInput, setDispInput]
  );

  const onKeyDown = React.useCallback(
    (e: any) => {
      const fld = e.target.name;
      const vlr = e.target.value;
      if (e.key.toLowerCase() === "enter") {
        e.preventDefault();
        if (dispInput[fld] === false) {
          setDispInput({ [fld]: true });
          onInput && onInput({ [fld]: vlr });
        }
      }
    },
    [dispInput, onInput, setDispInput]
  );

  const reset = React.useCallback(
    (newInitials?: Record<string, any>) => {
      if (newInitials) {
        setInitialVls(newInitials);
        setValues(newInitials);
      } else {
        setValues(initials);
      }
      setDirty(false);
    },
    [initials, setValues]
  );

  const submit = React.useCallback(() => {
    if (!valid) return;
    reset(values);
    onSubmit && onSubmit(values);
  }, [valid, values, onSubmit, reset]);

  const getInputProps = React.useCallback(
    (name: string, validate?: (value: any) => string | undefined) => {
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
        value: values[name] || "",
        disabled: disableds[name] || false,
        onChange,
        onBlur,
        onKeyDown,
        error: errors[name] !== undefined,
        helperText: errors[name],
      };
    },
    [
      errors,
      onBlur,
      onChange,
      onKeyDown,
      values,
      validates,
      setValues,
      disableds,
    ]
  );

  const validate = React.useCallback(() => {
    const errorsAux = { ...errors };
    for (const fld in values) {
      const err = validates[fld] && validates[fld](values[fld] || "");
      errorsAux[fld] = err;
      _setErrors(errorsAux);
    }
    setValid(
      Object.keys(errorsAux).reduce((response, key) => {
        return !response || errorsAux[key] === undefined;
      }, true)
    );
  }, [values, errors, validates, _setErrors]);

  const frm = {
    values,
    setValues,
    errors,
    valid,
    validate,
    initials,
    reset,
    disableds,
    setDisableds,
    dirty,
    submit,
    getInputProps,
  };
  return frm;
};

export type TUseForm = ReturnType<typeof useForm>;
