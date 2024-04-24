import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
