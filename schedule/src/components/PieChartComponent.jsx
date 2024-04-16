import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend} from "recharts";
import { data } from '../utils/PieChartData'
import renderLegend from './UI/renderLegendUI';

let renderLabel = function(entry) {
    return entry.label;
}

const PieChartComponent = () => {
    return (
        <div style={{ width: "90%" }}>
            <h2 className='schedule__title'>Этапы</h2>
            <ResponsiveContainer>
                <PieChart >
                <Legend content={renderLegend} verticalAlign="top"   />
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={95}
                        outerRadius={190}
                        fill={data.fill}
                        label={renderLabel} 
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartComponent;