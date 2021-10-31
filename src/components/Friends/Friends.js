import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendsList.module.css'

export default function Friends({ avatar, name, isOnline }) {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.statusOn : s.statusOff}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}