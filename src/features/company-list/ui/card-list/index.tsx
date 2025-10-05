import React from "react";
import { CardListWrapper } from "./style";
import type { CardListProps } from "./interfaces";
import { Card } from "@shared/ui/card";
import { TextBlock } from "@shared/ui/text";
import { EmptyList } from "../empty-list";

export const CardList: React.FC<CardListProps> = ({
  list,
  isFavorite,
  handleFavorite,
}) => {
  if (!list.length) {
    return <EmptyList />;
  }

  return (
    <CardListWrapper>
      {list.map((item) => (
        <Card
          title={<TextBlock variant="body1">{item.title}</TextBlock>}
          onFavorite={(value) => handleFavorite(value, item)}
          isCardFavorite={isFavorite(item)}
        >
          <TextBlock variant="body1">{item.title}</TextBlock>
        </Card>
      ))}
    </CardListWrapper>
  );
};
