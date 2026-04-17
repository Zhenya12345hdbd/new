import './link_post.css';

import icon3 from '../../images/icon3.png'
import main_blog_img from '../../images/main_blog_img.png'
import { useParams } from 'react-router';
import { blog_item_data } from '../blog_all_item/blog_item_data';






function Link_post (link) {
    const { id } = useParams();

    const user = blog_item_data.find(user => user.id === Number
        (id));
    
  return (
    <section>
        <container className="container flex">
            <div className='link_blog_text'>
                <div className='link_autor'>
                    <img src={user.face} alt=''/>
                    <div className='link_name'>
                        <h4 className='heading_h3 purple'>
                            {user.autor}
                            
                        </h4>
                        <h5 className='body_1'>

                                Posted on 27th January 2022
                        </h5>
                    </div>

                </div>
                <h1 className='heading_h1'>
                    {user.head}
                </h1>
                <div className='link_category'>
                    <img className='link_icon' src={icon3} alt=''/>
                    <h3 className='heading_h4'>
                        {user.category}
                        
                    </h3>
                </div>
                    
            </div>
                <img className='main_blog_img' src={main_blog_img} alt=''/>

                <div className='main_text'>
                    <h3 className='heading_h2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </h3>
                    <p className='body_1 gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                    <h3 className='heading_h2 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </h3>
                    <p className='body_1 gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                    <p className='body_1 gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                    <p className='body_1 gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                    <h3 className='heading_h2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </h3>
                    <p className='body_1 gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>



                </div>
        </container>
        
    </section>
    
    
  )
}

export default Link_post;