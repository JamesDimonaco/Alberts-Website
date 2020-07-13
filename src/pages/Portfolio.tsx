import React from 'react'
import './Home.css'
import Header from '../components/Header'
import {
  IonPage,
  IonContent,
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonMenu,
  IonList,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonRouterOutlet,
} from '@ionic/react'
import { logoInstagram } from 'ionicons/icons'

export const Portfolio: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
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
        <div className='flex' id='wrap'>
          <IonCard
            className='cards'
            button={true}
            routerLink='/defaultportraits'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/720640374858842134/james4.JPG'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Portraits</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard
            id='fineart'
            className='cards'
            button={true}
            routerLink='/fineart'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/723830451248300042/unknown.png'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle id='white'>Card Subtitle</IonCardSubtitle>
              <IonCardTitle id='white'>Fine Art</IonCardTitle>
            </IonCardHeader>

            <IonCardContent id='white'>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard
            id='arcitecture'
            className='cards'
            button={true}
            routerLink='/arcitecture'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/723829809712594964/unknown.png'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle id='arcitecture'>Card Subtitle</IonCardSubtitle>
              <IonCardTitle id='arcitecture'>Arcitecture</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard className='cards' button={true} routerLink='/home'>
            <img
              src='https://cdn.discordapp.com/attachments/729993223929593866/729993332528381972/unknown.png'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Travel</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        </div>
        <div className='flex' id='wrap'>
          <IonCard className='cards' button={true} routerLink='/home'>
            <img
              src='https://cdn.discordapp.com/attachments/730010772251607132/730010811279474758/unknown.png'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Too EASY</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard className='cards' button={true} routerLink='/portraits'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/720640374858842134/james4.JPG'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Portraits</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  )
}
