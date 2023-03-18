import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectOptions } from "./select-options";

export default {
  title: "Components/Select/SelectOptions",
  component: SelectOptions,
} as ComponentMeta<typeof SelectOptions>;

export const Default: ComponentStory<typeof SelectOptions> = () => {
  return (
    <select title="slc">
      <SelectOptions
        options={[
          ["A", "a"],
          ["B", "b"],
        ]}
      />
    </select>
  );
};

export const Objects: ComponentStory<typeof SelectOptions> = () => {
  return (
    <select title="slc">
      <SelectOptions options={[{ A: "a" }, { B: "b" }]} />
    </select>
  );
};

export const ObjectsCompounds: ComponentStory<typeof SelectOptions> = () => {
  return (
    <select title="slc">
      <SelectOptions
        options={[
          { title: "A", value: "a" },
          { title: "B", value: "b" },
        ]}
      />
    </select>
  );
};
