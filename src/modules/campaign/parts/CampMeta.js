import React from 'react';

const CamMeta = (props) => {
    const{amount = "$2000",text="Raised of $1900",size= "small"} = props
    return (
        <div className='flex flex-col gap-y-1'>
        <h4 className={`${size=== "small" ? "text-sm" : "text-lg" } font-semibold text-text2`}>{amount}</h4>
        <span className={`${size==="small" ? "text-xs" : "text-base"} text-text4 `}>{text}</span>
    </div>
    );
};

export default CamMeta;
