import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./style.css";
import { useDispatch } from "react-redux";
import { ADD, getData } from "../redux/actions/action";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cartReducer.products);

  useEffect(() => {
    get_Data();
  }, []);

  const get_Data = async () => {
    const { data } = await axios.get("http://localhost:3005/api/products");
    dispatch(getData(data));
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Products</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {products.map((element, id) => {
          return (
            <Card
              key={id}
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={element.image}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>Price : ₹ {element.price}</Card.Text>
                <div className="button_div d-flex justify-content-center">
                  <Button
                    variant="primary"
                    onClick={() => send(element)}
                    className="col-lg-12"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
