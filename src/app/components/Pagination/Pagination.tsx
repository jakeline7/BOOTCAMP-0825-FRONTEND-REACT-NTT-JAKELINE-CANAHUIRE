// // components/Pagination.tsx
// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
//   return (
//     <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
//       {Array.from({ length: totalPages }, (_, i) => (
//         <button
//           key={i + 1}
//           onClick={() => onPageChange(i + 1)}
//           style={{
//             padding: "6px 12px",
//             borderRadius: "5px",
//             background: currentPage === i + 1 ? "#cc292e" : "#eee",
//             color: currentPage === i + 1 ? "white" : "black",
//             cursor: "pointer",
//           }}
//         >
//           {i + 1}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Pagination;


import PaginationStyled from "./Pagination.styled";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 esto sube al inicio
  };

  return (
    <PaginationStyled.Container>
      {Array.from({ length: totalPages }, (_, i) => (
        <PaginationStyled.PageButton
          key={i + 1}
          active={currentPage === i + 1}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </PaginationStyled.PageButton>
      ))}
    </PaginationStyled.Container>
  );
};

export default Pagination;
