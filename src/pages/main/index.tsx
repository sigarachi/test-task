import { useTheme } from "@emotion/react";
import { Button } from "@shared/ui/button";
import { Card } from "@shared/ui/card";
import { Chip } from "@shared/ui/chip";
import { FavoriteButton } from "@shared/ui/favorite-button";
import { SearchIcon } from "@shared/ui/icons/search-icon";
import { Input } from "@shared/ui/input";
import { TextBlock } from "@shared/ui/text";
import React, { useState } from "react";

export const Main = (): React.ReactElement => {
  const [checked, setChecked] = useState(false);

  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.bg.base }}>
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
      <FavoriteButton
        value={checked}
        onClick={(value) => {
          setChecked(value);
          console.log(value);
        }}
      />
      <div style={{ width: "500px" }}>
        <Card
          isCardFavorite={checked}
          onFavorite={(value) => setChecked(value)}
          title="CardTitle"
          footerButton={{
            onClick: () => {},
            text: (
              <TextBlock variant="body1" color="link">
                Подробнее
              </TextBlock>
            ),
          }}
        >
          213123123
        </Card>
      </div>
    </div>
  );
};
