import { CompanyService } from "@shared/api/services/company";
import { Card } from "@shared/ui/card";
import { useQuery } from "@tanstack/react-query";
import { CardList } from "./ui/card-list";
import { TextBlock } from "@shared/ui/text";
import { Sorting } from "./ui/sorting";
import { Divider } from "@shared/ui/divider";
import { FlexLayout } from "@shared/ui/flex";
import useMedia from "use-media";
import { useTheme } from "@emotion/react";

export const CompanyList = () => {
  const theme = useTheme();

  const isMobile = useMedia({ maxWidth: theme.breakPoints.mobile });

  const { data, isLoading } = useQuery({
    queryKey: ["company-list"],
    queryFn: () => CompanyService.getList(),
    retryOnMount: false,
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <FlexLayout direction="column" justify="center" overflow="hidden">
      <FlexLayout
        width="100%"
        direction="row"
        gap="8px"
        align="center"
        padding={`16px ${isMobile ? "8px" : "10vw"}`}
        overflow="auto"
      >
        <Sorting />
      </FlexLayout>
      <Divider />
      <CardList>
        {data?.map((item) => (
          <Card
            title={<TextBlock variant="body1">{item.title}</TextBlock>}
            onFavorite={() => {}}
            isCardFavorite={false}
          >
            <TextBlock variant="body1">{item.title}</TextBlock>
          </Card>
        ))}
      </CardList>
    </FlexLayout>
  );
};
