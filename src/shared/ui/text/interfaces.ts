export const TextVariants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "body1",
  body2: "body2",
};

export const TextColors = {
  primary: "primary",
  description: "description",
  link: "link",
};

export interface TextProps {
  variant: keyof typeof TextVariants;
  color?: keyof typeof TextColors;
  textAlign?: string;
  children: React.ReactNode;
  bold?: boolean;
}
