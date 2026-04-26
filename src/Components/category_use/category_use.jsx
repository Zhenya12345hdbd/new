import './category_use.css';
import { blog_item_data } from '../blog_all_item/blog_item_data';
import { useParams } from 'react-router';
import { category } from '../choose/category/category_data';







function Category_use(user1) {
  

  return (
    <section>
        <container className="container autors magrin">
            <div className='category_text'>
            <h1 className='display'>{user1.name}</h1>
            <p className='body_1 gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <h3 className='body_3'>Blog > {user1.name}</h3>
            </div>
            
        </container>

    </section> 
  );
}

export default Category_use;