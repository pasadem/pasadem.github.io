/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../slices/newProductsSlice";
import { useNavigate } from "react-router-dom";

import _ from "lodash";
import { Form, Button, Col, Row } from "react-bootstrap";

const NewProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newProduct = {
      name: data.get("name"),
      price: data.get("price"),
      description: data.get("description"),
      id: _.uniqueId(),
      date: new Date().toISOString(),
      published: false,
    };
    dispatch(actions.addNewProduct(newProduct));
    navigate("/");
  };

  return (
    <div className="m-3">
      <Form onSubmit={onSubmit}>
        <Form.Group as={Col}>
          <Form.Label htmlFor="name">Назва</Form.Label>
          <Form.Control required name="name" id="name" />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label htmlFor="price" column sm="2">
            Ціна
          </Form.Label>
          <Form.Control required name="price" id="price" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label htmlFor="price" column sm="2">
            Опис
          </Form.Label>
          <Form.Control required name="description" id="description" />
        </Form.Group>

        <Form.Group className="mt-3" as={Row}>
          <Button variant="primary" type="submit">
            СTВОРИТИ ПРОДУКТ
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewProductForm;

