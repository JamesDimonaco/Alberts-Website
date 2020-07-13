import React from 'react'
import './imagePlacement.css'
import Header from '../components/Header'
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToggle,
  IonMenu,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonRouterOutlet,
} from '@ionic/react'
import { logoInstagram } from 'ionicons/icons'

export const Prints: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false}>
        <IonHeader>
          <div style={{}}>
            <Header />
            <IonMenu
              type='overlay'
              swipeGesture={false}
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
                    Instagram <IonIcon name={logoInstagram}></IonIcon>
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
          </div>
        </IonHeader>
        <div className='bgimg'>
          <IonToggle></IonToggle>
          <h1 className='middle'>
            <strong>COMING SOON</strong>
          </h1>
        </div>
      </IonContent>
    </IonPage>
  )
}
