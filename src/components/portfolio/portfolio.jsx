import './portfolio.css'
import gm from "../../assets/gm.png";
import blockways from "../../assets/blockways.png";
import server from "../../assets/server.png";

function Portfolio() {
  return (
    <div className='portfolio'>
        <h2>A few projects:</h2>
        <div className='item-holder'>
           <div className='item'>
              <p className='item-title'>Car Configurator</p>

              <img className='item-image' src={gm}/>
              <p className='item-description'>This is the description of the given project!</p>
            </div>
          <div className='item'>
              <p className='item-title'>Blockways</p>

              <img className='item-image' src={blockways}/>
              <p className='item-description'>This is the description of the given project!</p>
            </div>
            <div className='item'>
              <p className='item-title'>Bus tracker V1</p>

              <img className='item-image' src={server}/>
              <p className='item-description'>This is the description of the given project!</p>
            </div>
          <div className='item'>
              <p className='item-title'>Bus tracker V1</p>

              <img className='item-image' src={server}/>
              <p className='item-description'>This is the description of the given project!</p>
            </div>
          <div className='item'>
              <p className='item-title'>Bus tracker V1</p>

              <img className='item-image' src={server}/>
              <p className='item-description'>This is the description of the given project!</p>
            </div>
        </div>
       
        
    </div>

  )
}

export default Portfolio
