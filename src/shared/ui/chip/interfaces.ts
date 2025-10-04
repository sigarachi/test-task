export interface Option {
  title: string;
  value: string;
}

export interface ChipProps extends React.PropsWithChildren {
  options: Array<Option>;
  onSelect: (option: Option) => void;
}
