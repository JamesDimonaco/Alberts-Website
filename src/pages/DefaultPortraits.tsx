import React from 'react'
import './Home.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonToggle } from '@ionic/react'

const DefaultPortraits: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>
        </IonHeader>
        <div className=''>
          <IonToggle></IonToggle>

          <img
            id='one'
            src='https://cdn.discordapp.com/attachments/727496094019485797/727497585769840640/james2_done-min.jpg'
            alt=''
          />
        </div>
        <div className='flex'>
          <div className='' id='two'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727497517859602522/2-min.jpg'
              alt=''
            />
          </div>

          <div id='three'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727497526844063764/3-min.jpeg'
              alt=''
            />
          </div>
        </div>
        <div id='four'>
          <img
            src='https://cdn.discordapp.com/attachments/727496094019485797/727497530551566346/4-min.jpg'
            alt=''
          />
        </div>
        <div className='flex'>
          <div id='five'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727497540030693376/5-min.jpeg'
              alt=''
            />
          </div>
          <div id='six'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727497541972918332/6-min.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='flex'>
          <div id='six'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727497546423074866/7-min.jpg'
              alt=''
            />
          </div>
          <div id='five'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727497548360581173/8-min.jpg'
              alt=''
            />
          </div>
        </div>

        <div id='seven'>
          <img
            src='https://cdn.discordapp.com/attachments/727496094019485797/727497552248963173/10-min.png'
            alt=''
          />
        </div>

        <div className='flexpic'>
          <div id='eight'>
            <img
              src='https://cdn.discordapp.com/attachments/727496094019485797/727501925490360420/alina4-min.jpg'
              alt=''
            />
          </div>
          <div id='nine'>
            <img
              src='https://cdn.discordapp.com/attachments/533906819324837944/723534775994024008/unknown.png'
              alt=''
            />
          </div>
        </div>
        <div id='ten'>
          <img
            src='https://cdn.discordapp.com/attachments/533906819324837944/723535976714076201/unknown.png'
            alt=''
          />
        </div>
        <div id='tennn'>
          <img
            src='https://cdn.discordapp.com/attachments/533906819324837944/723536901675417611/unknown.png'
            alt=''
          />
        </div>
        <div id='tenn'>
          <img
            src='https://cdn.discordapp.com/attachments/533906819324837944/723537013550350456/unknown.png'
            alt=''
          />
        </div>
        <div id='tennn'>
          <img
            src='https://cdn.discordapp.com/attachments/533906819324837944/723537143321853952/unknown.png'
            alt=''
          />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default DefaultPortraits
