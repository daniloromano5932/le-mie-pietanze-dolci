import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Spinner animation="border" role="status" size='xl'>
      <div className='loading'>
        <span className="visually-hidden">Caricamento...</span>
      </div>
    </Spinner>
  );
}

export default Loading;
