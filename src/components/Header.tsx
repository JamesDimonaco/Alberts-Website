import { IonButton, IonHeader } from '@ionic/react'
import React, { useState } from 'react'
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

        <IonButton fill='outline' id='buttons' className='Center'>
          Prints
        </IonButton>
        <IonButton fill='outline' id='buttons' className='Center'>
          Contact
        </IonButton>
      </IonHeader>
    </div>
  )
}
export default Header
