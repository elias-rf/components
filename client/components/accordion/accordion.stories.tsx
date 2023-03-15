import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Accordion } from "./accordion";
import { AccordionItem } from "./accordion-item";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

function AccordionStory() {
  const [active, setActive] = React.useState<string[]>([]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    let rsp: string[] = [...active];
    const name: string = e.currentTarget.name;
    if (rsp.includes(name)) {
      rsp = rsp.filter((item) => item !== name);
    } else {
      rsp.push(name);
    }
    console.log(rsp);
    setActive(rsp);
  }

  return (
    <Accordion
      active={active}
      onClick={handleClick}
    >
      <AccordionItem
        name="teste1"
        title="What is Flowbite?"
      >
        <div className="p-5 font-light border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </AccordionItem>
      <AccordionItem
        name="teste2"
        title="Is there a Figma file available?"
      >
        <div className="p-5 font-light border border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are
            open source under the MIT license, whereas Tailwind UI is a paid
            product. Another difference is that Flowbite relies on smaller and
            standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro,
            and even Tailwind UI as there is no technical reason stopping you
            from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export const Default: Story = {
  args: {},
  render: () => <AccordionStory />,
};
