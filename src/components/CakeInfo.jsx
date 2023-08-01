import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CarouselItem from './CarouselItem';
import 'react-responsive-modal/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function CakeInfo(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button type="button" variant="primary" onClick={handleShow} className="btn btn-primary btn-outline-dark">
        {props.button}
      </Button>
      <Modal show={show} onHide={handleClose} animation={true} className="cake-info d-flex">
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CarouselItem
            item={props.extra}
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