import { useTheme } from "@emotion/react";
import { CompanyList } from "@features/company-list";
import { Navigation } from "@features/navigation";
import { FlexLayout } from "@shared/ui/flex";
import React from "react";

export const Main = (): React.ReactElement => {
  const { colors } = useTheme();

  return (
    <FlexLayout
      backgroudColor={colors.bg.base}
      direction="column"
      minHeight="100%"
    >
      <Navigation />
      <CompanyList />
    </FlexLayout>
  );
};
