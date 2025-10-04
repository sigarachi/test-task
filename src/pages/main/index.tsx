import { useTheme } from "@emotion/react";
import { Button } from "@shared/ui/button";
import { Chip } from "@shared/ui/chip";
import { SearchIcon } from "@shared/ui/icons/search-icon";
import { Input } from "@shared/ui/input";
import React from "react";

export const Main = (): React.ReactElement => {
  const { colors } = useTheme();

  return (
    <>
      Main page <Button>Показать еще</Button>
      <Chip
        options={[
          { title: "123", value: "123" },
          { title: "341", value: "341" },
        ]}
        onSelect={(option) => console.log(option)}
      >
        Категория
      </Chip>
      <Input
        leftIcon={
          <SearchIcon width={18} height={18} color={colors.accent.base} />
        }
      />
    </>
  );
};
