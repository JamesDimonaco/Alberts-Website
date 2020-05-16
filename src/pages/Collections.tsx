import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Collections.css';
import Footer from '../components/Footer';
import Header from '../components/Header';



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



          <Footer/>
      </IonContent>
    </IonPage>
  );
};

          export default Collections;

