
import Promo_text3 from '../../promo/text/promo_text3';
import { myStyles } from '../../posts/myStyles_black';
import { Link } from 'react-router';




function Read_next_item(next_item) {
    
  return (
   
            <div className='what_to_read_item' id={next_item.id}>
                <Link to={`/item/${next_item.id}`} ><img src={next_item.photo} alt=''/></Link>
                <Promo_text3 style={myStyles} text={next_item.autor}/>
                <h3 className='heading_h3'>
                    A UX Case Study Creating a Studious Environment for Students: 
                </h3>
                <p className='body_1'>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
           

  )
}

export default Read_next_item;