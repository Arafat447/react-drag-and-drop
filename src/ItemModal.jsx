import React, { useContext } from "react";
import { Modal } from "react-responsive-modal";
import { context } from "./ContextProvider";
import 'react-responsive-modal/styles.css';
const ItemModal = () => {
const {open, onCloseModal, itemId} = useContext(context)
  return (
    <Modal animationDuration="400" open={open} onClose={onCloseModal} center>
      <h2>Component Item Id </h2>
      <p className="">ID : {itemId}</p>
    </Modal>
  );
};

export default ItemModal;
