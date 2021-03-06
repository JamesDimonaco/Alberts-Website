import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Portraits from "./pages/Portraits";
import DefaultPortraits from "./pages/DefaultPortraits";
import { FineArt } from "./pages/FineArt";
import { Architecture } from "./pages/Architecture";
import { Prints } from "./pages/Prints";
import { Travel } from "./pages/Travel";
import { Works } from "./pages/Works";
import { Hire } from "./pages/Hire";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/defaultportraits" component={DefaultPortraits} />
        <Route path="/fineart" component={FineArt} />
        <Route path="/works" component={Works} />
        <Route path="/hire" component={Hire} />
        <Route path="/arcitecture" component={Architecture} />
        <Route path="/prints" component={Prints} />
        <Route path="/travel" component={Travel} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
