import React, { useRef, useState } from "react";
import { useDrag } from "react-dnd";
import { COMPONENT } from "./constants";
import ItemModal from "./ItemModal";

const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
};

const Component = ({ data, components, path }) => {
  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = ()=> {
    setModalIsOpen(false)
  }
  
  const ref = useRef(null);

  const [{ isDragging }, drag] = useDrag({
    item: { type: COMPONENT, id: data.id, path },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  const component = components[data.id];


  return (
    <div
      ref={ref}
      style={{ ...style, opacity }}
      className="component draggable"
      onClick={()=>setModalIsOpen(true)}
    >
      <div>{data.id}</div>
      <div>{component.content}</div>
      <ItemModal itemId={data.id} modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </div>
  );
};
export default Component;
