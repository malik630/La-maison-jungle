import { useState } from 'react';
import '../Styles/Footer.css';

function Footer() {
  const [inputValue, setInputValue] = useState('');

  function handleBlur() {
    if (!inputValue.includes('@')) {
      alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-content">
        <div className="lmj-footer-elem">
          <span className="footer-text">
            Pour les passionné·e·s de plantes 
            <span className="plant-emojis">🌿🌱🌵</span>
          </span>
        </div>
        
        <div className="lmj-footer-newsletter">
          <div className="lmj-footer-elem newsletter-title">
            Laissez-nous votre mail :
          </div>
          <div className="input-container">
            <input
              type="email"
              className="email-input"
              placeholder="votre.email@exemple.com"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleBlur}
              required
            />
            <span className="email-icon">✉️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;