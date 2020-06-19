import React from 'react'
import './Home.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonText,
    IonGrid,
    IonRow,
} from '@ionic/react'

const Portraits: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonHeader>
                    <div style={{}}>
                        <Header />
                    </div>
                </IonHeader>

                <div className="">
                    <img
                        id="one"
                        src="https://cdn.discordapp.com/attachments/533906819324837944/720639819151048834/james2_done.jpg"
                    />
                </div>
                <div className="flex">
                    <div className="" id="two">
                        {' '}
                        <img src="https://cdn.discordapp.com/attachments/533906819324837944/720639799542677584/jamesdone1.jpg" />
                    </div>

                    <div className="" id="three">
                        <img src="https://cdn.discordapp.com/attachments/533906819324837944/720640374858842134/james4.JPG" />
                    </div>
                </div>

                <div className="" id="four">
                    <img src="https://cdn.discordapp.com/attachments/533906819324837944/720639930300104715/jam88.jpg" />
                </div>

                <div className="flex">
                    <div className="" id="five">
                        <img src="https://storage.googleapis.com/web-images-for-bert/Edited%20all/jamie%20Portraits%20pic%205" />
                    </div>
                    <div className="" id="six">
                        <img src="https://storage.googleapis.com/web-images-for-bert/Edited%20all/Jamie%20Portraits%20pic%206.JPG" />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Portraits
