import { Logo } from "./ui/logo";
import { NavigationWrapper } from "./ui/wrapper";
import { useTheme } from "@emotion/react";
import { TextBlock } from "@shared/ui/text";
import { FlexLayout } from "@shared/ui/flex";
import { Divider } from "@shared/ui/divider";
import useMedia from "use-media";
import { UserIcon } from "@shared/ui/icons/user-icon";
import { Input } from "@shared/ui/input";
import { SearchIcon } from "@shared/ui/icons/search-icon";
import { useState } from "react";

export const Navigation = () => {
  const [isSearching, setIsSearching] = useState(false);
  const { colors, breakPoints } = useTheme();

  const isMobile = useMedia({ maxWidth: breakPoints.mobile });

  return (
    <>
      <NavigationWrapper>
        <FlexLayout width="100%" align="center" justify="start">
          <Logo />
        </FlexLayout>
        <FlexLayout
          width="100%"
          align="center"
          justify={isMobile ? "flex-end" : "center"}
        >
          {isMobile ? (
            <SearchIcon width={16} height={16} color={colors.accent.base} />
          ) : (
            <Input
              width="100%"
              leftIcon={
                <SearchIcon width={16} height={16} color={colors.accent.base} />
              }
              placeholder="Поиск"
            />
          )}
        </FlexLayout>
        <FlexLayout width="100%" align="center" justify="flex-end" gap="8px">
          <UserIcon width={24} height={24} color={colors.accent.base} />
          {!isMobile && (
            <TextBlock variant="body1" textAlign="center">
              Войти
            </TextBlock>
          )}
        </FlexLayout>
      </NavigationWrapper>
      <Divider />
    </>
  );
};
