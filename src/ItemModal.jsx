import React from "react";
import Modal from "react-modal";
const ItemModal = ({ modalIsOpen, closeModal, itemId }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="modal-close-btn">
          <button onClick={()=>closeModal()}>Close</button>
      </div>
      <div className="item-id">Component Id : {itemId}</div>
    </Modal>
  );
};

export default ItemModal;
