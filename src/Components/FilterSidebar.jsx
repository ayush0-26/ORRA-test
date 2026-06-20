import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./FilterSidebar.css";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

const FilterSidebar = () => {
  const [jewellery, setJewellery] = useState(false);
  const [product, setProduct] = useState(false);
  const [price, setPrice] = useState(true);
  const [purity, setPurity] = useState(true);
  const [color, setColor] = useState(true);
  const [style, setStyle] = useState(true);
  const [occasion, setOccasion] = useState(true);
  const [size, setSize] = useState(true);

  return (
    <div className="filter-box p-5">
      <h5>Filters</h5>
      <Card>
       
        <h6 onClick={() => setJewellery(!jewellery)}>
          Jewellery Type
          <span>{jewellery ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {jewellery && (
          <>
            <Form.Check label="Solitaire Jewellery (73)" />
            <Form.Check label="Diamond Jewellery (3502)" />
            <Form.Check label="Platinum Jewellery (74)" />
          </>
        )}
        <hr />

        
        <h6 onClick={() => setProduct(!product)}>
          Product Type
          <span>{product ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {product && (
          <div className="scroll-box">
            <Form.Check label="Bangle (174)" />
            <Form.Check label="Bracelet (190)" />
            <Form.Check label="Chain (1)" />
            <Form.Check label="Earring (997)" />
            <Form.Check label="Neckwear Set (354)" />
            <Form.Check label="Nosewear (39)" />
            <Form.Check label="Pendant (140)" />
            <Form.Check label="Ring (200)" />
          </div>
        )}
        <hr />

        
        <h6 onClick={() => setPrice(!price)}>
          Price
          <span>{price ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {price && (
          <div className="scroll-box">
            <Form.Check label="₹20000 - Below (82)" />
            <Form.Check label="₹20000 - ₹50000 (677)" />
            <Form.Check label="₹50000 - ₹75000 (494)" />
            <Form.Check label="₹75000 - ₹100000 (392)" />
            <Form.Check label="₹100000 - ₹200000 (797)" />
            <Form.Check label="₹200000 - ₹300000 (321)" />
          </div>
        )}
        <hr />

        
        <h6 onClick={() => setPurity(!purity)}>
          Metal Purity
          <span>{purity ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {purity && (
          <>
            <Form.Check label="14KT (1463)" />
            <Form.Check label="18KT (2012)" />
            <Form.Check label="22KT (500)" />
          </>
        )}
        <hr />

        
        <h6 onClick={() => setColor(!color)}>
          Metal Color
          <span>{color ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {color && (
          <>
            <Form.Check label="Yellow Gold" />
            <Form.Check label="White Gold" />
            <Form.Check label="Rose Gold" />
          </>
        )}
        <hr />

       
        <h6 onClick={() => setStyle(!style)}>
          Shop by Style
          <span>{style ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {style && (
          <div className="scroll-box">
            <Form.Check label="Broad (23)" />
            <Form.Check label="Bypass (1)" />
            <Form.Check label="Casual (12)" />
            <Form.Check label="Classic (12)" />
            <Form.Check label="Contemporary (12)" />
            <Form.Check label="Cuff (12)" />
            <Form.Check label="Delicate (12)" />
            <Form.Check label="Designer (12)" />
          </div>
        )}
        <hr />

        
        <h6 onClick={() => setOccasion(!occasion)}>
          Occasion
          <span>{occasion ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {occasion && (
          <>
            <Form.Check label="Anniversary (12)" />
            <Form.Check label="Birthday (12)" />
            <Form.Check label="Engagement (12)" />
            <Form.Check label="Wedding (12)" />
          </>
        )}
        <hr />

        
        <h6 onClick={() => setSize(!size)}>
          Size
          <span>{size ? <IoChevronUp /> : <IoChevronDown />}</span>
        </h6>
        {size && (
          <div className="scroll-box">
            <Form.Check label="6 (12)" />
            <Form.Check label="6.5 (12)" />
            <Form.Check label="7 (12)" />
            <Form.Check label="7.5 (12)" />
            <Form.Check label="8 (12)" />
            <Form.Check label="8.5 (12)" />
          </div>
        )}
      </Card>
    </div>
  );
};

export default FilterSidebar;
