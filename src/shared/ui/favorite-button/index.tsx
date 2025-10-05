import React, { useCallback } from "react";
import { FavoriteButtonWrapper } from "./style";
import type { FavoriteButtonProps } from "./interfaces";
import { HeartStrokeIcon } from "../icons/heart-stroke-icon";
import { HeartFilledIcon } from "../icons/heart-filled-icon";
import { useTheme } from "@emotion/react";

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  value = false,
  onClick,
}) => {
  const theme = useTheme();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      event.stopPropagation();
      onClick(!value);
    },
    [value, onClick],
  );

  return (
    <FavoriteButtonWrapper onClick={handleClick}>
      {value ? (
        <HeartFilledIcon
          width={16}
          height={16}
          color={theme.colors.accent.base}
        />
      ) : (
        <HeartStrokeIcon
          width={16}
          height={16}
          color={theme.colors.accent.base}
        />
      )}
    </FavoriteButtonWrapper>
  );
};
