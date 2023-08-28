import React from "react";

const centerTextStyle = {
  textAlign: "center",
  padding: "20px 0",
};

const Footer = () => {
  return (
    <>
      <footer style={centerTextStyle}>
        <p>
          &copy; {new Date().getFullYear()} SUBRATH SAPKOTA. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
