import './footer.css';
import Logo from '../header/logo/logo'
import { menu_footer } from './menu_footer/menu_footer_list';
import Menu_footer from './menu_footer/menu_footer';
import Button from '../header/button/button';
import instagram from '../../images/instagram_gray.png'
import linked from '../../images/linked_gray.png'
import twitter from '../../images/twitter_gray.png'
import facebook from '../../images/facebook_gray.png'
import { Link } from 'react-router';


let listmenu

function Footer() {
  return (
    <footer className='footer_cont'>
        <container className="container flex">
            <div className='footer_all'>
               <Link to={'/'}><Logo firm={'Finsweet'}/></Link> 
             <Menu_footer  menu={listmenu = menu_footer.map(person => 
                        <Link to={person.path}className='body_1 color'>{person.item}</Link>)} />
            </div>
            
                        <div className='forms'>
                            
                                    <h2 className='heading_h2'>
                               Subscribe to our news letter to get latest updates and news 
                            </h2>
                            
                            
                            <input type="text" className='body_1' placeholder='Enter Your Email' />
                                <Button text={'Subscribe'}/>
                        </div>
                        <div className='end'>
                            <div className='end_left'> 
                            <p>Finstreet 118 2561 Fintown</p>
                            <p>Hello@finsweet.com  020 7993 2905</p>
                        </div>
                        <div className='end_right'> 
                            <div className='autors_social'>
                                <img src={facebook} alt=''/>
                                <img src={linked} alt=''/>
                                <img src={instagram} alt=''/>
                                <img src={twitter} alt=''/>
                            </div>
                        </div>
                        </div>
                        
        </container>
        
        
    </footer>
   
  );
}

export default Footer;