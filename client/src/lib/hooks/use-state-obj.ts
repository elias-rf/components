import { useState } from "react";

export default function useStateObj(value: Object) {
  const [state, setState] = useState(value);
  const setStateObj = (value: Object) =>
    setState((state) => ({ ...state, ...value }));
  return [state, setStateObj];
}
