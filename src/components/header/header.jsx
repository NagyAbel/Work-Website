import './header.css'

function Header({title,message,onNavigate,currentSection}) {

const getButtonClass = (section) =>
  currentSection === section ? "nav-button active" : "nav-button";

  return (
    <div className='header'>
        
        <div className='nav-bar'>
          <div className='left'>
            <h1>{title}</h1>
            <h4>{message}</h4>
          </div>
          <div className='center'>
            <button className={getButtonClass("contact")} onClick={()=>onNavigate("contact")}>Contact</button>
            <button className={getButtonClass("about")} onClick={()=>onNavigate("about")}>About Me</button>
            <button className={getButtonClass("portfolio")} onClick={()=>onNavigate("portfolio")}>Portfolio</button>
          </div>
          <div className='right'>
              <button className='nav-button'>HU/EN/RO</button>
          </div>
      </div>
    </div>

  )
}

export default Header
