import {LineChart, ResponsiveContainer, Line} from 'recharts';
import { calculateBiorhythmsSeries } from '../lib/biorhythms';
const data = [
    { date: '2022-10-01', physical: 1.0, emotional: -0.5, intellectual: -1.5},
    {date: '2022-10-02', physical: 1.0, emotional: -1, intellectual: -1.0},
    {date: '2022-10-03', physical: 1.0, emotional: 1, intellectual: 1.0},
];

function BiorhythmChart({birthDate, targetBate}) {
    const series = calculateBiorhythmsSeries(birthDate, targetBate, 3);
    return(
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={series}>
                <Line dataKey="physical" stroke='green'/>
                <Line dataKey="emotional" stroke='red'/>
                <Line dataKey="intellectual" stroke='blue'/>
            </LineChart>
        </ResponsiveContainer>
    )
}

export default BiorhythmChart;