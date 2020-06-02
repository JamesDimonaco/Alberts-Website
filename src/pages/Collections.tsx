import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonActionSheet} from '@ionic/react';
import './Collections.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DefaultCollection } from '../components/Collections/DefaultCollection'



const Collections: React.FC = () => {




  return (
    <IonPage>

        <Header/>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>

        </IonHeader>
        
          <DefaultCollection/>

        <Footer/>
      </IonContent>
    </IonPage>
  );
};

          export default Collections;

