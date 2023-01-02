import { IonApp, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import {useStoredState} from './lib/hooks';

function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length);
}
function App() {
  const [targetDate, setTargetDate] = useState(getToday);
  const [birthDate, setBirthDate] = useStoredState('birthDate', '');

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position='stacked'>TargetDate:</IonLabel>        
            <IonInput value={targetDate} onIonChange={(event) => setTargetDate(event.detail.value)} type="date"/>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel position='stacked'>DOB:</IonLabel>        
            <IonInput value={birthDate} onIonChange={(event) => setBirthDate(event.detail.value)} type="date"/>
          </IonItem>
        </IonList>
        {Boolean(birthDate) && <BiorhythmCard targetDate={targetDate} birthDate={birthDate}/>}
      </IonContent>
    </IonApp>
  );
}

export default App;
