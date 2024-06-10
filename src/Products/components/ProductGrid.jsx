import { Grid } from "@mui/material";
import { Product } from "./Product";

export const ProductGrid = ({ products }) => (
  <Grid
    item
    xs={12}
    mb={2}
    mt={4}
    container
    justifyContent="flex-start"
    gap="20px"
  >
    {products.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </Grid>
);
