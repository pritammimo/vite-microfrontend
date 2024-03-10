import React from "react";
import AuthNavbar from "./AuthNavbar";
import AuthFooter from "./AuthFooter";

// reactstrap components

// core components


const AuthLayout = ({children}) => {
  return (
    <>
       <div className="main-content" >
    <AuthNavbar />
    <div className="header bg-gradient-info py-7 py-lg-8">
        <div className="header-body text-center mb-7 text-red-700">
          <span className="text-red-700 cursor-pointer">Auth layout</span>
          
        </div>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-yellow_cus"
            fill="#fe7650"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>
    {/* Page content */}
    {children}
  </div>
  <AuthFooter />
    </>
  );
};

export default AuthLayout;
