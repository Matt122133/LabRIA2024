import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export const CategorySidebar = ({ categories, onSelectCategory, closeCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category.slug)
      ? selectedCategories.filter((cat) => cat !== category.slug)
      : [...selectedCategories, category.slug];
    setSelectedCategories(updatedCategories);
    onSelectCategory(updatedCategories);
  };

  return (
    <div className="sidebar">
      <Box elevation={3} className="sidebar-paper">
        <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" gutterBottom marginBottom={0}>
          Categorías
        </Typography>
        <IconButton onClick={closeCategories}>
          <Close sx={{
            color: "#1976d2"
          }}/>
        </IconButton>

        </Grid>
        <Divider sx={{
          borderBottomWidth: "2px",
          backgroundColor: "#1976d2"
        }}/>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category.slug}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category.slug)}
                  onChange={() => handleCategoryChange(category)}
                />
              }
              label={category.name}
            />
          ))}
        </FormGroup>
      </Box>
    </div>
  );
};
