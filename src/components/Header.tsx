import { IonButton, IonHeader, IonIcon } from '@ionic/react'
import React from 'react'
import '../pages/Home.css'

const Header: React.FC = () => {
  return (
    <div id='wrap'>
      <IonHeader className='header' id='black'>
        <IonButton
          fill='outline'
          id='buttons'
          className='Center'
          routerLink='/home'>
          Home
        </IonButton>
        <IonButton
          fill='outline'
          id='buttons'
          className='Center'
          routerLink='/portfolio'>
          Portfolio
        </IonButton>

        <IonButton
          fill='outline'
          id='buttons'
          className='Center'
          routerLink='/prints'>
          Prints
        </IonButton>
        <IonButton fill='outline' id='buttons' className='Center'>
          Contact
        </IonButton>
        <IonIcon name='heart-outline' size='large' />
        <IonIcon src='/Users/jamesdimonaco/me/Alberts-Website/src/icons' />
      </IonHeader>
    </div>
  )
}
export default Header
