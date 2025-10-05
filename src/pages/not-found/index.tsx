import { useTheme } from "@emotion/react";
import { Navigation } from "@features/navigation";
import { FlexLayout } from "@shared/ui/flex";
import { GlobeIcon } from "@shared/ui/icons/globe-icon";
import { TextBlock } from "@shared/ui/text";
import React from "react";

export const NotFound = (): React.ReactElement => {
  const theme = useTheme();

  return (
    <FlexLayout
      minHeight="100%"
      direction="column"
      backgroudColor={theme.colors.bg.base}
    >
      <Navigation />
      <FlexLayout
        width="100%"
        direction="column"
        align="center"
        padding="16px 0 0 0"
      >
        <GlobeIcon width={75} height={75} color={theme.colors.text.teritary} />
        <TextBlock variant="h5">Страница не найдена</TextBlock>
        <TextBlock variant="body1">
          Попробуйте зайти на другую страницу
        </TextBlock>
      </FlexLayout>
    </FlexLayout>
  );
};
