import React from "react";
import { MdDelete } from "react-icons/md";

export const Note = (props) => {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <MdDelete style={{ fontSize: "24px" }} />
      </button>
    </div>
  );
};
