// Price ranges ke rules ka object map
const PRICE_RANGE_MAP = {
  "below-20000": (val) => val < 20000,
  "20000-50000": (val) => val >= 20000 && val <= 50000,
  "50000-75000": (val) => val > 50000 && val <= 75000,
  "75000-100000": (val) => val > 75000 && val <= 100000,
  "100000-200000": (val) => val > 100000 && val <= 200000,
  "200000-300000": (val) => val > 200000 && val <= 300000,
};

// "₹38,243" -> 38243 banane ka utility helper
const cleanPrice = (priceStr) => {
  if (!priceStr) return 0;
  return Number(priceStr.toString().replace(/[^0-9.]/g, ""));
};

/**
 * Sidebar Checkbox Filter Logic
 */
export const filterByCategories = (products, filters) => {
  return products.filter((product) => {
    
    // 1. Jewellery Type Check
    if (filters.jewelleryTypes?.length > 0 && !filters.jewelleryTypes.includes(product.jewelleryType)) {
      return false;
    }

    // 2. Product Type Check
    if (filters.productTypes?.length > 0 && !filters.productTypes.includes(product.productType)) {
      return false;
    }

    // 3. Purity Check
    if (filters.purities?.length > 0 && !filters.purities.includes(product.metalPurity)) {
      return false;
    }

    // 4. Color Check
    if (filters.metalColors?.length > 0 && !filters.metalColors.includes(product.metalColor)) {
      return false;
    }

    // 5. Style Check
    if (filters.styles?.length > 0 && !filters.styles.includes(product.style)) {
      return false;
    }

    // 6. Occasion Check
    if (filters.occasions?.length > 0 && !filters.occasions.includes(product.occasion)) {
      return false;
    }

    // 7. Size Check
    if (filters.sizes?.length > 0 && !filters.sizes.includes(product.size)) {
      return false;
    }

    // 8. Price Ranges Check (Dynamic loop match)
    if (filters.priceRanges?.length > 0) {
      const numericPrice = cleanPrice(product.price);
      const isMatch = filters.priceRanges.some((rangeId) => {
        const testFn = PRICE_RANGE_MAP[rangeId];
        return testFn ? testFn(numericPrice) : true;
      });
      if (!isMatch) return false;
    }

    // Agar saare filter categories sahi hain, toh product select ho jayega
    return true;
  });
};