import React, { useState } from 'react';
import { Typography, FormGroup, FormControlLabel, Checkbox, Paper } from '@material-ui/core';

const Sidebar = ({ categories, onSelectCategory }) => {
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
      <Paper elevation={3} className="sidebar-paper">
        <Typography variant="h6" gutterBottom>
          Categorías
        </Typography>
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
      </Paper>
    </div>
  );
};

export default Sidebar;
