import './picture.css';
import image from '../../images/9b1ae821ce4666853a588ecefa1d1add86d0a4da.png'
import Button from '../header/button/button';
import Picture_text from './picture_text';








function Picture() {

  return (
    <section>
        <container className="container position">
            <img src={image} alt=''/>  
            <Picture_text 
                text_h3={'Why we started'}
                text_h1={'It started out as a simple idea and evolved into our passion'}
                text_p={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'}
            />
        </container>

    </section> 
  );
}

export default Picture;