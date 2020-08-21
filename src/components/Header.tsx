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
  function doSomething() {
    console.log('testing')
  }
  return (
    <div id='wrap'>
      <IonHeader className='header' id='black'>
        <IonToolbar id='small'>
          <IonMenuButton
            onClick={() => doSomething()}
            id='testButton'
            slot='start'
            autoHide={false}></IonMenuButton>
          <IonButton
            fill='outline'
            id='button'
            slot='end'
            target='blank'
            href='https://www.instagram.com/kiltedtraveller/'>
            <IonIcon
              className='insta'
              slot='end'
              icon={logoInstagram}></IonIcon>
          </IonButton>
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
        <IonButton
          target='blank'
          href='https://www.instagram.com/kiltedtraveller/'
          fill='outline'
          id='buttons-insta'
          className='Center'>
          <IonIcon icon={logoInstagram} slot='icon-only' />
        </IonButton>
      </IonHeader>
    </div>
  )
}
export default Header
