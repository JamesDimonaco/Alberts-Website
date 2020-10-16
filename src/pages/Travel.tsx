import React from "react";
import "./imagePlacement.css";
import Header from "../components/Header";
import { IonPage, IonContent, IonHeader } from "@ionic/react";

// const image: string = 'https://cdn.discordapp.com/attachments/'
const image: string =
  "https://cdn.discordapp.com/attachments/734782759339556915/7347";

export const Travel: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <div style={{}}>
            <Header theme="" />
          </div>
        </IonHeader>

        <img id="" src={image + "82831779119194/1-min.png"} alt="" />
        <img id="" src={image + "82840541282374/2-min.png"} alt="" />
        <img id="" src={image + "82850565668944/3-min.png"} alt="" />
        <img id="" src={image + "82859298078790/4-min.png"} alt="" />
        <img id="" src={image + "82884476354690/5-min.png"} alt="" />
        <img id="" src={image + "82896111353866/6-min.png"} alt="" />
        <img id="" src={image + "82937941278800/7-min.png"} alt="" />
        <img id="" src={image + "82940915171479/8-min.png"} alt="" />
        <img id="" src={image + "82988902203482/9-min.png"} alt="" />
        <img id="" src={image + "82992521887784/10-min.png"} alt="" />
        <img id="" src={image + "82996229521479/11-min.png"} alt="" />
        <img id="" src={image + "83007570788493/14-min.png"} alt="" />
        <img id="" src={image + "83034313801768/15-min.png"} alt="" />
        <img id="" src={image + "83037761519696/16-min.png"} alt="" />
        <img id="" src={image + "83041477804092/17-min.png"} alt="" />
        <img id="" src={image + "83067113259028/18-min.png"} alt="" />
        <img id="" src={image + "83069579640832/19-min.png"} alt="" />
        <img id="" src={image + "83071680724992/20-min.png"} alt="" />
        <img id="" src={image + "83074189049856/21-min.png"} alt="" />
        <img id="" src={image + "3077007491102/22-min.png"} alt="" />
      </IonContent>
    </IonPage>
  );
};
