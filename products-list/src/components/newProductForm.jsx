/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import _ from 'lodash';
import { actions } from '../slices/newProductsSlice';

const validationSchema = yup.object({
  name: yup
    .string('Введіть назву продукту')
    .min(3, 'Не менше 3 знаків')
    .required("Обов'язкове поле"),
  price: yup
    .string('Зазначте ціну товару')
    .min(3, 'Не менше 3 знаків')
    .required("Обов'язкове поле"),
  description: yup
    .string('Введіть опис товару')
    .min(3, 'Не менше 3 знаків')
    .required("Обов'язкове поле"),
});

export default function newProductForm() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: 'Назва продукту',
      price: 'Ціна продукту',
      description: 'Опис продукту',
    },
    validationSchema: validationSchema,
    onSubmit: (event) => {
      console.log('alert')
      event.preventDefault();
      const data = new FormData(event.target);
      const newProduct = {
        name: data.get('name'),
        price: data.get('price'),
        description: data.get('description'),
        id: _.uniqueId(),
      };
      dispatch(actions.addNewProducts(newProduct));
    },
  });
  return (
    <Box
      component="form"
      sx={{
        mx: 20,
        width: 300,
        height: 200,
        borderRadius: 1,}}
    >
      <div>
      <div onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ m: 1}}
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={{ m: 1}}
          fullWidth
          id="price"
          name="price"
          label="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          sx={{ m: 1}}
          fullWidth
          id="description"
          name="description"
          label="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <Button sx={{ m: 1}} color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </div>
    </div>
    </Box>
  );
}

