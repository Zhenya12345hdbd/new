import './header.css';
import Logo from './logo/logo';
import { menu } from './menu/menu_list';
import Menu from './menu/menu';
import { Link } from 'react-router-dom';




function Dashboard() {
}


let listmenu

function Footer() {
  return (
    <header>
        <container className="container background_black polog">
            <Logo firm={'Finsweet'}/>
             <Menu  menu={listmenu = menu.map(person => 
                        <Link to={person.path} className='body_1 color'>{person.item}</Link>)} />
            
        </container>
        
        
    </header>
   
  );
}

export default Footer;