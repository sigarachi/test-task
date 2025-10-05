import { useTheme } from "@emotion/react";
import { CompanyList } from "@features/company-list";
import { Navigation } from "@features/navigation";
import React from "react";

export const Main = (): React.ReactElement => {
  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.bg.base }}>
      <Navigation />
      <CompanyList />
    </div>
  );
};
