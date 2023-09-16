import React from "react";

const date = new Date();

export const Footer = () => {
  return (
    <footer>
      <p> Copyright {date.getFullYear()}. </p>
    </footer>
  );
};
