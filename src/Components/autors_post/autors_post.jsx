import './autors_post.css';
import Blog_item_slides from '../blog_all_item/blog_slider/blog_slider';
import { blog_item_data } from '../blog_all_item/blog_item_data';



let blog_num

function Autors_post(rew) {
     const styles_item = {
      background: 'white',
      paddingRight: '0px',
      
  };
   const styles_item2 = {
      width: '490px',
    height: '318px',
    objectFit: 'cover',
      
  };
  

  return (
     

    <section>
        <container className="container autors_post">
            <h1 className='heading_h1'>
                My Posts
            </h1>
            <div className='autors_post'>
                    {blog_num = rew.last.map(numer => 
                <Blog_item_slides 
                
                id={numer.id}
                photo={numer.photo}
                category={numer.category}
                tittle={numer.title}
                text={numer.text}
                style={styles_item}
                style2={styles_item2}
                
                />
            ) }

            </div>
          

           
        </container>

    </section> 
  );
}

export default Autors_post;