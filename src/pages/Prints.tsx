import React from 'react'
import './imagePlacement.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonToggle } from '@ionic/react'

export const Prints: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false}>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>
        </IonHeader>
        <div className='bgimg'>
          <IonToggle></IonToggle>
          <h1 className='middle'>
            <strong>COMEING SOON</strong>
          </h1>
        </div>
      </IonContent>
    </IonPage>
  )
}
