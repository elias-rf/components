import { Space } from "@mantine/core";
import { useForm } from "@mantine/form";

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Field, TFieldAttributes } from "./field";

const meta: Meta<typeof Field> = {
  component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;

const formSchema: TFieldAttributes[] = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
  },
  {
    name: "address",
    label: "Address",
    type: "textarea",
  },
  {
    name: "favAnimal",
    label: "What is Your Favourite Pet?",
    type: "select",
    data: [
      { label: "Dog 🐶", value: "dog" },
      { label: "Cat 😺", value: "cat" },
      { label: "Bird 🐦", value: "bird" },
      { label: "Fish 🐟", value: "fish" },
      { label: "Tasmanian Devil 😈", value: "devil" },
    ],
  },
  {
    name: "agreeToTerms",
    label: "I Agree to all Terms and Conditions",
    type: "checkbox",
  },
];

function FieldComponent() {
  const form = useForm({
    initialValues: {
      fullName: "",
      address: "",
      favAnimal: "",
      agreeToTerms: false,
    },
  });

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  return (
    <div className={"flex space-x-2 space-y-2"}>
      <form onSubmit={form.onSubmit(onSubmitHandler)}>
        {formSchema.map((field) => (
          <React.Fragment key={field.name}>
            <Field
              {...field}
              {...form.getInputProps(field.name)}
            />
            <Space h="xs" />
          </React.Fragment>
        ))}

        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export const Default: Story = {
  name: "Fields",

  render: () => {
    return <FieldComponent />;
  },
};
