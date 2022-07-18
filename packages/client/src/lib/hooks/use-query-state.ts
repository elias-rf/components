import { useQueryParams } from "./use-queryparams";

export function useQueryState(key: string, defaultValue: any = "") {
  const { getParams, setParams } = useQueryParams();
  const params = getParams();
  const state = params[key] || defaultValue;

  function setState(value: any) {
    setParams({ ...params, [key]: value });
  }

  return [state, setState];
}
