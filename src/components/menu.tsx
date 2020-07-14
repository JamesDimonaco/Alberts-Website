import {
  IonContent,
  IonPage,
  IonIcon,
  IonMenu,
  IonRouterOutlet,
  IonItem,
  IonList,
  IonMenuToggle,
} from '@ionic/react'
import React from 'react'
import '../pages/Home.css'
import { logoInstagram } from 'ionicons/icons'

export const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonMenu
          type='overlay'
          swipeGesture={true}
          side='start'
          contentId='content'>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink='./home'>Home</IonItem>
              <IonItem routerLink='./portfolio'>Portfolio</IonItem>
              <IonItem routerLink='./prints'>Prints</IonItem>
              <IonItem>Contact</IonItem>
              <IonItem
                target='blank'
                href='https://www.instagram.com/kiltedtraveller/'>
                <IonIcon
                  className='insta'
                  slot='start'
                  icon={logoInstagram}></IonIcon>{' '}
                Instagram
              </IonItem>
            </IonMenuToggle>
            <img
              className='logo'
              src='https://cdn.discordapp.com/attachments/731147813592891392/731172654085832845/whiteicon.png'
              alt=''
            />
          </IonList>
        </IonMenu>
        <IonRouterOutlet id='content'></IonRouterOutlet>
      </IonContent>
    </IonPage>
  )
}
