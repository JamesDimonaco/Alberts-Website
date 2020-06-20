import React from 'react'
import './Home.css'
import Header from '../components/Header'
import { IonPage, IonContent, IonHeader, IonButton } from '@ionic/react'

const Portraits: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header />
          </div>
        </IonHeader>
        <div className=''>
          <img
            id='one'
            src='https://cdn.discordapp.com/attachments/533906819324837944/720639819151048834/james2_done.jpg'
          />
        </div>
        <div className='flex'>
          <div className='' id='two'>
            <img src='https://cdn.discordapp.com/attachments/533906819324837944/720639799542677584/jamesdone1.jpg' />
          </div>

          <div id='three'>
            <img src='https://cdn.discordapp.com/attachments/533906819324837944/720640374858842134/james4.JPG' />
          </div>
        </div>
        <div id='four'>
          <img src='https://cdn.discordapp.com/attachments/533906819324837944/720639930300104715/jam88.jpg' />
        </div>
        <div className='flex'>
          <div id='five'>
            <img src='https://storage.googleapis.com/web-images-for-bert/Edited%20all/jamie%20Portraits%20pic%205' />
          </div>
          <div id='six'>
            <img src='https://storage.googleapis.com/web-images-for-bert/Edited%20all/Jamie%20Portraits%20pic%206.JPG' />
          </div>
        </div>
        <div className='flex'>
          <div id='six'>
            <img src='https://cdn.discordapp.com/attachments/533906819324837944/720639880945729706/jamie_instasend_.jpg' />
          </div>
          <div id='five'>
            <img src='https://cdn.discordapp.com/attachments/533906819324837944/720639927573807184/jam3.jpg' />
          </div>
        </div>

        <div id='seven'>
          <img src='https://cdn.discordapp.com/attachments/533906819324837944/723537677655474256/unknown.png' />
        </div>

        <div className='flexpic'>
          <div id='eight'>
            <img src='https://cdn.discordapp.com/attachments/533906819324837944/720641274281197648/alina4.jpg' />
          </div>
          <div id='nine'>
            <img src='https://cdn.discordapp.com/attachments/533906819324837944/723534775994024008/unknown.png' />
          </div>
        </div>
        <div id='ten'>
          <img src='https://cdn.discordapp.com/attachments/533906819324837944/723535976714076201/unknown.png' />
        </div>
        <div id='tennn'>
          <img src='https://cdn.discordapp.com/attachments/533906819324837944/723536901675417611/unknown.png' />
        </div>
        <div id='tenn'>
          <img src='https://cdn.discordapp.com/attachments/533906819324837944/723537013550350456/unknown.png' />
        </div>
        <div id='tennn'>
          <img src='https://cdn.discordapp.com/attachments/533906819324837944/723537143321853952/unknown.png' />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Portraits
