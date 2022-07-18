export const selectActionTypes = { change: "CHANGE" };

export type SelectAction = {
  type: typeof selectActionTypes.change;
  payload: { field: string; value: any };
};

interface SelectProps {
  field?: string;
  children: React.ReactNode;
  options?: any;
  value: string;
  dispatch: (action: SelectAction) => void;
  [prop: string]: any;
}

function createChange(field: string = "", value: any) {
  return { type: selectActionTypes.change, payload: { field, value } };
}

export function Select({
  field = "",
  children,
  dispatch,
  options,
  value,
  onChange,
  ...others
}: SelectProps) {
  const handleOnChange = (event: any) => {
    dispatch(createChange(field, event.target.value));
  };

  return (
    <select
      name={field}
      aria-label={field}
      value={value}
      onChange={handleOnChange}
      className="w-full h-6 px-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      {...others}
    >
      {children
        ? children
        : options.map((opt: { value: any; title: string }) => (
            <option value={opt.value} key={opt.value}>
              {opt.title}
            </option>
          ))}
    </select>
  );
}
