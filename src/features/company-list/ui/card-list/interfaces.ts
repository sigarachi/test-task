import type { CompanyInfo } from "@shared/api/models/company";

export interface CardListProps {
  list: Array<CompanyInfo>;
  isFavorite: (value: CompanyInfo) => boolean;
  handleFavorite: (isFavorite: boolean, item: CompanyInfo) => void;
}
