import { create } from "zustand";

type FormState = {
  [form: string]: {
    [field: string]: any;
  };
  setField: (form: string, field: string, value: any) => void;
  delForm: (form: string) => void;
  getOnInput: (
    form: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  getOnChange: (
    form: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useFormStore = create<FormState>()((set) => ({
  forms: {},
  setField: (form, field, value) =>
    set(() => ({ forms: { [form]: { [field]: value } } })),
  delForm: (form) => set(() => ({ forms: { [form]: null } })),
  getOnInput: (form) => (event) =>
    set(() => ({
      forms: { [form]: { [event.target.name]: event.target.value } },
    })),
  getOnChange: (form) => (event) =>
    set(() => ({
      forms: { [form]: { [event.target.name]: event.target.value } },
    })),
}));
