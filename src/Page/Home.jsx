import React, { useMemo, useState } from "react";
import data from "../data/data.json";
import { pipline } from "../utils/index.js"; // Aapki main pipeline file ka path

import FilterSidebar from '../Components/FilterSidebar';
import ProductCard from "../Components/Productcard";


import { Row, Col, Form, Button, Offcanvas } from "react-bootstrap";
import { IoFilterSharp } from "react-icons/io5"; // Sahi responsive filter icon

import banner from '../assets/banner.jpg';
import './Home.css';

const Home = ({ searchQuery = "" }) => {
  const [filters, setFilters] = useState({
    jewelleryTypes: [], productTypes: [], priceRanges: [], purities: [],
    metalColors: [], styles: [], occasions: [], sizes: []
  });
  const [sortBy, setSortBy] = useState("name");

  // Mobile Sidebar Drawer State tracking
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  // ── LOGIC PIPELINE EXECUTION ──
  const filteredProducts = useMemo(() => {
    return pipline(data.products, filters, sortBy, searchQuery);
  }, [filters, sortBy, searchQuery]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container-fluid mt-4">
     {/* hided on desktop */}
      <div className="d-flex d-md-none justify-content-between align-items-center mb-4 px-2 mobile-action-bar">
        <Button 
          className="btn-filter-toggle d-flex align-items-center gap-2 btn-dark"
          onClick={() => setShowMobileFilter(true)}
        >
          <IoFilterSharp /> Filter
        </Button>
        
        <Form.Select
          aria-label="Mobile product sorting select"
          style={{ maxWidth: "160px", fontSize: "14px" }}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Popular</option>
          <option value="new-arrival">New Arrival</option>
          <option value="best-seller">Best Seller</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </Form.Select>
      </div>

      <Row>
        {/* ── DESKTOP SIDEBAR FILTERS: Desktop par dikhega, Mobile par hidden ── */}
        <Col md={3} className="d-none d-md-block">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Col>

        {/* ── RIGHT SIDE: PRODUCTS DISPLAY GRID ── */}
        <Col xs={12} md={9}>
          {/* Desktop Only Sorting Dropdown Header */}
          <div className="selecter d-none d-md-flex justify-content-end mb-4">
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

          <Row className="px-1 px-md-2">
            
            {/* 2X4 pattern */}
            {filteredProducts.slice(0, 8).map((item) => (
              <Col xs={6} md={4} lg={3} key={item.id} className="mb-3 mb-md-4 px-1 px-md-2">
                <ProductCard product={item} />
              </Col>
            ))}

           {/* banner */}
            {filteredProducts.length > 0 && (
              <Col xs={12} className="my-3 my-md-4 text-center px-1">
                <img
                  src={banner}
                  alt="Special Jewellery Offer Banner"
                  className="img-fluid rounded w-100"
                  style={{
                    maxHeight: "250px",
                    objectFit: "cover",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.08)"
                  }}
                />
              </Col>
            )}

           
            {filteredProducts.slice(8).map((item) => (
              <Col xs={6} md={4} lg={3} key={item.id} className="mb-3 mb-md-4 px-1 px-md-2">
                <ProductCard product={item} />
              </Col>
            ))}

            {/* Empty state — shown when no products match search + filters */}
            {filteredProducts.length === 0 && (
              <Col xs={12} className="text-center mt-5 py-5">
                <h4 className="text-muted">No products found.</h4>
                <p className="text-secondary small">
                  {searchQuery
                    ? `No results for "${searchQuery}". Try a different keyword or clear the search.`
                    : "Try clearing a few filters to see more items."}
                </p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>

      {/* ── 🌟 MOBILE OVERLAY DRAWER PANEL (Slide Overlay Drawer) ── */}
     
      <Offcanvas 
        show={showMobileFilter} 
        onHide={() => setShowMobileFilter(false)}
        placement="bottom"
        style={{ height: "85vh", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title className="fw-bold fs-5">Filters</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className="p-0" style={{ overflowY: "auto" }}>
          {/* Desktop waale sidebar ko hi humne is drawer ke canvas shell mein render kar diya */}
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        </Offcanvas.Body>
        
        {/* Fixed Apply Button at Bottom of the mobile sheet */}
        <div className="p-3 bg-white border-top sticky-bottom">
          <Button variant="dark" className="w-100 py-2 fw-medium" onClick={() => setShowMobileFilter(false)}>
            Apply Filters ({filteredProducts.length} Designs)
          </Button>
        </div>
      </Offcanvas>
    </div>
  );
};

export default Home;