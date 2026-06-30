const cleanPrice = (priceStr) => {
  if (!priceStr) return 0;
  return Number(priceStr.toString().replace(/[^0-9.]/g, ""));
};


  //Dropdown Selection Sorting Logic
 
export const sortProducts = (products, sortBy) => {
  // .sort() lagane se pehle array ki shallow copy [...] banana zaroori hai, taaki original data mutete na ho
  return [...products].sort((a, b) => {
    const priceA = cleanPrice(a.price);
    const priceB = cleanPrice(b.price);

    switch (sortBy) {
      case "low-to-high":
        return priceA - priceB; // Ascending Order

      case "high-to-low":
        return priceB - priceA; // Descending Order

      case "new-arrival":
        return (b.id || 0) - (a.id || 0); // Badi ID pehle

      case "best-seller":
        // Agar "BEST SELLER" badge hai, toh use pehle rank do
        const badgeA = a.badge === "BEST SELLER" ? 1 : 0;
        const badgeB = b.badge === "BEST SELLER" ? 1 : 0;
        return badgeB - badgeA;

      case "popular":
        // "MOST VIEWED" badge wale pehle dikhao
        const viewA = a.badge === "MOST VIEWED" ? 1 : 0;
        const viewB = b.badge === "MOST VIEWED" ? 1 : 0;
        return viewB - viewA;

      case "name":
      default:
        return (a.title || "").localeCompare(b.title || ""); // A to Z Name sorting
    }
  });
};