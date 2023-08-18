import Pagination from 'react-bootstrap/Pagination';

function AdvancedExample({ activePage, handlePageChange, lastPage }) {
  return (
    <Pagination size='lg'>
          {activePage > 1  && <Pagination.Prev onClick={() => handlePageChange(activePage-1)}/>}
          {activePage > 2 && <Pagination.Item onClick={() => handlePageChange(1)}>{1}</Pagination.Item>}
          {activePage >= 5 && <Pagination.Ellipsis />}
          {activePage > 1 &&<Pagination.Item onClick={() => handlePageChange(activePage - 1)}>{activePage - 1}</Pagination.Item>}
          <Pagination.Item active >{activePage}</Pagination.Item>
          {activePage < lastPage - 1 && <Pagination.Item onClick={() => handlePageChange(activePage + 1)}>{activePage + 1}</Pagination.Item>}
          {activePage <= lastPage - 4 && <Pagination.Ellipsis />}
          {activePage < lastPage && <Pagination.Item onClick={() => handlePageChange(lastPage)}>{lastPage}</Pagination.Item>}
          {activePage < lastPage && <Pagination.Next onClick={() => handlePageChange(activePage + 1)}/>}
    </Pagination>
  );
}

export default AdvancedExample;