import Pagination from 'react-bootstrap/Pagination';

function Pages({ activePage, handlePageChange, lastPage }) {

  if (lastPage === 1) {
    return
  }
  
  return (
    <Pagination
      size='lg'
      className='h-100 d-flex align-items-center justify-content-center'
    >
      {activePage > 1 && (
        <Pagination.Prev onClick={() => handlePageChange(activePage - 1)}
        />
      )}
      {activePage > 2 && (
        <Pagination.Item onClick={() => handlePageChange(1)}>{1}
        </Pagination.Item>
      )}
      {activePage >= 4 && <Pagination.Ellipsis />}
      {activePage > 1 && (
        <Pagination.Item onClick={() => handlePageChange(activePage - 1)}>
          {activePage - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active={activePage && true}>
        {activePage}
      </Pagination.Item>
      {activePage < lastPage - 1 && (
        <Pagination.Item onClick={() => handlePageChange(activePage + 1)}
        >
          {activePage + 1}
        </Pagination.Item>
      )}
      {activePage <= lastPage - 3 && <Pagination.Ellipsis />}
      {activePage < lastPage && (
        <Pagination.Item onClick={() => handlePageChange(lastPage)}
        >
          {lastPage}
        </Pagination.Item>
      )}
      {activePage < lastPage && (
        <Pagination.Next onClick={() => handlePageChange(activePage + 1)}
        />
      )}
    </Pagination>
  );
}

export default Pages;
