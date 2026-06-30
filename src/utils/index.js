import { filterBySearch } from "./searchFilter";
import { filterByCategories } from "./categoryFilter";
import { sortProducts } from "./productSorter";


 // Pura pipeline setup: Data pehle search hoga -> fir checkbox se chane ga -> fir sort hokar niklega

export const pipline = (allProducts, filters, sortBy, searchQuery) => {
  

  const Search = filterBySearch(allProducts, searchQuery);

  
  const Categories = filterByCategories(Search, filters);

  
  const finalResult = sortProducts(Categories, sortBy);

  return finalResult;
};