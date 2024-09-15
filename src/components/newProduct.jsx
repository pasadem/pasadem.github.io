/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { actions } from "../slices/newProductsSlice";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import NewProductReductForm from "./newProductReductForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NewProduct({ newProduct }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(newProduct.published);
  console.log("publishe", newProduct.published);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const removeNewProduct = () => {
    dispatch(actions.removeNewProduct(newProduct));
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClick = () => {
    dispatch(
      actions.updateNewProduct({
        id: newProduct.id,
        changes: { published: !checked },
      })
    );
  };

  return (
    <>
      <Card sx={{ maxWidth: 300, height: 200 }}>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            size="small"
          >
            Редагувати
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={removeNewProduct}
            size="small"
          >
            Видалити
          </Button>
        </CardActions>

        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {newProduct.name}
          </Typography>
          <Typography gutterBottom variant="h8" component="div">
            {newProduct.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            $ {newProduct.price}
          </Typography>
        </CardContent>
        <Box>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            onClick={handleClick}
            inputProps={{ "aria-label": "controlled" }}
          />Публікувати товар
        </Box>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <NewProductReductForm newProduct={newProduct} open={open} />
        </Box>
      </Modal>
    </>
  );
}
