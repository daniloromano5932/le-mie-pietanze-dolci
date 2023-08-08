import Pagination from 'react-bootstrap/Pagination';

export default function Pages(props) {
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.activePage}
        onClick={() => {
          props.handlePageChange(number)
        }}
      >
        {number}
      </Pagination.Item>,
    );
  }
  return <Pagination>{items}</Pagination>
}