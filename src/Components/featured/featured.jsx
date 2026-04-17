import './featured.css';
import logo1 from '../../images/Logo 1.png'
import Featured_image from './featured_image/featured_image';
import { featured_image_data } from './featured_image/featured_image_date';



let featured_img







function Featured() {

  return (
    <section>
        <container className="container featured_pos">
            <div className='featured_text'>
                <h3 className='body_2'>We are</h3>
                <h4 className='featured_in'>Featured_in</h4>
            </div>
            <div className='featured_logo'>
                {featured_img = featured_image_data.map(maps =>
                     <Featured_image
                     image={maps.image}

               />

                )}
              

            </div>

            
           
        </container>

    </section> 
  );
}

export default Featured;