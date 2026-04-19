import './about_promo.css';
import about_promo_imsge from '../../images/about_promo_image.png'
import About_promo_num from './about_promo_num/about_promo_num';
import { about_promo_num_data } from './about_promo_num/about_promo_num_data';

let num

function About_promo () {
    
  return (
    <section>
        <container className="container flex about">
            <div className='about_promo_text'>
                <div className='about_promo_text_left'>
                <h3 className='cup_3'>ABOUT US</h3>
                    <h1 className='heading_h1'>We are a team of content writers who share their learnings</h1>
            </div>
            <div className='about_promo_text_right'>
                <p className='body_1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            </div>
             <img src={about_promo_imsge} alt="" />
             <div className='about_promo_num'>
                {num = about_promo_num_data.map(nums => 
                        <About_promo_num
                                num={nums.num}
                                text={nums.text}

                        
                        />
                )}
               
                

             </div>

        </container>
        
    
    </section>
    
    
  )
}

export default About_promo;