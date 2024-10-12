import CategoriesLink from "./categories-link";

type FilterCategoriesProps = {
  planet: string | null;
};

export default function FilterCategories({ planet }: FilterCategoriesProps) {
  return (
    <ul className="flex gap-4 text-textdark">
      <CategoriesLink planet={planet} slug="All">
        All Products
      </CategoriesLink>
      <CategoriesLink planet={planet} slug="Lactarius-7">
        Lactarius-7
      </CategoriesLink>
      <CategoriesLink planet={planet} slug="Capriox-B">
        Capriox-B
      </CategoriesLink>
      <CategoriesLink planet={planet} slug="Nebula-3">
        Nebula-3
      </CategoriesLink>
    </ul>
  );
}
