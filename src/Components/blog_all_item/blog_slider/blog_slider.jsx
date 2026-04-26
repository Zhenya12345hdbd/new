import { useRef } from "react";
import { Link } from "react-router";
import { refs } from "./refs";

function Blog_item_slides (slides) {
    
    
    
  return (
            <div className='blog_item' style={slides.style} id={slides.id}>
                <Link to={`/item/${slides.id}`} onClick={refs}><img src={slides.photo} style={slides.style2} alt=''/></Link>
                <div className='blog_text'>
                    <h3 className='cup_1'>
                        {slides.category}
                    </h3>
                    <h2 className='heading_h2'>
                        {slides.tittle}
                    </h2>
                    <p className='body_1'>
                        {slides.text}
                    </p>
                </div>
            </div>
         
  )
}

export default Blog_item_slides;