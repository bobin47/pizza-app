import React from "react";
import CommonSection from "../UI/CommonSection";

import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCart from "../UI/ProductCart";
import "../css/allFood.css";
import { useState } from "react";

export default function AllFood() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductDat] = useState(products);

  return (
    <div>
      <CommonSection title="All food" />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="search__widget mb-5 d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="Search ...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg="6"></Col>

            {productData
              .filter((item) => {
                if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                  return item;
              })
              .map((item) => {
                return (
                  <Col lg="3" className="mb-4">
                    {" "}
                    <ProductCart item={item} key={item.id} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
    </div>
  );
}
