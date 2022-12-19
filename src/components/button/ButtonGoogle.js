import React from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../common/ErrorComponent';


const ButtonGoogle = ({text="Sign up with Google", onClick=()=>{}}) => {
    return (
        <button className="flex items-center justify-center py-3 gap-x-3 w-full border border-strock rounded-xl text-text2 dark:border-darkStroke dark:text-white font-semibold text-base mb-5"
        onClick={onClick}
        >
        <img alt="google-icon" srcSet="/icon-google.png 2x" />
        <span>{text}</span>
      </button>
    );
};

ButtonGoogle.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default withErrorBoundary(ButtonGoogle,{
    FallbackComponent: <ErrorComponent></ErrorComponent>
}
    )