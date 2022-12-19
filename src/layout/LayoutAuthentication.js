import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {withErrorBoundary} from "react-error-boundary"
import ErrorComponent from "../components/common/ErrorComponent";


const LayoutAuthentication = (props) => {
  const { children,heading="" } = props;
  return (
    <div className="w-full min-h-screen bg-lite dark:bg-darkbg p-10 relative isolate">
        <img srcSet="/ellipse.png" alt="bg" className="hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 z-[-1]"  />
      <Link to="/" className="inline-block  mb-5 lg:mb-16">
        <img srcSet="/logo.png 2x" alt="crowfunding-app"></img>
      </Link>
      <div className="w-full max-w-[560px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto ">
        <h1 className="font-semibold text-text1 text-lg mb-1 lg:text-xl lg:mb-3 text-center dark:text-white ">{heading}</h1>
        {children}
      </div>
    </div>
  );
};


LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default withErrorBoundary(LayoutAuthentication,{
    FallbackComponent: ErrorComponent,

})
