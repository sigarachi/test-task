import { CompanyService } from "@shared/api/services/company";
import { useQuery } from "@tanstack/react-query";
import { CardList } from "./ui/card-list";
import { Sorting } from "./ui/sorting";
import { Divider } from "@shared/ui/divider";
import { FlexLayout } from "@shared/ui/flex";
import useMedia from "use-media";
import { useTheme } from "@emotion/react";
import { Tabs } from "@shared/ui/tabs";
import { useState } from "react";
import { useFavorites } from "@shared/hooks/use-favorites";

export const CompanyList = () => {
  const [tab, setTab] = useState<string>("all");

  const { favoriteList, isFavorite, handleFavorite } = useFavorites();

  const theme = useTheme();

  const isMobile = useMedia({ maxWidth: theme.breakPoints.mobile });

  const { data, isLoading } = useQuery({
    queryKey: ["company-list"],
    queryFn: () => CompanyService.getList(),
    retryOnMount: false,
  });

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
    </FlexLayout>
  );
};
