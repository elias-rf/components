import type { Header } from "@tanstack/react-table";
import { useInput } from "../../lib/hooks/use-input";

type THeadFilterProps = {
  header: Header<Record<string, any>, unknown>;
};

export const HeadFilter = ({ header }: THeadFilterProps) => {
  const register = useInput(
    header.column.getFilterValue() as string,
    header.column.setFilterValue
  );
  return (
    <th
      colSpan={header.colSpan}
      className="bg-gray-200"
    >
      {header.isPlaceholder ? null : (
        <input
          {...register}
          className="w-full border-0"
        />
      )}
    </th>
  );
};
