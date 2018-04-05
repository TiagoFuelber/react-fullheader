import React from 'react';
import PropTypes from 'prop-types';

const Fullheader = ({ title, subtitle, bgColor, textColor, font, bgImg }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };

    return (
        <header style={headerStyles}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );
};

Fullheader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    bgImg: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
};

Fullheader.defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

export default Fullheader;
