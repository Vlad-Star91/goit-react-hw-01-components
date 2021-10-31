import React from 'react'
import PropTypes from 'prop-types'

import s from './TransactionHistory.module.css'

export default function TransactionTableItem({ type, amount, currency }) {
    return (
        <tr>
            <td className={s.type}>{type}</td>
            <td className={s.amount}>{amount}</td>
            <td className={s.currency}>{currency}</td>
        </tr>
    );
}

TransactionTableItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};