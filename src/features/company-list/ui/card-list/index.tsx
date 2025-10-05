import React from "react";
import { CardListWrapper } from "./style";
import type { CardListProps } from "./interfaces";
import { Card } from "@shared/ui/card";
import { TextBlock } from "@shared/ui/text";
import { EmptyList } from "../empty-list";
import { Skeleton } from "@shared/ui/skeleton";
import { FlexLayout } from "@shared/ui/flex";

export const CardList: React.FC<CardListProps> = ({
  list,
  isLoading,
  isFavorite,
  handleFavorite,
}) => {
  if (isLoading) {
    return (
      <CardListWrapper>
        {new Array(10).fill(0, 0, 10).map(() => (
          <FlexLayout width="227px" height="328px" borderRadius="16px">
            <Skeleton br="16px" />
          </FlexLayout>
        ))}
      </CardListWrapper>
    );
  }

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
          footerButton={{
            text: (
              <TextBlock variant="body1" color="link">
                Подробнее
              </TextBlock>
            ),
            onClick: () => {},
          }}
        >
          <TextBlock variant="body1">{item.title}</TextBlock>
        </Card>
      ))}
    </CardListWrapper>
  );
};
