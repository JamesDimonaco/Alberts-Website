import React from 'react'
import './imagePlacement.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonToggle } from '@ionic/react'

const image: string = 'https://cdn.discordapp.com/attachments/'

export const FineArt: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>
        </IonHeader>
        <IonToggle></IonToggle>
        <div>
          <img
            id='fa1'
            src={image + '729017941210955886/729018368576847972/1-min.png'}
            alt=''
          />
          <div id='fad1' className='flex'>
            <img
              id='fa2'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018406719979600/2-min.png'
              alt=''
            />
            <img
              id='fa3'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018419302629396/3-min.png'
              alt=''
            />
          </div>
          <div className='flex' id='fad2'>
            <img
              id='fa4'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018426659569754/4-min.png'
              alt=''
            />
            <img
              id='fa5'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018434473426984/5-min.png'
              alt=''
            />
            <img
              id='fa6'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018444472778762/6-min.png'
              alt=''
            />
            <img
              id='fa7'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018451955286078/7-min.png'
              alt=''
            />
          </div>

          <div className='flex' id='fad3'>
            <img
              id='fa8'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018479100952576/8-min.png'
              alt=''
            />
            <img
              id='fa9'
              src='https://cdn.discordapp.com/attachments/729017941210955886/729018495429378068/9-min.png'
              alt=''
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

//<img id='' src='' alt=''/>
