import { Chip } from "@shared/ui/chip";
import { TextBlock } from "@shared/ui/text";

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
      <Chip options={[]} onSelect={() => {}}>
        <TextBlock variant="h6">Категория</TextBlock>
      </Chip>
      <Chip options={[]} onSelect={() => {}}>
        <TextBlock variant="h6">Город</TextBlock>
      </Chip>
    </>
  );
};
