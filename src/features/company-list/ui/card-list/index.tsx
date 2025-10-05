import React from "react";
import { CardListWrapper } from "./style";

export const CardList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <CardListWrapper>{children}</CardListWrapper>;
};
