import create from "zustand";
import { TEvent } from "../../../types";

type FormState = {
  [form: string]: {
    [field: string]: any;
  };
  setField: (form: string, field: string, value: any) => void;
  delForm: (form: string) => void;
  getOnInput: (form: string) => (event: TEvent) => void;
  getOnChange: (form: string) => (event: TEvent) => void;
};

export const useFormStore = create<FormState>()((set) => ({
  forms: {},
  setField: (form, field, value) =>
    set(() => ({ forms: { [form]: { [field]: value } } })),
  delForm: (form) => set(() => ({ forms: { [form]: null } })),
  getOnInput: (form) => (event) =>
    set(() => ({ forms: { [form]: { [event.name]: event.value } } })),
  getOnChange: (form) => (event) =>
    set(() => ({ forms: { [form]: { [event.name]: event.value } } })),
}));
