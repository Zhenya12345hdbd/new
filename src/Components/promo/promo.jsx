import './promo.css';
import Button from '../header/button/button';
import Promo_text1 from './text/promo_text1';
import Promo_text2 from './text/promo_text2';
import Promo_text3 from './text/promo_text3';
import Promo_text4 from './text/promo_text4';
function Promo() {

     
  return (
    <section className='bg_image bg_image2'>
        <container className="container ">
            <div className='promo_text white'>
               <Promo_text1 text={'Posted on'}
                            text1={'STARTUP'} 
                            />
               <Promo_text2 text={'Step-by-step guide to choosing great font pairs'} />
                <Promo_text3 text={'James West'}/>
                <Promo_text4 text={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'} />
                <Button  text={'Read More >'}/>
            </div>
        </container>
    </section>
   
  );
}

export default Promo;