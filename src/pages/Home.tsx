import {
  IonContent,
  IonHeader,
  IonPage,
  IonIcon,
  IonMenu,
  IonRouterOutlet,
  IonItem,
  IonList,
  IonMenuToggle,
} from '@ionic/react'
import React from 'react'
import './Home.css'
import Header from '../components/Header'
import { logoInstagram } from 'ionicons/icons'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false}>
        <IonHeader style={{ background: '#ffffff' }}>
          <Header />
        </IonHeader>
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
        <img className='logo' src='../../public/assets/icon/icon.png' alt='' />

        <div className='Centering'>
          <img
            className='bertFace'
            src='https://static.wixstatic.com/media/0dfd41_70930db19992466189109c270dd826f1~mv2.jpg/v1/fill/w_1498,h_1662,al_c,q_90,usm_0.66_1.00_0.01/face%20spalt.webp'
            alt='Albert'
          />
        </div>
        <IonIcon className='insta' slot='end' name='logo-instagram'></IonIcon>
      </IonContent>
    </IonPage>
  )
}

export default Home
