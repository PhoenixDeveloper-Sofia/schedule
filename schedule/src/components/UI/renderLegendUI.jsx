import React from 'react';

const renderLegend = (props) => {
    const { payload } = props;
    console.log()
    return (
        <ul className={payload[0].payload.innerRadius&&'legend_pie'}>
            {
                payload.map((entry, index) => (
                    <div className={entry.payload.innerRadius?'legend_pie__box':'legend'}  key={`item-${index}`}>
                        <div className='legend__circle' style={{ backgroundColor:entry.color}}/>
                        <span className='legend__text'>{entry.value}</span>
                    </div>
                ))
            }
        </ul>
    );
}


export default renderLegend;