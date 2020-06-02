import React from 'react';
import { IonContent, IonGrid, IonRow, IonCol} from '@ionic/react';
import './allCollections.css';


export const DefaultCollection: React.FC = () => (
        <IonContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className='test'><p>The Italy Collection</p></div>
                </IonCol>
                <IonCol>
                  <div><p>The Africa Collection</p></div>
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
                    <div className="pic1"><img src="https://storage.googleapis.com/web-images-for-bert/Africa/train%20pgtp.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div className="pic1"><img src="https://static.wixstatic.com/media/0dfd41_442926dbcbf543ba90f982f1bd414e55~mv2_d_3264_1836_s_2.jpg/v1/fill/w_2471,h_1390,al_c,q_90,usm_0.66_1.00_0.01/0dfd41_442926dbcbf543ba90f982f1bd414e55~mv2_d_3264_1836_s_2.webp"></img></div>
                  </IonCol>
                  <IonCol>
                    <div className="pic1"><img src="https://cdn.discordapp.com/attachments/533906819324837944/711226559679168593/image0.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div className="pic1"><img src="https://storage.googleapis.com/web-images-for-bert/Africa/tinder4.jpg"></img></div>
                  </IonCol>
                  <IonCol>
                    <div className="pic1"><img src="https://storage.googleapis.com/web-images-for-bert/Africa/train%20pgtp.jpg"></img></div>
                  </IonCol>
                </IonRow>
                
       


             </IonGrid>

        </IonContent>
);
