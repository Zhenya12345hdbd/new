

import instagram from '../../../images/instagram.png'
import twitter from '../../../images/twitter.png'
import facebook from '../../../images/Facebook.png'
import linked from '../../../images/linked.png'




function Autors_social(soci) {

  return (

                <div style={soci.social} className='autors_social' >
                    <img src={facebook} alt=''/>
                    <img src={linked} alt=''/>
                    <img src={instagram} alt=''/>
                    <img src={twitter} alt=''/>
                </div>
    
  );
}

export default Autors_social;