import About_promo from "../Components/about_promo/about_promo";
import About_mission from "../Components/about_mission/about_mission";
import About_picture from "../Components/about_picture/about_picture";
import About_picture_reverse from "../Components/about_picture_reverse/about_picture_reverse";
import Autors from "../Components/autors/autors";
import { autors_data } from "../Components/autors/autors_item/autors_data";
import Join from "../Components/join/join";


function About() {
   const filters = autors_data.filter(number => number.id <= autors_data.length)
    window.scrollTo(0, 0)
   
  return (
  <div>
    
    <About_promo/>
    <About_mission/>
    <About_picture/>
    <About_picture_reverse/>
    <Autors 
      filt={filters}
    />
    <Join/>
    
    
  </div>
   
  );
}

export default About;
