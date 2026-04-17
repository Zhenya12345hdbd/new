import './blog_all_item.css';
import { blog_item_data } from './blog_item_data';
import Blog_item_slides from './blog_slider/blog_slider';
import { click_left } from './blog_item_logik';
import { click_right } from './blog_item_logik';


let blog_num

function Blog_all_item () {
    
  return (
    <section>
        <container className="container flex blog">
         <h1 className='heading_h1'>
            All posts
         </h1>

         <div className='blog_slider'>
            {blog_num = blog_item_data.map(numer => 
                <Blog_item_slides 
                
                id={numer.id}
                photo={numer.photo}
                category={numer.category}
                tittle={numer.title}
                text={numer.text}

                />
            ) }
         </div>
         <div className='blog_button'>
            <h4 className='heading_h3 blog_left blog_active' onClick={click_left}>
                &lt; Prev
            </h4>
            <h4 className='heading_h3 blog_right' onClick={click_right}>
                Next &gt;
            </h4>
         </div>

        </container>
        
    
    </section>
    
    
  )
}

export default Blog_all_item;