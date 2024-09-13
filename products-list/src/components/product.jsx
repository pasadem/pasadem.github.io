import * as React from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function Product({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Card sx={{ maxWidth: 300, height: 340 }}>
        <CardActions>
        <Button sx={{ pt: 1 }}size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardMedia 
        onClick={handleOpen}
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         $ {product.price}
        </Typography>
      </CardContent>
    </Card>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        <Typography gutterBottom variant="h7" component="div">
          {product.title}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          {product.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         $ {product.price}
        </Typography>
    </Box>
  </Modal>
  </>
  );
}