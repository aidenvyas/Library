import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const modal = props => {
  return (
    <div>
      <Modal
        isOpen={props.modal}
        toggle={props.toggle}
        className={props.className}
      >
        <ModalHeader toggle={props.toggle}>Book Details</ModalHeader>
        <ModalBody>
          {props.content
            ? props.content.title + " Author: " + props.content.author
            : "Details cannot be fetched at this time."}
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() =>
              props.favourite(
                props.content._id,
                window.sessionStorage.getItem("token")
              )
            }
          >
            Add To Fav's
          </Button>
          <Button
            color="danger"
            onClick={() =>
              props.unfavour(
                props.content._id,
                window.sessionStorage.getItem("token")
              )
            }
          >
            Remove from Fav's
          </Button>
          <Button color="secondary" onClick={() => props.toggle(true)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default modal;
