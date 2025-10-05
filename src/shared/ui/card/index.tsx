import { useState } from "react";
import {
  CardBodyWrapper,
  CardFooterWrapper,
  CardImageWrapper,
  CardTopButtonWrapper,
  CardTopWrapper,
  CardWrapper,
} from "./style";
import { FavoriteButton } from "../favorite-button";
import type { CardProps } from "./interfaces";
import { Divider } from "../divider";

export const Card: React.FC<CardProps> = ({
  isCardFavorite,
  onFavorite,
  footerButton,
  title,
  children,
}) => {
  const [isFavorite, setIsFavorite] = useState(isCardFavorite);

  return (
    <CardWrapper>
      <CardTopWrapper>
        <CardImageWrapper>{title}</CardImageWrapper>
        <CardTopButtonWrapper>
          <FavoriteButton
            value={isFavorite}
            onClick={(value) => {
              setIsFavorite(value);
              onFavorite(value);
            }}
          />
        </CardTopButtonWrapper>
      </CardTopWrapper>
      <CardBodyWrapper>{children}</CardBodyWrapper>
      {footerButton && (
        <CardFooterWrapper>
          <Divider width="100%" />
          {footerButton.text}
        </CardFooterWrapper>
      )}
    </CardWrapper>
  );
};
