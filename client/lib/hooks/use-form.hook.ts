import { useField, UseField } from "./use-field.hook";

type FormFields = {
  [field: string]: UseField | string | number;
};

type Fields = {
  [field: string]: UseField;
};

export type TUseForm<T> = {
  record: () => T;
  set: (record: { [field in keyof T]: any }) => void;
  reset: () => void;
  isDirty: () => boolean;
  field: (prop: keyof T) => UseField;
};

export function useForm<Record>(formFields: FormFields): TUseForm<Record> {
  const fields: Fields = {};
  for (const fld in formFields) {
    if (
      typeof formFields[fld] === "string" ||
      typeof formFields[fld] === "number"
    ) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      fields[fld] = useField(formFields[fld] as string);
    } else {
      fields[fld] = formFields[fld] as UseField;
    }
  }

  function set(record: { [field: string]: any }) {
    for (const fld in fields) {
      if (Object.hasOwn(record, fld)) {
        fields[fld].set(record[fld]);
      }
    }
  }

  function reset() {
    for (const fld in fields) {
      fields[fld].reset();
    }
  }
  function record() {
    const rsp: any = {};
    for (const fld in fields) {
      rsp[fld] = fields[fld].value;
    }
    return rsp;
  }

  function isDirty() {
    for (const fld in fields) {
      if (fields[fld].isDirty) return true;
    }
    return false;
  }

  function field(prop: any): UseField {
    return fields[prop];
  }

  return {
    record,
    set,
    field,
    reset,
    isDirty,
  };
}
