// PaginationButtons.jsx
import { Button, Box } from "@mui/material";

export const PaginationButtons = ({
  currentPage,
  handlePreviousPage,
  handleNextPage,
  isLastPage,
}) => (
  <Box
    mt={4}
    display="flex"
    justifyContent="center"
    className="pagination-buttons"
  >
    <Button
      variant="contained"
      color="primary"
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
      style={{ marginRight: "10px" }}
    >
      Página Anterior
    </Button>

    <Button
      variant="contained"
      color="primary"
      onClick={handleNextPage}
      disabled={isLastPage}
      style={{ marginLeft: "10px" }}
    >
      Siguiente Página
    </Button>
  </Box>
);
