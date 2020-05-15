import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol} from '@ionic/react';
import './Collections.css';


const Collections: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <IonButton className="leftButterCenter" routerLink='/home'>Home</IonButton>
              <IonButton className="Center">Collections</IonButton>
             <IonButton className="Center">Prints</IonButton>
             <IonButton className="Center">Contact</IonButton></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonGrid className="Photowall">
              <IonRow>
                <IonCol>
                  <div><p>Collection 1</p></div>
                </IonCol>
                <IonCol>
                  <div><p>Collection 2</p></div>
                </IonCol>
                <IonCol>
                  <div><p>Collection 3</p></div>
                </IonCol>
                <IonCol>
                  <div><p>Collection 4</p></div>
                </IonCol>
                <IonCol>
                  <div><p>Collection 5</p></div>
                </IonCol>
              </IonRow>
                <IonRow>
                  <IonCol>
                    <div><img src="https://storage.googleapis.com/web-images-for-bert/Africa/IMG_0015-2.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div><img src="https://storage.googleapis.com/web-images-for-bert/Africa/face-2.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div><img src="https://storage.googleapis.com/web-images-for-bert/Africa/girl-23.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div><img src="https://storage.googleapis.com/web-images-for-bert/Africa/tinder4.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div><img src="https://storage.googleapis.com/web-images-for-bert/Africa/train%20pgtp.jpg"></img></div>
                  </IonCol>
                </IonRow>


          </IonGrid>
      </IonContent>
    </IonPage>
  );
};

          export default Collections;

