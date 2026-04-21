import './about_picture.css';
import picture from '../../images/about_picture_image.png'
import About_picture_text from './about_picture_text/about_picture_text';
import About_picture_image from './about_picture_image/about_picture_image';
import { before } from '../about_picture/about_picture_image_before'




function About_picture () {
    
  return (
    <section>
        <container className="container flex picture">

            <About_picture_text
            text1={'Our team of creatives'}
            text2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'}
            text3={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'}
            
            />
            
            <About_picture_image
            picture={picture}
            style={before}
            />
           
        </container>
        
    
    </section>
    
    
  )
}

export default About_picture;