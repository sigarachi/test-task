import { CompanyService } from "@shared/api/services/company";
import { useQuery } from "@tanstack/react-query";
import { CardList } from "./ui/card-list";
import { Sorting } from "./ui/sorting";
import { Divider } from "@shared/ui/divider";
import { FlexLayout } from "@shared/ui/flex";
import useMedia from "use-media";
import { useTheme } from "@emotion/react";
import { Tabs } from "@shared/ui/tabs";
import { useCallback, useState } from "react";
import { useFavorites } from "@shared/hooks/use-favorites";
import { Button } from "@shared/ui/button";
import { TextBlock } from "@shared/ui/text";
import { ArrowIcon } from "@shared/ui/icons/arrow-icon";

export const CompanyList = () => {
  const [tab, setTab] = useState<string>("all");
  const [limit, setLimit] = useState<number>(5);

  const { favoriteList, isFavorite, handleFavorite } = useFavorites();

  const theme = useTheme();

  const isMobile = useMedia({ maxWidth: theme.breakPoints.mobile });

  const { data, isLoading } = useQuery({
    queryKey: ["company-list", limit],
    queryFn: () => CompanyService.getList(limit),
    retryOnMount: false,
  });

  const handleIncreaseLimit = useCallback(() => {
    setLimit((prev) => prev + 5);
  }, []);

  return (
    <FlexLayout
      direction="column"
      justify="center"
      overflow="hidden"
      minHeight="100%"
    >
      <FlexLayout
        direction="row"
        gap="8px"
        align="center"
        padding={`16px ${isMobile ? "8px" : "10vw"}`}
        overflowX="auto"
      >
        <Sorting />
      </FlexLayout>
      <Divider />
      <FlexLayout
        direction="row"
        gap="8px"
        align="center"
        padding={`16px ${isMobile ? "8px" : "10vw"}`}
        overflowX="auto"
      >
        {" "}
        <Tabs
          tabs={[
            { title: "Все", value: "all" },
            { title: "Избранное", value: "favorite" },
          ]}
          onChange={(option) => setTab(option.value)}
        />
      </FlexLayout>

      <CardList
        list={tab === "all" ? (data ?? []) : favoriteList}
        isLoading={isLoading}
        isFavorite={isFavorite}
        handleFavorite={handleFavorite}
      />
      {tab === "all" && (
        <FlexLayout align="center" justify="center" padding={`16px 10vw`}>
          <Button style={{ flex: "1" }} onClick={handleIncreaseLimit}>
            <FlexLayout align="center" justify="center" gap="8px">
              <TextBlock variant="body1">Показать еще</TextBlock>
              <ArrowIcon
                width={16}
                height={16}
                color={theme.colors.accent.base}
              />
            </FlexLayout>
          </Button>
        </FlexLayout>
      )}
    </FlexLayout>
  );
};
