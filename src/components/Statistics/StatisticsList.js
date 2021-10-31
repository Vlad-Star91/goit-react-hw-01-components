import React from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export default function Statistics({ label, percentage }) {
    return (
        <li className={s.item} style={{ backgroundColor: `rgba(${random()}, ${random()}, ${random()})` }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    )
};

function random() {
    return Math.floor(Math.random() * 256);
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
};