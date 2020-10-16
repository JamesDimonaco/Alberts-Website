import { IonButton, IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import { logoInstagram } from "ionicons/icons";
import React from "react";
import "./Header.css";
interface HeaderProps {
  theme: string;
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  return (
    <IonHeader>
      <IonToolbar className={theme}>
        <div id={theme} className="center">
          {/* <IonImg
          className="mainLogo"
          alt=""
          src="https://cdn.discordapp.com/attachments/731147813592891392/731172654085832845/whiteicon.png"
        /> */}
          <IonButton className={theme} fill="clear" routerLink="/home">
            Home
          </IonButton>
          <IonButton className={theme} fill="clear" routerLink="/hire">
            HIRE
          </IonButton>

          <IonButton className={theme} fill="clear" routerLink="/works">
            WORKS
          </IonButton>
          <IonButton className={theme} routerLink="/prints" fill="clear">
            PRINTS
          </IonButton>
          <IonButton
            className={theme}
            fill="clear"
            target="blank"
            href="https://www.instagram.com/kiltedtraveller/"
          >
            <IonIcon icon={logoInstagram} />
          </IonButton>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
