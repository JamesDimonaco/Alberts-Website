import React from "react";
import { IonToolbar, IonTitle, IonButton, IonHeader, IonContent } from "@ionic/react";
import '../pages/Home.css';



const Header: React.FC = () => {
    return(
        <IonHeader id="black">
       
         
            <IonButton fill="outline" id="buttons" className="leftButterCenter" routerLink='/home'>Home</IonButton>
            <IonButton fill="outline" id="buttons" className="Center" routerLink='/portraits'>Portraits</IonButton>
            <IonButton fill="outline" id="buttons" className="Center">Prints</IonButton>
            <IonButton fill="outline" id="buttons" className="Center">Contact</IonButton>
                
        </IonHeader>

    )
}

export default Header;

