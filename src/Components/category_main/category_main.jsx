import './category_main.css';
import Blog_item_slides from '../blog_all_item/blog_slider/blog_slider';
import { blog_item_data } from '../blog_all_item/blog_item_data';
import Categort_all from '../choose/category/category';
import { category } from '../choose/category/category_data';
import { all_tags } from './category_main.tahs';

let tags
let blog_num

let block
let array1
let rit
let now2
let array6
let now

function Category_main(main) {
    const styles_item1 = {
      background: 'white',
      paddingRight: '0px',
      
  };
  const styles_item2 = {
        width: '294px',
    height: '312px',
    objectFit: 'cover',
      
  };
   const styles_item3 = {
        width: '294px',
    height: '96px',
    padding: '24px',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center',
    gap: '16px',


      
  };

const blog_ex = blog_item_data.filter(ex => ex.category === main.name)


if (blog_ex.length == 4 ){
    array6 = blog_ex.slice(0,4);

}
if (blog_ex.length < 4 ){
    array6 = blog_ex.slice(0, blog_ex.length);

}
if (blog_ex.length > 4 ){
   
  let now = Math.floor(Math.random()  *  blog_ex.length +1) ;
  let now1 = Math.floor(Math.random()  *  blog_ex.length +1);
  let now2 = Math.floor(Math.random()  *  blog_ex.length +1) ;
  let now3 = Math.floor(Math.random()  *  blog_ex.length +1);

if (now == now1 || now == now2  || now == now3 ){
   now = now +1
}
if ( now1 == now2  || now1 == now3){
   now1= now1+1
}
if ( now2 == now3){
   now2 = now2 +2
}

  const array = blog_ex.slice(now-1 ,now );
    const array1 = blog_ex.slice(now1-1 ,now1 );
    const array2 = blog_ex.slice(now2-1 ,now2 );
    const array3 = blog_ex.slice(now3-1 ,now3 );
    const array4 = array1.concat(array2);
    const array5 = array4.concat(array3);
     array6 = array5.concat(array);
    
}
    
   
    
    

  return (
     

    <section>
        <container className="container category_main">
            <div className='category_main_left'>
                 {blog_num = array6.map(numer => 
                <Blog_item_slides 
                
                id={numer.id}
                photo={numer.photo}
                category={numer.category}
                tittle={numer.title}
                text={numer.text}
                style={styles_item1}
                style2={styles_item2}

                />
            ) }


            </div>
            <div className='category_main_right'>
                <h2 className='heading_h2'> Categories</h2>
                 { block = category.map(blokus =>

                        <Categort_all icon={blokus.icon}
                                      name={blokus.name}
                                      style3={styles_item3}
                                    />
                    )}
                    <div className='all_tag'>
                      <h2 className='heading_h2'>
                        All Tags
                      </h2>
                      <div className='tags'>
                         {tags = all_tags.map(tag =>
                        <p className='sen'>{tag.item}</p>
                      )}

                      </div>
                     
                      

                    </div>

                
            </div>
               
                    
        </container>

    </section> 
  );
}

export default Category_main;