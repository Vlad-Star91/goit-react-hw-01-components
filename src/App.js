import React from 'react';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics'
import FriendsList from './components/Friends/FriendsList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json'
import transaction from './data/transaction.json'

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
    
  );
}
