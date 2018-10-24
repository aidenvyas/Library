import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const modal = (props) => {

  return (
    <div>
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>Book Details</ModalHeader>
          <ModalBody>
              {props.content ? props.content.id +" : "+props.content.title : 'Details cannot be fetched at this time.'}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=>props.toggle(true)}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
  );
};

export default modal;
