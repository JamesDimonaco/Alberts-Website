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
} from '@ionic/react'

export const Portfolio: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <Header />
        </IonHeader>
        <div className='flex'>
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

          <IonCard className='cards' button={true} routerLink='/home'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/723830451248300042/unknown.png'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Fine Art</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard className='cards' button={true} routerLink='/portraits'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/723829809712594964/unknown.png'
              alt=''
            />
            <IonCardHeader>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
              <IonCardTitle>Arcitecture</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonCard className='cards' button={true} routerLink='/home'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/723830309275303956/unknown.png'
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
      </IonContent>
    </IonPage>
  )
}