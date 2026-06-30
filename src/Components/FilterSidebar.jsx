import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./FilterSidebar.css";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const jewelleryOptions = [
  "Solitaire Jewellery",
  "Diamond Jewellery",
  "Platinum Jewellery",
];

const productOptions = [
  "Bangle",
  "Bracelet",
  "Chain",
  "Earring",
  "Neckwear Set",
  "Nosewear",
  "Pendant",
  "Ring",
];

const priceOptions = [
  { id: "below-20000", label: "₹20000 - Below" },
  { id: "20000-50000", label: "₹20000 - ₹50000" },
  { id: "50000-75000", label: "₹50000 - ₹75000" },
  { id: "75000-100000", label: "₹75000 - ₹100000" },
  { id: "100000-200000", label: "₹100000 - ₹200000" },
  { id: "200000-300000", label: "₹200000 - ₹300000" },
];

const purityOptions = ["14KT", "18KT", "22KT"];
const colorOptions = ["Yellow Gold", "White Gold", "Rose Gold"];
const styleOptions = ["Broad", "Bypass", "Casual", "Classic", "Contemporary", "Cuff", "Delicate", "Designer"];
const occasionOptions = ["Anniversary", "Birthday", "Engagement", "Wedding"];
const sizeOptions = ["6", "6.5", "7", "7.5", "8", "8.5" ,'9','9.5','10'];

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [openSections, setOpenSections] = useState({
    jewellery: true,
    product: true,
    price: true,
    purity: true,
    color: true,
    style: true,
    occasion: true,
    size: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckbox = (key, value) => {
    const selected = filters[key] || [];
    const updated = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onFilterChange(key, updated);
  };

  return (
    <div className="filter-box ">
      <h5>Filters</h5>
      <Card className="m-5">
        <h6 onClick={() => toggleSection("jewellery")}> 
          Jewellery Type
          <span>{openSections.jewellery ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.jewellery && (
          <>
            {jewelleryOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.jewelleryTypes?.includes(option)}
                onChange={() => handleCheckbox("jewelleryTypes", option)}
              />
            ))}
          </>
        )}
        <hr />

        <h6 onClick={() => toggleSection("product")}> 
          Product Type
          <span>{openSections.product ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.product && (
          <div className="scroll-box">
            {productOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.productTypes?.includes(option)}
                onChange={() => handleCheckbox("productTypes", option)}
              />
            ))}
          </div>
        )}
        <hr />

        <h6 onClick={() => toggleSection("price")}> 
          Price
          <span>{openSections.price ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.price && (
          <div className="scroll-box">
            {priceOptions.map((option) => (
              <Form.Check
                key={option.id}
                label={option.label}
                checked={filters.priceRanges?.includes(option.id)}
                onChange={() => handleCheckbox("priceRanges", option.id)}
              />
            ))}
          </div>
        )}
        <hr />

        <h6 onClick={() => toggleSection("purity")}> 
          Metal Purity
          <span>{openSections.purity ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.purity && (
          <>
            {purityOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.purities?.includes(option)}
                onChange={() => handleCheckbox("purities", option)}
              />
            ))}
          </>
        )}
        <hr />

        <h6 onClick={() => toggleSection("color")}> 
          Metal Color
          <span>{openSections.color ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.color && (
          <>
            {colorOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.metalColors?.includes(option)}
                onChange={() => handleCheckbox("metalColors", option)}
              />
            ))}
          </>
        )}
        <hr />

        <h6 onClick={() => toggleSection("style")}> 
          Shop by Style
          <span>{openSections.style ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.style && (
          <div className="scroll-box">
            {styleOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.styles?.includes(option)}
                onChange={() => handleCheckbox("styles", option)}
              />
            ))}
          </div>
        )}
        <hr />

        <h6 onClick={() => toggleSection("occasion")}> 
          Occasion
          <span>{openSections.occasion ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.occasion && (
          <>
            {occasionOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.occasions?.includes(option)}
                onChange={() => handleCheckbox("occasions", option)}
              />
            ))}
          </>
        )}
        <hr />

        <h6 onClick={() => toggleSection("size")}> 
          Size
          <span>{openSections.size ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {openSections.size && (
          <div className="scroll-box">
            {sizeOptions.map((option) => (
              <Form.Check
                key={option}
                label={option}
                checked={filters.sizes?.includes(option)}
                onChange={() => handleCheckbox("sizes", option)}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default FilterSidebar;
