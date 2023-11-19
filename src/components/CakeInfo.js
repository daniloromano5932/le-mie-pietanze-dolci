import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Carousel } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CakeInfo({ show, handleClose, name, extras, img }) {

  return (
    <Modal
      show={show}
      animation={true}
      className="cake-info d-flex"
      onEscapeKeyDown={handleClose}
    >
      <Modal.Header
        closeButton
        onHide={handleClose}
      >
        <Modal.Title>
          {name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Carousel
          variant="dark"
          touch="true"
          keyboard="true"
          controls={extras.length < 2 ? false : true}
        >
          {extras ? extras.map((item) => {
            return (
              <Carousel.Item key={item.sys.id}>
                <img
                  className={"big-pic"}
                  src={item.fields.file.url}
                alt=""
                />
              </Carousel.Item>
            )
          }) : <Carousel.Item>
            <img
              className={"big-pic"}
              src={img}
            alt=""
            />
          </Carousel.Item>}
        </Carousel>
        {/* <p className='pop-text'>{description}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          variant="secondary"
          onClick={handleClose}
        >
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CakeInfo;
