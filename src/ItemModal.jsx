import React, { useContext } from "react";
import { Modal } from "react-responsive-modal";
import { context } from "./ContextProvider";
import 'react-responsive-modal/styles.css';
const ItemModal = () => {
const {open, onCloseModal, itemId} = useContext(context)
  return (
    <Modal animationDuration="400" open={open} onClose={onCloseModal} center>
      <h3 className="component-text">Component Id : <span className="component-id">{itemId}</span></h3>
    </Modal>
  );
};

export default ItemModal;
