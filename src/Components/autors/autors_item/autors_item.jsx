

import instagram from '../../../images/instagram.png'
import twitter from '../../../images/twitter.png'
import facebook from '../../../images/Facebook.png'
import linked from '../../../images/linked.png'



function Autors_item(item) {

  return (
    
            <div className='autors_item'>
                <img src={item.photo} className='autors_photo' alt=''/>
                <h3 className='heading_h3'>{item.name}</h3>
                <p className='body_2'>{item.profession}</p>
                <div className='autors_social'>
                    <img src={facebook} alt=''/>
                    <img src={linked} alt=''/>
                    <img src={instagram} alt=''/>
                    <img src={twitter} alt=''/>
                </div>
            </div>
        

    
  );
}

export default Autors_item;