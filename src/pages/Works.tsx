import React from "react";
import Header from "../components/Header";
import { IonPage, IonContent } from "@ionic/react";
import "./Home.css";

export const Works: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="Background">
        <Header theme="works" />
      </IonContent>
    </IonPage>
  );
};
