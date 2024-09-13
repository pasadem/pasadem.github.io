import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInitialData, selectors as productsSelectors } from '../slices/productsSlice.js';
import { selectors as newProductsSelectors } from '../slices/newProductsSlice.js';

import Product from '../components/product.jsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.selectAll);
  const newProducts = useSelector(newProductsSelectors.selectAll);
  console.log(newProducts)
  

  const [value, setValue] = useState(8)
  
	useEffect(() => {
	  setInterval(() => dispatch(fetchInitialData()), 3000)
  }, [dispatch]);

  const productQuantity = (value, arr) => {
    const length = arr.length - value;
    return arr.slice(length)
  }

	return (
		<Box sx={{ flexGrow: 1, width: '70%', px: 25, pt: 2 }}>
      <ButtonGroup sx={{ mb: 2 }}variant="contained" aria-label="Basic button group">
      <Button onClick={() => setValue(8)}>8 продуктів</Button>
      <Button onClick={() => setValue(16)}>16 продуктів</Button>
      <Button onClick={() => setValue(products.length)}>Всі продукти</Button>
    </ButtonGroup>     
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productQuantity(value, products).map((product) => (
          <Grid key={product.id} size={{ xs: 2, sm: 4, md: 4 }}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
	);
};

export default Products;