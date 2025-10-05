import { useCallback, useState } from "react";
import type { Tab, TabsProps } from "./interfaces";
import { TabsWrapper, TabWrapper } from "./style";
import { TextBlock } from "../text";

export const Tabs: React.FC<TabsProps> = ({ tabs, onChange }) => {
  const [selected, setSelected] = useState<Tab | null>(tabs[0]);

  const handleSelect = useCallback(
    (option: Tab) => {
      setSelected(option);
      onChange(option);
    },
    [onChange],
  );

  return (
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabWrapper
          onClick={() => handleSelect(tab)}
          isSelected={Boolean(selected && selected.value === tab.value)}
        >
          <TextBlock variant="h6">{tab.title}</TextBlock>
        </TabWrapper>
      ))}
    </TabsWrapper>
  );
};
