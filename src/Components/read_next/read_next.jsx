import './read_next.css';
import { blog_item_data } from '../blog_all_item/blog_item_data';
import Read_next_item from './read_next_item/read_next_item';
import { useParams } from 'react-router';



let reads



function Read_next() {
    let now = Math.floor(Math.random() * 9) + 1 ;
    let now1 = Math.floor(Math.random() * 9) + 1 ;
    let now2 = Math.floor(Math.random() * 9) + 1 ;
    if (now == now1){
        now1++
    }
    if (now == now2){
        now2--

    }
    const apples = blog_item_data.filter(fruit => fruit.id === now);
    const apples1 = blog_item_data.filter(fruit1 => fruit1.id === now1);
    const apples2 = blog_item_data.filter(fruit2 => fruit2.id === now2);
    const array3 = apples.concat(apples1);
    const array4 = array3.concat(apples2);
    console.log(now);
    console.log(now1);
    console.log(now2);
    
    const { id } = useParams();
    const user = blog_item_data.find(user => user.id === Number
        (id));
        
  return (
    <section>
        <container className="container flex ">
         <h1 className='heading_h2'>
            What to read next
         </h1>
         <div className='what_to_read'>
            {   reads = array4.map(num => 
                <Read_next_item  
                id={num.id}
                autor={num.autor} 
                photo={num.photo} 
                />
            )}
            
         </div>

         

        
        </container>
        
    
    </section>
    
    
  )
}

export default Read_next;