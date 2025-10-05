import { Chip } from "@shared/ui/chip";

export const Sorting = () => {
  return (
    <>
      <Chip options={[]} onSelect={() => {}}>
        Сортировка
      </Chip>
      <Chip options={[]} onSelect={() => {}}>
        Категория
      </Chip>
      <Chip options={[]} onSelect={() => {}}>
        Город
      </Chip>
    </>
  );
};
