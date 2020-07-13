import {
  IonButton,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonToolbar,
} from '@ionic/react'
import { logoInstagram } from 'ionicons/icons'
import React from 'react'
import '../pages/Home.css'

const Header: React.FC = () => {
  return (
    <div id='wrap'>
      <IonHeader className='header' id='black'>
        <IonToolbar id='small'>
          <IonMenuButton slot='start' autoHide={false}></IonMenuButton>

          <IonIcon
            className='insta'
            slot='start'
            name={logoInstagram}></IonIcon>
        </IonToolbar>
        <img
          className='logo'
          src='https://cdn.discordapp.com/attachments/731147813592891392/731172654085832845/whiteicon.png'
          alt=''
        />

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
        <IonIcon
          name='logo-instagram'
          className='insta'
          src='https://cdn.discordapp.com/attachments/731147813592891392/731171750653460525/icon.png'></IonIcon>
      </IonHeader>
    </div>
  )
}
export default Header
