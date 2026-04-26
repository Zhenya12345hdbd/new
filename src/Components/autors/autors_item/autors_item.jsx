

import { Link } from 'react-router'
import Autors_social from './autors_social';




function Autors_item(item) {

  return (
    
            <div className='autors_item'>
                <Link to={'/autors/'+ item.path}>
                <img src={item.photo} className='autors_photo' alt=''/>
                    <h3 className='heading_h3 black'>{item.name}</h3>
                </Link>
                
                <p className='body_2'>{item.profession}</p>
                <Autors_social/>
                
            </div>
        

    
  );
}

export default Autors_item;