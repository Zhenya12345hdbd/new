import './first_blog.css';
import Promo_text3 from '../promo/text/promo_text3';
import { myStyles } from '../posts/myStyles_black';
import Button from '../header/button/button';
import first_blog from '../../images/first_blog.png'
import { Link } from 'react-router';


function First_blog () {
    const myStyles_text = {
      color: 'black',
  };
    
  return (
    <section>
        <container className="container flex padding">
            <div className='first_blog_text'>
                <h2 className='cup_1'>
                    Featured Post
                </h2>
                <h1 className='heading_h2'>
                    Step-by-step guide to choosing great font pairs
                </h1>
                <Promo_text3 style={myStyles} text={'James West'}/>
                <p className='body_1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <Link to={'/item'} style={myStyles_text}><Button text={'Read More >'} /></Link>
            </div>     
            <img src={first_blog} alt='' />
           
            
           

        </container>
        
    
    </section>
    
    
  )
}

export default First_blog;