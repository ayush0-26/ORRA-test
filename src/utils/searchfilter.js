export const filterBySearch = (products, searchQuery) => {
  const query = searchQuery.trim().toLowerCase();
  
  // Agar search bar khali hai, toh filter mat karo, saare products aage bhej do
  if (!query) return products;

  return products.filter((product) => {
    // Un saari fields ko jodo jisme user search kar sakta hai
    const searchableText = [
      product.title,
      product.jewelleryType,
      product.productType,
      product.metalColor,
      product.style,
      product.occasion,
    ]
      .join(" ")
      .toLowerCase();

    // Check karo ki typed word text mein hai ya nahi
    return searchableText.includes(query);
  });
};