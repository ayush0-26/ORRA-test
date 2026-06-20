import React from "react";
import { Row, Col } from "react-bootstrap";

import FilterSidebar from '../Components/FilterSidebar';
import ProductCard from "../Components/Productcard";
import data from "../data/data.json";

const Home = () => {
    return (
        <div className="container-fluid mt-4">
            <Row>
                <Col md={3}>
                    <FilterSidebar />
                </Col>

                <Col md={9}>
                    <Row>
                        {data.products.map((item) => (
                            <Col md={4} lg={3} key={item.id} className="mb-4">
                                <ProductCard product={item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Home;