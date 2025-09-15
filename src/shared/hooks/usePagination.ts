// // hooks/usePagination.ts
// import { useState } from "react";

// export function usePagination<T>(items: T[], itemsPerPage: number) {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(items.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const currentItems = items.slice(startIndex, endIndex);

//   return { currentPage, setCurrentPage, totalPages, currentItems };
// }
import { useState, useMemo } from "react";

function usePagination<T>(data: T[] | null, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    if (!data) return 1;
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const currentData = useMemo(() => {
    if (!data) return [];
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const setPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const resetPage = () => setCurrentPage(1);

  return { currentPage, totalPages, currentData, setPage, resetPage };
}

export default usePagination;
