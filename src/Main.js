import React from 'react';
import PropTypes from 'prop-types';
import {
    headerStyle,
    containerStyle,
    titleStyle,
    subtitleStyle,
    videoStyle,
} from './Styles';

const Fullheader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
    const headerStyleCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };

    return (
        <header style={headerStyleCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && <video style={videoStyle} autoPLay mute loop src={video} />}
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
    video: PropTypes.string,
};

Fullheader.defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

export default Fullheader;
