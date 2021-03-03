import React, {useRef, useState} from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAlert } from '@ionic/react';
import { logIn, person,  } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const name = useRef<HTMLIonInputElement>(null);
  const lastName = useRef<HTMLIonInputElement>(null);
  const [nameFirst, setNameFirst] = useState<string>('');
  const [showAlert1, setShowAlert1] = useState(false);

  const getName = () =>{
    var value= name.current?.value;
    var val= lastName.current?.value;
    setShowAlert1(true)
  }
  const arry = [
    {name:"s"},
    {name:"s"},
    {name:"s"},
    {name:"s"}

  ]

return (
  <>
       <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Alert'}
          subHeader={'Subtitle'}
          message={'This is an alert message.'}
          buttons={['OK']}
        />
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          Yewwo Merchant
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol>
           <IonItem>
            <IonIcon slot="start" icon={person}  />
            <IonLabel position="floating">Name</IonLabel>
            <IonInput ref={name}>
            </IonInput>
           </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
           <IonItem>
           <IonIcon slot="start" icon={person}  />
            <IonLabel position="floating">Last Name</IonLabel>
            <IonInput ref={lastName} onIonChange={(e)=>{setNameFirst(e.detail.value!)}} >
            </IonInput>
           </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton  onClick={getName}>
              <IonIcon  slot="start" icon={logIn}/>
              Login
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton onClick={getName}>
              <IonIcon slot="start" icon={logIn}/>
              Registration
            </IonButton>
          </IonCol>
        </IonRow>
        {nameFirst && (
        <IonRow>
          <IonCol>
            <IonCard>
              { arry.map((item,index)=>(
                <IonCardHeader key={index}>
                <IonCardSubtitle>{item.name}</IonCardSubtitle>
                <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>
              )) }
           
            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
          </IonCard>
          </IonCol>
        </IonRow>
        )}
      </IonGrid>
    </IonContent>
  </IonApp>
  </>
);
}

export default App;
