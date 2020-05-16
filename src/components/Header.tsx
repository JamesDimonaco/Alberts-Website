import React from "react";
import { IonToolbar, IonTitle, IonButton, IonHeader } from "@ionic/react";


const Header: React.FC = () => {
    return(
        <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonButton className="leftButterCenter" routerLink='/home'>Home</IonButton>
            <IonButton className="Center" routerLink='/Collections'>Collections</IonButton>
            <IonButton className="Center">Prints</IonButton>
            <IonButton className="Center">Contact</IonButton>
          </IonTitle>
        </IonToolbar>
        </IonHeader>
    )
}

export default Header;

