/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { actions } from "../slices/newProductsSlice";
import { Form, Button, Col, Row } from "react-bootstrap";

const NewProductReductForm = ({ newProduct }) => {
  const dispatch = useDispatch();

  console.log(newProduct);
  const inputElem = useRef(null);
  useEffect(() => {
    inputElem.current.select();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
    },
    onSubmit: (values) => {
      dispatch(
        actions.updateNewProduct({
          id: newProduct.id,
          changes: {
            name: values.name,
            price: values.price,
            description: values.description,
          },
        })
      );
    },
  });

  return (
    <div className="m-3">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group as={Col}>
          <Form.Label htmlFor="name">Назва</Form.Label>
          <Form.Control
            name="name"
            id="name"
            type="text"
            data-testid="input-body"
            placeholder={newProduct.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            isInvalid={formik.errors.name && formik.touched.name}
            ref={inputElem}
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label htmlFor="price" column sm="2">
            Ціна
          </Form.Label>
          <Form.Control
            name="price"
            id="price"
            type="text"
            data-testid="input-body"
            placeholder={newProduct.price}
            value={formik.values.price}
            onChange={formik.handleChange}
            isInvalid={formik.errors.price && formik.touched.price}
            ref={inputElem}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label htmlFor="description" column sm="2">
            Опис
          </Form.Label>
          <Form.Control
            name="description"
            id="description"
            type="text"
            data-testid="input-body"
            placeholder={newProduct.description}
            value={formik.values.description}
            onChange={formik.handleChange}
            isInvalid={formik.errors.description && formik.touched.description}
            ref={inputElem}
          />
        </Form.Group>

        <Form.Group className="mt-3" as={Row}>
          <Button variant="primary" type="submit">
            Редагувати товар
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewProductReductForm;
