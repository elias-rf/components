import qs from "qs";
import useLocation from "./use-location";

export function useQueryParams() {
  const { replace, search } = useLocation();

  const getParams = () => {
    const params = qs.parse(search, { ignoreQueryPrefix: true });
    return params;
  };

  const setParams = (params: any) => {
    const stringfiedUrlSearchParams = qs.stringify(params, {
      addQueryPrefix: true,
      encode: false,
    });
    replace(`${stringfiedUrlSearchParams}`);
  };

  return {
    getParams,
    setParams,
  };
}

// Usage

// function App() {
//   const { getParams, setParams } = useQueryParams();
//   const params = getParams();
//
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setParams({ page: 1, order: 'ASC' });
//         }}
//       >
//         Set Params
//       </button>
//       <button
//         onClick={() => {
//           setParams({});
//         }}
//       >
//         Clear params
//       </button>
//       {Object.entries(params).map(([paramKey, paramValue]) => (
//         <p>
//           {paramKey}: {paramValue}
//         </p>
//       ))}
//     </div>
//   );
// }
