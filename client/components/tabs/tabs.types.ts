export type TTabs = any & {
  component: "Tabs";
  event: "onChange";
};

export type TTab = any & {
  component: "Tab";
  event: "onClick";
};

export type TTabsProps = {
  active: string;
  onChange: (event: TTabs) => void;
  children: React.ReactElement[];
};

export type TTabProps = {
  active?: string;
  id: string;
  title: string;
  onClick?: (event: TTab) => void;
  children: React.ReactNode;
};
