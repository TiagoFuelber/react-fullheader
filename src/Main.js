import React from 'react';
import PropTypes from 'prop-types';

const Fullheader = ({ title }) => (
    <h1>Hello {title}!</h1>
);

Fullheader.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Fullheader;