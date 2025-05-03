import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 p-4">
      <p>&copy;All rights reserved {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
