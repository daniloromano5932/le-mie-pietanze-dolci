import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CakeInfo(props) {
  return (
    <Modal show={props.show} animation={true} className="cake-info d-flex">
      <Modal.Header closeButton onHide={props.handleClose}>
        <Modal.Title className='modal-title'>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel variant="dark" touch="yes">
          {props.extra.map((item) => {
            return (
              <Carousel.Item key={item}>
                <img
                  className={"big-pic"}
                  src={"../" + item}
                  alt="Immagine secondaria del dolce"
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
        <p className='pop-text'>{props.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={props.handleClose}>
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CakeInfo;