import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <div className='logo-text'>
          <img src="/C*.jpg" alt="Charan's" />
          <p className='white-text'>CryptoVisionary</p>
        </div>
        {/* <div className='place-end'> */}
          <div className='social-icons'>
           <a href="https://github.com/charans29"><FontAwesomeIcon icon={faGithub} style={{color: '#AA98A9'}} /></a>
           <a href="https://linkedin.com/in/saicharanmodugula"><FontAwesomeIcon icon={faLinkedin} style={{color: '#AA98A9'}} /></a>
           <a href="https://instagram.com/yourusername"><FontAwesomeIcon icon={faInstagram} style={{color: '#AA98A9'}} /></a>
           <a href="mailto:your-email@example.com"><FontAwesomeIcon icon={faEnvelope} style={{color: '#AA98A9'}} /></a>
          </div>
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;



