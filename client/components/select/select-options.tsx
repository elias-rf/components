type OptionsProps =
  | {
      title: string;
      value: any;
    }[]
  | { [title: string]: any }
  | [string, any][];

type SelectOptionsProps = {
  options: OptionsProps;
};

function normalizeOptions(options: OptionsProps): [string, any][] {
  if (Array.isArray(options)) {
    const rsp = options.map((opt) => {
      if (Array.isArray(opt)) {
        return [opt[0], opt[1]] as [string, any];
      } else {
        if (Object.hasOwn(opt, "title") || Object.hasOwn(opt, "value")) {
          return [opt.title, opt.value] as [string, any];
        } else {
          return [Object.keys(opt)[0], Object.values(opt)[0]] as [string, any];
        }
      }
    });
    return rsp as [string, any];
  }
  return [];
}

export function SelectOptions({ options }: SelectOptionsProps) {
  const opt = normalizeOptions(options);
  return (
    <>
      {opt.map((op) => (
        <option value={op[1]} key={op[1]}>
          {op[0]}
        </option>
      ))}
    </>
  );
}
