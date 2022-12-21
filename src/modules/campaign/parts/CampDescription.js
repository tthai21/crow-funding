import React from 'react';

const CampDescription = (props) => {
  const {children , size="small"} = props
    return (
        <p className={`${size==="small" ? "text-sm mb-4" : "text-lg mb-5" } font-normal  text-text3`}>
      {children}
      </p>
    );
};

export default CampDescription;