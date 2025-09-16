import PaginationStyled from "./Pagination.styled";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
