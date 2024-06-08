// ProductGrid.jsx
import { Grid } from "@mui/material";
import { Product } from "./Product";

export const ProductGrid = ({ products }) => (
  <Grid item xs={12} sm={10} mb={2} mt={4} container spacing={1}>
    {products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </Grid>
);
