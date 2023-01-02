import {LineChart, ResponsiveContainer, Line} from 'recharts';
import { calculateBiorhythmsSeries } from '../lib/biorhythms';

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