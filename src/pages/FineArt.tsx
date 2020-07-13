import React from 'react'
import './imagePlacement.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonToggle } from '@ionic/react'

const image: string =
  'https://cdn.discordapp.com/attachments/729017941210955886/729018'

export const FineArt: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>
        </IonHeader>
        <div>
          <img id='fa1' src={image + '368576847972/1-min.png'} alt='' />
          <div id='fad1' className='flex'>
            <img id='fa2' src={image + '406719979600/2-min.png'} alt='' />
            <img id='fa3' src={image + '419302629396/3-min.png'} alt='' />
          </div>
          <div className='flex' id='fad2'>
            <img id='fa4' src={image + '426659569754/4-min.png'} alt='' />
            <img id='fa5' src={image + '434473426984/5-min.png'} alt='' />
            <img id='fa6' src={image + '444472778762/6-min.png'} alt='' />
            <img id='fa7' src={image + '451955286078/7-min.png'} alt='' />
          </div>

          <div className='flex' id='fad3'>
            <img id='fa8' src={image + '479100952576/8-min.png'} alt='' />
            <img id='fa9' src={image + '495429378068/9-min.png'} alt='' />
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

//<img id='' src='' alt=''/>
