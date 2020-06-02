import * as React from "react";
import './Footer.css'
import { FaInstagram } from 'react-icons/fa';
import { IonFooter, IonContent, IonToolbar, IonTitle } from "@ionic/react";


const Footer: React.FC<{}> = () => {
  return (
<IonContent>
    <IonFooter>
      <IonToolbar>
            
            <a href="https://www.tooeasyworldwide.com/" target="_blank"> TooEasy WorldWide  </a> 
            <a className="instagramIcon" href="https://www.instagram.com/kiltedtraveller/" target="_blank">  <FaInstagram/>   </a>

            
            </IonToolbar>
      </IonFooter>
      </IonContent>
  );
};

export default Footer;
