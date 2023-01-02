import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from 'dayjs';
import { calculateBiorhythms } from "../lib/biorhythms";
import BiorhythmChart from './BiorhythmChart';

function formatDate(isoString) {
    const day = dayjs(isoString);
    return day.format('D MMMM YYYY');
}
function BiorhythmCard({birthDate, targetDate}) {
    const biorhythms = calculateBiorhythms(birthDate, targetDate)
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    {formatDate(targetDate)}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
                <p>Physical: {biorhythms.physical.toFixed(4) || '-'}</p>
                <p>Emotional: {biorhythms.emotional.toFixed(4) || '-'}</p>
                <p>Intelluctual: {biorhythms.intellectual.toFixed(4) || '-'}</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorhythmCard;