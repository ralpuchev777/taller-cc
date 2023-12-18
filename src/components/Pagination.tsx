import React from 'react';

interface PaginationProps {
  limit: number;
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ limit, totalCount, currentPage, onPageChange }) => {
    const numPages = Math.ceil(totalCount / limit);

    return (
        <div>
        {Array.from({ length: numPages }, (_, i) => i + 1).map(pageNumber => (
            <button
            key={pageNumber}
            disabled={currentPage === pageNumber}
            onClick={() => onPageChange(pageNumber)}
            >
            {pageNumber}
            </button>
        ))}
        </div>
    );
};

export default Pagination;
