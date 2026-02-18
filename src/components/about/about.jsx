import './about.css'
import logo from "../../assets/profile.jpeg";

function About() {
  return (
    <div className='about'>
        <h2>Something short about myself</h2>
        <img  className='profile-image' src={logo}/>
        <p class="description">
          My name is Nagy Ábel Gergely, currently studying Computer Science in the city of Szeged. I have
          been interested in software development from an early age, and since then, I have
          managed to learn a great deal in the field. Around four years ago, I started my freelancing
          business, where I had the opportunity to collaborate with numerous clients on a variety of
          projects. Since 2024, I have been spending most of my time in Szeged, and I am eager to
          further expand my knowledge in the field by finding the right company to work with!
        </p>
        
    </div>

  )
}

export default About
