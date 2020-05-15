import * as React from "react";
import "./Footer.css";
import { FaInstagram } from 'react-icons/fa';


const Footer: React.FC<{}> = () => {
  return (
    <div className="footer">
        
            <a href="https://www.tooeasyworldwide.com/" target="_blank"> TooEasy WorldWide  </a>
            <a className="instagramIcon" href="https://www.instagram.com/kiltedtraveller/" target="_blank">  <FaInstagram/>   </a>

        
      </div>
    
  );
};

export default Footer;
