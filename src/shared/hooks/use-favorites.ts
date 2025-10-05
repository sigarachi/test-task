import type { CompanyInfo } from "@shared/api/models/company";
import { useCallback, useEffect, useState } from "react";

export const useFavorites = () => {
  const [favoriteList, setFavoriteList] = useState<Array<CompanyInfo>>([]);

  useEffect(() => {
    const storage = localStorage.getItem("favorites");

    if (storage) {
      const favorites = JSON.parse(storage) as {
        values: Array<CompanyInfo>;
      };

      setFavoriteList(favorites.values);
    }
  }, []);

  const isFavorite = (value: CompanyInfo): boolean => {
    return Boolean(favoriteList.find((el) => el.id === value.id));
  };

  const handleFavorite = useCallback(
    (isFavorite: boolean, item: CompanyInfo) => {
      const storage = localStorage.getItem("favorites");

      if (!storage) {
        if (!isFavorite) return;
        setFavoriteList([item]);
        localStorage.setItem("favorites", JSON.stringify({ values: [item] }));
        return;
      }

      const favorites = JSON.parse(storage) as {
        values: Array<CompanyInfo>;
      };

      if (!favorites.values) return;

      if (isFavorite) {
        favorites.values.push(item);
      } else {
        favorites.values = favorites.values.filter((val) => val.id !== item.id);
      }
      setFavoriteList(favorites.values);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      return;
    },
    [],
  );

  return {
    favoriteList,
    isFavorite,
    handleFavorite,
  };
};
