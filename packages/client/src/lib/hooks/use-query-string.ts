import React from "react";
import qs from "qs";
import type { NavigateOptions } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function useQueryString(key: string) {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key) || "";

  let value = React.useMemo(() => qs.parse(paramValue), [paramValue]);

  let setValue = React.useCallback(
    (newValue: any, options?: NavigateOptions) => {
      let newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, qs.stringify(newValue));
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}
