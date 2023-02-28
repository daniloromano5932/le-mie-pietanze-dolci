import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CarouselItem from './CarouselItem';

function CakeInfo(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button type="button" variant="lights" onClick={handleShow} className="btn btn-outline-dark">
        {props.button}
      </Button>
      <Modal show={show} onHide={handleClose} animation={true} className="cake-info">
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselItem 
          item = {props.extra}
          />
        <p className='pop-text'>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" onClick={handleClose} >
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CakeInfo;