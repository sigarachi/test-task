import { useTheme } from "@emotion/react";
import { FlexLayout } from "@shared/ui/flex";
import { LogoIcon } from "@shared/ui/icons/logo-icon";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <FlexLayout onClick={() => navigate("/")} cursor="pointer">
      <LogoIcon color={theme.colors.text.primary} />
    </FlexLayout>
  );
};
