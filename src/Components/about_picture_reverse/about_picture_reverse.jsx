import './about_picture_reverse.css';
import '../about_picture/about_picture.css'
import reverse from '../../images/image_reverse.png'
import About_picture_image from '../about_picture/about_picture_image/about_picture_image';
import About_picture_text from '../about_picture/about_picture_text/about_picture_text';
import { after } from './after';
import { after_div } from './after';






function About_picture_reverse () {
 

  
    
  return (
    <section>
        <container className="container flex picture reverse">

            <About_picture_text
            text1={'Why we started this Blog'}
            text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
            text3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}
            />
            <About_picture_image
            picture={reverse}
            style ={after}
            style1={after_div}
            
            />
           
        </container>
        
    
    </section>
    
    
  )
}

export default About_picture_reverse;