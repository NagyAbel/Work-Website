import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>&copy; {currentYear} Nagy Ábel</p>
      <div className='footer-links'>
        <a 
          href="https://github.com/NagyAbel" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub className="social-icon" />
          <span>GitHub</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/nagy-abel/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="social-icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;