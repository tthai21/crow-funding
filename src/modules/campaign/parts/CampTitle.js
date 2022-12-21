import React from 'react';

const CampTitle = (props) => {
    const {children, size="small"} =props
    return (
        <h3 className={`${size==="small" ? " text-base mb-1" : "text-lg mb-4"} font-semibold text-text1`}>
            {children}
        </h3>
    );
};

export default CampTitle;