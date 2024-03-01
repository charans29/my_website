import './App.css';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCopyright} from '@fortawesome/free-regular-svg-icons'

function App() {
  useEffect(() => {
        const stars = document.createElement('div');
        stars.className = 'stars';
        for (let i = 0; i < 1000; i++) {
          let star = document.createElement('div');
          star.className = 'star';
          star.style.top = Math.random() * window.innerHeight + 'px';
          star.style.left = Math.random() * window.innerWidth + 'px';
          stars.appendChild(star);
        }
        document.body.appendChild(stars);
      }, []);
  return (
    <div className="App">
      <header className='App-header'>
        <div className='logo-text'>
          <img src="/C.jpg" alt="Charan's" />
          <p className='text-color'>CryptoVisionary</p>
        </div>
        <div className='social-icons'>
          <a href="https://github.com/charans29"><FontAwesomeIcon icon={faGithub} style={{color: '#AA98A9'}} /></a>
          <a href="https://linkedin.com/in/saicharanmodugula"><FontAwesomeIcon icon={faLinkedinIn} style={{color: '#AA98A9'}} /></a>
          <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faEnvelope} style={{color: '#AA98A9'}} /></a>
          <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faXTwitter} style={{color: '#AA98A9'}} /></a>
        </div>
      </header>
      
      <body className='App-body'>
        <img src="/mylook.jpeg" alt="Charan's" />
      </body>

      <footer className='App-footer gradient-wrapper'>
        <div className='size'><FontAwesomeIcon icon={faCopyright} style={{color: '#AA98A9'}} /></div>
        <p className='text-color'>2024 Charan . All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;



