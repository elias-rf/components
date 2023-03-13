import { AccordionContext } from "./accordion.context";

export type TAccordionProps = {
  active: string[];
  onClick: (event: any) => void;
  children: React.ReactElement[];
};

export function Accordion({ onClick, active, children }: TAccordionProps) {
  return (
    <AccordionContext.Provider value={{ active, onClick }}>
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className="first:[&>button]:rounded-t-xl"
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}
