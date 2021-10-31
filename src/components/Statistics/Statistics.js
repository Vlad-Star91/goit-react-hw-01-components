import React from 'react';
import PropTypes from 'prop-types';

import Statistics from './StatisticsList';
import s from './Statistics.module.css'

export default function StatisticsList({ stats }) {
    return (
        <section className={s.Statistics}>
            <h2 className={s.title}>Upload stats</h2>
            <ul className={s.statList}>
                {stats.map(item => (
                    <Statistics key={item.id} label={item.label} percentage={item.percentage} />                ))}
            </ul>
        </section>
    );
}

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
    ),
};