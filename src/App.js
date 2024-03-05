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
      <header className='App-header '>
        <div className='logo-text'>
          <img src="/C.jpg" alt="Charan's" />
          <p className='text-color kode-mono-text'>CryptoVisionary</p>
        </div>
        <div className='social-icons'>
          <a href="https://github.com/charans29"><FontAwesomeIcon icon={faGithub} style={{color: '#F3F9FC'}} /></a>
          <a href="https://linkedin.com/in/saicharanmodugula"><FontAwesomeIcon icon={faLinkedinIn} style={{color: '#F3F9FC'}} /></a>
          <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faEnvelope} style={{color: '#F3F9FC'}} /></a>
          <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faXTwitter} style={{color: '#F3F9FC'}} /></a>
        </div>
      </header>

     
      
      <body className='App-body'>

        <div class="box1 text-color" style={{marginLeft:.5, height:101, marginRight:45}}>
          <p className='kode-mono-text' style={{marginTop:-10, textAlign:'justify'}}>
            Hello! I'm Charan..
            <div style={{marginTop:5}}> CS Grad. from Chico State. I'm a passionate and dedicated developer with a focus on decentralized 
            applications (dApps). My journey in the world of blockchain technology has led me to work on projects like EthosX and 
            contribute to the enhancement of DeFi security. I'm proud to be an Abstract Hacks Prize Winner and am always looking for 
            new challenges and opportunities to grow and innovate in this exciting field.I'm proud to be an Abstract Hacks Prize Winner 
            and am always looking for new challenges and opportunities to grow and innovate in this exciting field. Looking for new 
            challenges and opportunities to grow and innovate in this exciting field. </div>
          </p>
        </div>
        
        <div class="box2 text-color animate" style={{marginRight:5}}></div>
        
        <div class="box3 text-color kode-mono-text" style={{marginLeft:.5, marginRight:5, height:300, marginTop:55}}>dApp</div>
        <div className="text-gutter2 text-color animate kode-mono-text" style={{marginTop:20, marginRight:50}}>PROJECTS</div>
        <div class="box4 text-color kode-mono-text" style={{marginLeft:.5, height:300, marginTop:55, marginRight:45}}>DriveX</div>

        <div class="box5 text-color kode-mono-text" style={{marginRight:5, marginTop:35}}>SKILLS</div>
        <div className="text-gutter3 text-color animate kode-mono-text" style={{marginLeft:.5, marginTop:270, marginRight:150}}>ACHIEVEMENTS</div>
        
        <div class="box6 text-color kode-mono-text" style={{marginLeft:.5, marginRight:5, height:150, marginTop:305}}>Abstract Hacks Prize Winner</div>
        <div className="research text-color animate kode-mono-text" style={{marginLeft:.5, marginTop:270, marginRight:700}}>REASEARCH</div> 
        <div class="box7 text-color kode-mono-text" style={{marginLeft:.5, marginTop:305, height:150, marginRight:45}}>DeFi Security Enhancement: A web3 paradigm</div>

      </body>

      <footer className='App-footer gradient-wrapper '>
        <div className='size'><FontAwesomeIcon icon={faCopyright} style={{color: '#F3F9FC'}} /></div>
        <p className='text-color kode-mono-text'>2024 Charan . All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;