import React, { useMemo, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

import FilterSidebar from '../Components/FilterSidebar';
import ProductCard from "../Components/Productcard";
import data from "../data/data.json";
import './Home.css';

// Price range validation helpers
const priceRanges = [
  { id: "below-20000", test: (value) => value < 20000 },
  { id: "20000-50000", test: (value) => value >= 20000 && value <= 50000 },
  { id: "50000-75000", test: (value) => value > 50000 && value <= 75000 },
  { id: "75000-100000", test: (value) => value > 75000 && value <= 100000 },
  { id: "100000-200000", test: (value) => value > 100000 && value <= 200000 },
  { id: "200000-300000", test: (value) => value > 200000 && value <= 300000 },
];

const Home = () => {
  // State for multi-checkbox sidebar filters
  const [filters, setFilters] = useState({
    jewelleryTypes: [],
    productTypes: [],
    priceRanges: [],
    purities: [],
    metalColors: [],
    styles: [],
    occasions: [],
    sizes: [],
  });

  // State for the sorting dropdown value
  const [sortBy, setSortBy] = useState("name"); 

  // Combined Filtering and Sorting Logic running inside useMemo for performance
  const filteredProducts = useMemo(() => {
    
    // 1. FILTERING STEP
    const results = data.products.filter((product) => {
      // Clean price string (e.g., "$25,000" or "Rs. 20,000" -> 25000)
      const priceValue = Number(product.price.toString().replace(/[^0-9.]/g, ""));

      if (filters.jewelleryTypes.length > 0 && !filters.jewelleryTypes.includes(product.jewelleryType)) {
        return false;
      }

      if (filters.productTypes.length > 0 && !filters.productTypes.includes(product.productType)) {
        return false;
      }

      if (filters.priceRanges.length > 0) {
        const priceMatch = filters.priceRanges.some((rangeId) => {
          const range = priceRanges.find((item) => item.id === rangeId);
          return range ? range.test(priceValue) : true;
        });
        if (!priceMatch) {
          return false;
        }
      }

      if (filters.purities.length > 0 && !filters.purities.includes(product.metalPurity)) {
        return false;
      }

      if (filters.metalColors.length > 0 && !filters.metalColors.includes(product.metalColor)) {
        return false;
      }

      if (filters.styles.length > 0 && !filters.styles.includes(product.style)) {
        return false;
      }

      if (filters.occasions.length > 0 && !filters.occasions.includes(product.occasion)) {
        return false;
      }

      if (filters.sizes.length > 0 && !filters.sizes.includes(product.size)) {
        return false;
      }

      return true;
    });

    // 2. SORTING STEP (Mutates the filtered array copy, leaving original data.json untouched)
    return results.sort((a, b) => {
      const priceA = Number(a.price.toString().replace(/[^0-9.]/g, ""));
      const priceB = Number(b.price.toString().replace(/[^0-9.]/g, ""));

      switch (sortBy) {
        case "low-to-high":
          return priceA - priceB;

        case "high-to-low":
          return priceB - priceA;

        case "new-arrival":
          // Sorts by newest entry (assumes high numerical ID or createdDate string)
          return (b.id || 0) - (a.id || 0); 

        case "best-seller":
          // Sorts descending by a rating or sales count field if available
          return (b.salesCount || 0) - (a.salesCount || 0);

        case "popular":
          // Sorts descending based on your data views/rating properties
          return (b.rating || 0) - (a.rating || 0);

        case "name":
        default:
          // Localized alphabetical title sort (A to Z)
          return (a.name || "").localeCompare(b.name || "");
      }
    });

  }, [filters, sortBy]); // Re-calculates instantly whenever filters or sorting selections change

  // Updates specific key-value states coming up from the FilterSidebar
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container-fluid mt-4">
      <Row>
        {/* Left Side: Sidebar filters */}
        <Col md={3}>
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Col>

        {/* Right Side: Sorting select block and Product Grid displays */}
        <Col md={9}>
          <div className="selecter d-flex justify-content-end mb-4">
            <Form.Select 
              aria-label="Product sorting select field"
              style={{ maxWidth: "250px" }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Product Name (A-Z)</option>
              <option value="new-arrival">New Arrival</option>
              <option value="best-seller">Best Seller</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
              <option value="popular">Popular</option>
            </Form.Select>
          </div>

          <Row className="px-2">
            {filteredProducts.map((item) => (
              <Col md={4} lg={3} key={item.id} className="mb-4">
                <ProductCard product={item} />
              </Col>
            ))}

            {/* Empty UI State Handler */}
            {filteredProducts.length === 0 && (
              <Col xs={12} className="text-center mt-5 py-5">
                <h4 className="text-muted">No products found matching the chosen filters.</h4>
                <p className="text-secondary small">Try clearing a few checkboxes to see more items.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
