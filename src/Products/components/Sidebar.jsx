import React, { useState } from 'react';
import { Typography, FormGroup, FormControlLabel, Checkbox, Paper } from '@material-ui/core';

const Sidebar = ({ categories, onSelectCategory }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category.slug)
      ? selectedCategories.filter((cat) => cat !== category.slug)
      : [...selectedCategories, category.slug];
    setSelectedCategories(updatedCategories);
    onSelectCategory(updatedCategories); // Llamar a la función de selección en el padre
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

      <style jsx>{`
        .sidebar {
          width: 250px;
          padding: 20px;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          overflow-y: auto;
        }

        .sidebar-paper {
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
