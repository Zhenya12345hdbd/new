import './posts.css';
import Promo_text3 from '../promo/text/promo_text3';
import main_item from './../../images/main_item.png'
import Button from '../header/button/button';
import { posts_data } from './posts_vertical/posts_data';
import Posts_vertical from './posts_vertical/posts_vertical';
import { myStyles } from './myStyles_black'


let listVertical


function Posts() {

  return (
    <section>
        <container className="container feature_cont">
           <div className='feature_posts'> 
                    <h2 className='heading_h2'>Featured Post</h2>
                <div className='feature_main_item'>
                    <img src={main_item} alt='f'/>
                    <Promo_text3 style={myStyles} text={'James West'}/>
                    <h3 className='heading_h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                    <p className='body_1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <Button text={'Read More >'} />
                </div>
            </div>
                <div className='all_items'>
                    <h2 className='heading_h2'>All Posts</h2>
                    <a href='#' className='body_1 pos'>View All</a>
                    {listVertical = posts_data.map(postList =>
                        <Posts_vertical  label={postList.label} text={postList.name}/>
                    )}
                    
                </div>
           
        </container>

    </section>
        
        
        
  
   
  );
}

export default Posts;