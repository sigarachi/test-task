import { Chip } from "@shared/ui/chip";
import { TextBlock } from "@shared/ui/text";
import { CATEGORY_OPTIONS, CITY_OPTIONS } from "./constants";

export const Sorting = () => {
  return (
    <>
      <Chip
        options={[
          { title: "Сначала новые", value: "1" },
          { title: "Сначала старые", value: "2" },
        ]}
        onSelect={() => {}}
      >
        <TextBlock variant="h6">Сортировка</TextBlock>
      </Chip>
      <Chip options={CATEGORY_OPTIONS} onSelect={() => {}}>
        <TextBlock variant="h6">Категория</TextBlock>
      </Chip>
      <Chip options={CITY_OPTIONS} onSelect={() => {}}>
        <TextBlock variant="h6">Город</TextBlock>
      </Chip>
    </>
  );
};
