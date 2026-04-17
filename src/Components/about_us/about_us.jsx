import './about_us.css';
import About_us_right from './about_us_right/about_us_right';
import About_us_left from './about_us_left/about_us_left';
import { about_us_left_data } from './about_us_left/about_us_left_data';





function About_us() {

  return (
    <section>
        <container className="container space">
                <About_us_left   
                 />
                  <About_us_right  
                 />
                
        </container>

    </section>
        
        
        
  
   
  );
}

export default About_us;