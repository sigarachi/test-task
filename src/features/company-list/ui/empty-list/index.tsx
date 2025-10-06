import { useTheme } from "@emotion/react";
import { FlexLayout } from "@shared/ui/flex";
import { FolderIcon } from "@shared/ui/icons/folder-icon";
import { TextBlock } from "@shared/ui/text";

export const EmptyList = () => {
  const theme = useTheme();

  return (
    <FlexLayout
      width="100%"
      direction="column"
      align="center"
      padding="16px 0 0 0"
      gap="8px"
      minHeight="50vh"
    >
      <FolderIcon width={75} height={75} color={theme.colors.text.teritary} />
      <TextBlock variant="h5">Пока пусто</TextBlock>
      <TextBlock variant="body1" color="description">
        Вы пока ничего не добавили в избранное
      </TextBlock>
    </FlexLayout>
  );
};
