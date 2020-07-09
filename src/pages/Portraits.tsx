import React from 'react'
import './Home.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonToggle } from '@ionic/react'

const image: string = 'cdn.discordapp.com/attachments/533906819324837944/7206'

const Portraits: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>
        </IonHeader>
        <IonToggle></IonToggle>
        <div className=''>
          <img id='one' src={image + '39819151048834/james2_done.jpg'} alt='' />
        </div>
        <div className='flex'>
          <div className='' id='two'>
            <img src={image + '39799542677584/jamesdone1.jpg'} alt='' />
          </div>

          <div id='three'>
            <img src={image + '40374858842134/james4.JPG'} alt='' />
          </div>
        </div>
        <div id='four'>
          <img src={image + '39930300104715/jam88.jpg'} alt='' />
        </div>
        <div className='flex'>
          <div id='five'>
            <img
              src='https://storage.googleapis.com/web-images-for-bert/Edited%20all/jamie%20Portraits%20pic%205'
              alt=''
            />
          </div>
          <div id='six'>
            <img
              src='https://storage.googleapis.com/web-images-for-bert/Edited%20all/Jamie%20Portraits%20pic%206.JPG'
              alt=''
            />
          </div>
        </div>
        <div className='flex'>
          <div id='six'>
            <img src={image + '39880945729706/jamie_instasend_.jpg'} alt='' />
          </div>
          <div id='five'>
            <img src={image + '39927573807184/jam3.jpg'} alt='' />
          </div>
        </div>

        <div id='seven'>
          <img
            src='https://cdn.discordapp.com/attachments/533906819324837944/723537677655474256/unknown.png'
            alt=''
          />
        </div>

        <div className='flexpic'>
          <div id='eight'>
            <img src={image + '41274281197648/alina4.jpg'} alt='' />
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

export default Portraits
