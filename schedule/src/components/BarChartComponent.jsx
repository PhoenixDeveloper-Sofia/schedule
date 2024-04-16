import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { data } from '../utils/BarChartData'
import renderLegend from './UI/renderLegendUI';

const BarChartComponent = () => {
    return (
        <div style={{ width: "100%" }}>
            <h2 className='schedule__title'>Кассовое исполнение</h2>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 60,
                        left: 65,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical=""/>
                    <XAxis dataKey="name"/>
                    <YAxis tickCount={16} domain={[0,7500000]}/>
                    <Tooltip />
                    <Legend content={renderLegend} />
                    <Bar dataKey="Сумма заключенных контрактов/договоров, руб." fill="#40EF98" />
                    <Bar dataKey="Кассовое исполнение, руб." fill="#FCD92B" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;