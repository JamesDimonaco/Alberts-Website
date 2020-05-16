import React from 'react';
import { IonGrid, IonCol, IonContent, IonRow } from '@ionic/react';



const italianCollection: React.FC = () => {
    return ( 
    
    
    <IonContent>
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

    </IonContent>)};

    export default italianCollection;