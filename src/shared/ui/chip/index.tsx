import React, { useCallback, useRef, useState } from "react";

import {
  ChipDropdownContent,
  ChipWrapper,
  ChipButton,
  ChipDropdownOption,
} from "./style";
import type { ChipProps, Option } from "./interfaces";
import { CheckIcon } from "../icons/check-icon";
import { ArrowIcon } from "../icons/arrow-icon";
import { useTheme } from "@emotion/react";

export const Chip: React.FC<ChipProps> = ({
  onSelect,
  options,
  children,
}): React.ReactElement => {
  const [isOpened, setIsOpened] = useState(false);

  const theme = useTheme();

  const selectedOption = useRef<Option>(null);

  const handleSelect = useCallback(
    (option: Option) => {
      if (
        selectedOption.current &&
        selectedOption.current.value === option.value
      ) {
        selectedOption.current = null;
        setIsOpened(false);
        return;
      }

      selectedOption.current = option;
      onSelect(option);
      setIsOpened(false);
    },
    [onSelect],
  );

  return (
    <ChipWrapper>
      <ChipButton
        isOpened={isOpened}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div>
          {selectedOption.current ? selectedOption.current.title : children}
        </div>
        <div>
          <ArrowIcon
            width={12}
            height={12}
            color={theme.colors.accent.base}
            style={{
              transform: isOpened ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "0.4s",
            }}
          />
        </div>
      </ChipButton>
      <ChipDropdownContent isOpened={isOpened}>
        {options.map((option) => (
          <ChipDropdownOption onClick={() => handleSelect(option)}>
            <div>
              {selectedOption.current &&
                selectedOption.current.value === option.value && (
                  <CheckIcon width={18} height={18} color="black" />
                )}
            </div>
            {option.title}
          </ChipDropdownOption>
        ))}
      </ChipDropdownContent>
    </ChipWrapper>
  );
};
