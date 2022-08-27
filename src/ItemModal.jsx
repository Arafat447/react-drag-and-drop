import React, { useEffect } from "react";
// import Modal from "react-modal";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const ItemModal = ({ modalIsOpen, closeModal, itemId, setModalIsOpen }) => {
//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   };
//   useEffect(() => {
//     Modal.setAppElement('body');
// }, []);
  // console.log(modalIsOpen);
  return (
    // <Modal
    //   isOpen={modalIsOpen}
    //   onRequestClose={closeModal}
    //   style={customStyles}
    //   contentLabel="Example Modal"
    // >
    //   <div className="modal-close-btn">
    //       <button onClick={()=>closeModal()}>Close</button>
    //       <button onClick={()=>setModalIsOpen(false)}>add </button>
    //   </div>
    //   <div className="item-id">Component Id : {itemId}</div>
    // </Modal>
    <Modal open={modalIsOpen} onClose={closeModal} center>
        <h2 onClick={()=>alert("hello")}>Simple centered modal</h2>
      </Modal>
  );
};

export default ItemModal;
