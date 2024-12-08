import React from 'react';
import './App.css';


// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/KasimIbrahimAdil', icon: faFacebook },
  { name: 'Twitter', url: 'https://twitter.com/kasim__adil', icon: faTwitter },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kasim__adil', icon: faLinkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/kasim__adil', icon: faInstagram },
  { name: 'GitHub', url: 'https://github.com/kasimAdil5', icon: faGithub },
];

function App() {
  return (
    <div className="container">
      <h1>Connect With Me</h1>
      <div className="social-icons">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
