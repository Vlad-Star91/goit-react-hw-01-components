import React from 'react';
import PropTypes from 'prop-types';

import Friends from './Friends'
import s from './FriendsList.module.css'

export default function FriendsListItem({ friends }) {
    return (
        <ul className={s.friendsList}>
            {friends.map(item => (
                <Friends key={item.id} isOnline={item.isOnline} name={item.name} avatar={item.avatar} />
                ))}
        </ul>
    );
}

FriendsListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
    ),
};