import React from 'react'
import './imagePlacement.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonToggle } from '@ionic/react'

// const image: string = 'https://cdn.discordapp.com/attachments/'

export const Architecture: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>

          <img
            className='logo'
            src='../../public/assets/icon/icon.png'
            alt=''
          />
        </IonHeader>
        <IonToggle></IonToggle>
      </IonContent>
    </IonPage>
  )
}
