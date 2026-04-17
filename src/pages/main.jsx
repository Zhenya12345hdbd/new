
import Promo from "../Components/promo/promo";
import Posts from "../Components/posts/posts";
import About_us from "../Components/about_us/about_us";
import Choose from "../Components/choose/choose";
import Picture from "../Components/picture/picture";
import Autors from "../Components/autors/autors";
import Featured from "../Components/featured/featured";
import Sliders_block from "../Components/sliders_block/sliders_block";
import Join from "../Components/join/join";


function Main() {
  return (
  <div>
    
    <Promo />
    <Posts/>
    <About_us/>
    <Choose/>
    <Picture/>
    <Autors/>
    <Featured/>
    <Sliders_block/>
    <Join />
    
  </div>
   
  );
}

export default Main;
