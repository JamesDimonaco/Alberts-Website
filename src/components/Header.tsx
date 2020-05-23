import React from "react";
import { IonToolbar, IonTitle, IonButton, IonHeader } from "@ionic/react";
import '../pages/Home.css';

const Header: React.FC = () => {
    return(
        <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonButton id="buttons" className="leftButterCenter" routerLink='/home'>Home</IonButton>
            <IonButton id="buttons" className="Center" routerLink='/Collections'>Collections</IonButton>
            <IonButton id="buttons" className="Center">Prints</IonButton>
            <IonButton id="buttons" className="Center">Contact</IonButton>
          </IonTitle>
        </IonToolbar>
        </IonHeader>
    )
}

export default Header;

