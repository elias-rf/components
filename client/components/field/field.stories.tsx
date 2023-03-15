import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
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
    options: [
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
  const methods = useForm();

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  return (
    <div className={"flex space-x-2 space-y-2"}>
      <FormProvider {...methods}>
        <form
          className="form"
          onSubmit={methods.handleSubmit(onSubmitHandler)}
          autoComplete="off"
        >
          {formSchema.map((field) => (
            <Field
              {...field}
              key={field.name}
            />
          ))}
          <button type="submit">OK</button>
        </form>
      </FormProvider>
    </div>
  );
}

export const Default: Story = {
  name: "Fields",

  render: () => {
    return <FieldComponent />;
  },
};
