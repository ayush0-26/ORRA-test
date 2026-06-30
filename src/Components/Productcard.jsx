import React from "react";
import { Card, Form } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import "./Productcard.css";
import "hover.css/css/hover-min.css";
const images = import.meta.glob("../assets/*.{jpg,png,jpeg}", {
    eager: true,
    import: "default",
});

const ProductCard = ({ product }) => {
    const imageSrc = images[product.img];

    return (
        <>

            
            <Card className="product-card">

                <div className="product-top d-flex justify-content-between align-items-center">
                    <span className="text-white fw-medium"> {product.badge} </span>
                    <CiHeart className="fs-3 rounded-circle" />
                </div>

                <div className="image-wrapper">
                    <img
                        src={imageSrc}
                        alt={product.title}
                        className="product-img hvr-grow"
                    />
                </div>

                <div className="making text-white fw-medium">
                    {product.makingCharges}
                </div>

                <h5 className="mt-2 ">
                    {product.price}

                    <span className="text-decoration-line-through text-muted fs-6">
                        &nbsp; {product.oldPrice}
                    </span>
                </h5>
                <p className="text-muted fs-6">
                    {product.title}
                </p>
            </Card>


        </>

    );
};

export default ProductCard;