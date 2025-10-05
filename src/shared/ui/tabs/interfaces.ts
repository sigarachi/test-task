export interface Tab {
  title: string;
  value: string;
}

export interface TabsProps {
  tabs: Array<Tab>;
  onChange: (value: Tab) => void;
}
