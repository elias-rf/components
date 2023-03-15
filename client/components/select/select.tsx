export type TSelectProps = {
  field?: string;
  children: React.ReactNode;
  value: string;
  onChange: (event: any) => void;
  [prop: string]: any;
};

export function Select({
  field = "",
  children,
  onChange,
  value,
  ...others
}: TSelectProps) {
  return (
    <select
      name={field}
      aria-label={field}
      value={value}
      onChange={onChange}
      className={
        "w-full h-6 px-1 text-gray-700 border border-gray-400 focus:border-gray-600"
      }
      {...others}
    >
      {children}
    </select>
  );
}
