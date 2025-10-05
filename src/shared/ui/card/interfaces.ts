export interface CardFooterButtonProps {
  text: React.ReactElement;
  onClick: () => void;
}

export interface CardProps extends React.PropsWithChildren {
  title: React.ReactElement;
  footerButton?: CardFooterButtonProps;
  isCardFavorite: boolean;
  onFavorite: (value: boolean) => void;
}
