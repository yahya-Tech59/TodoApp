import React from "react";
import { MdOutlineHighlight } from "react-icons/md";

export const Header = () => {
  return (
    <header>
      <MdOutlineHighlight className="header-icon" />
      <h1>ToDoList</h1>
    </header>
  );
};
