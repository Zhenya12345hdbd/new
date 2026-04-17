import Promo_text3 from "../../promo/text/promo_text3";
import { myStyles } from "../myStyles_black";
function Posts_vertical(posts) {
        
  return (
    <div className='items'>
                        <Promo_text3 style={myStyles} text={posts.text}/>
                        <h3 className='heading_h4'>
                            {posts.label}
                        </h3>
                            
                    </div>

  );
}

export default Posts_vertical;