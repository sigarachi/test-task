import { useTheme } from "@emotion/react";
import { CompanyList } from "@features/company-list";
import { Navigation } from "@features/navigation";
import React, { useState } from "react";

export const Main = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.bg.base }}>
      <Navigation />
      <CompanyList />
    </div>
  );
};
