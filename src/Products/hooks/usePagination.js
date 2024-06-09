import { useState } from 'react';

export const usePagination = (initialPage, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const paginatedItems = (items) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  };

  return { currentPage, handleNextPage, handlePreviousPage, paginatedItems };
};