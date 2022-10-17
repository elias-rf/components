import { useState } from "react";

export function useStateArray(value: any[]): [
  any[],
  {
    add: (value: any) => void;
    clear: () => void;
    del: (value: any) => void;
    upsert: (value: any) => void;
    delIndex: (index: any) => void;
  }
] {
  const [state, setState] = useState(value);

  const clear = () => {
    setState([]);
  };
  const add = (value: any) => setState((state) => [...state, value]);

  const del = (value: any) =>
    setState((state) => state.filter((item) => item !== value));

  const delIndex = (index: number) =>
    setState((state) => state.filter((item, i) => i !== index));

  const upsert = (value: any) =>
    setState((state) => [...state.filter((item) => item !== value), value]);

  return [state, { add, del, upsert, delIndex, clear }];
}
