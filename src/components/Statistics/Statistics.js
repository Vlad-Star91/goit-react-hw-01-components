import React from 'react';
import PropTypes from 'prop-types';

import Statistics from './StatisticsList';
import s from './Statistics.module.css'

export default function StatisticsList({ title, stats }) {
    return (
        <section className={s.Statistics}>
            {title ?<h2 className={s.title}>Upload stats</h2> : null}
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
            id: PropTypes.number.isRequired
        }),
    ),
};