import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <div>Copyright {year}</div>
    </footer>
  );
}

export default Footer;
