import qs from "qs";
import React from "react";
import type { NavigateOptions } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

export function useQs(key: string, defaultValue: any = ""): [string] {
  const location = useLocation();
  const navigate = useNavigate();

  // Atualiza param
  const value: string = React.useMemo((): string => {
    // return qs.parse(location.search, { ignoreQueryPrefix: true });
    return location.search;
  }, [location.search]);

  // Atualiza state
  let putValue = React.useCallback(
    (newValue: any, options?: NavigateOptions) => {
      const params = qs.parse(location.search, { ignoreQueryPrefix: true });
      if (params[key] === newValue) {
        return;
      }
      const newParams = { ...params, [key]: newValue };
      const newSearch = qs.stringify(newParams, {
        addQueryPrefix: true,
        encode: false,
      });
      // console.log(
      //   `🚀 ~ file: use-qs.ts ~ line 25 ~ useQs ~ newParams`,
      //   "\n",
      //   location.search,
      //   "\n",
      //   newSearch,
      //   "\n",
      //   JSON.stringify(params),
      //   "\n",
      //   JSON.stringify(newParams)
      // );
      navigate(`${location.pathname}${newSearch}`, options);
    },
    [key]
  );

  return [value];
}
