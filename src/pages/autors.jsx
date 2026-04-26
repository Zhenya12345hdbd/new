import Autors_person from "../Components/autors_person/autors_person";
import { autors_data } from "../Components/autors/autors_item/autors_data";
import { useParams } from "react-router";
import Autors_post from "../Components/autors_post/autors_post";
import { blog_item_data } from "../Components/blog_all_item/blog_item_data";



function Autors() {
     const { path } = useParams();
    const user1 = autors_data.find((user1) => user1.path === String(path));
    const filters = blog_item_data.filter(number => number.autor === user1.name)
    console.log(filters)
  window.scrollTo(0, 0)
 
  return (
  <div>
   <Autors_person
   name={user1.name}
   photo={user1.photo}
   />
   <Autors_post
   last={filters}
   
   
   />
  </div>
  
   
  );
}

export default Autors;
