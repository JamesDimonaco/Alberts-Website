import { IonContent, IonHeader, IonPage, IonIcon } from '@ionic/react'
import React from 'react'
import './Home.css'
import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false}>
        <IonHeader style={{ background: '#ffffff' }}>
          <Header />
          <IonIcon name='me-heart-outline' size='large'></IonIcon>
          <IonIcon src='/Users/jamesdimonaco/me/Alberts-Website/src/icons'></IonIcon>
        </IonHeader>

        <div className='Centering'>
          <img
            className='bertFace'
            src='https://static.wixstatic.com/media/0dfd41_70930db19992466189109c270dd826f1~mv2.jpg/v1/fill/w_1498,h_1662,al_c,q_90,usm_0.66_1.00_0.01/face%20spalt.webp'
            alt='Albert'
          />
        </div>
        <div></div>
      </IonContent>
    </IonPage>
  )
}

export default Home
