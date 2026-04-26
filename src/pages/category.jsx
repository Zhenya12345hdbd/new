import Category_use from "../Components/category_use/category_use";
import { useParams } from "react-router";
import { category } from "../Components/choose/category/category_data";
import Category_main from "../Components/category_main/category_main";


function Category() {
   const { name } = useParams();
    const user = category.find((user) => user.name === String(name));
    
  
   window.scrollTo(0, 0)
  return (
  <div>
    <Category_use 
    name={user.name}
    />
    <Category_main
    name={user.name}
    
    />
    
  </div>
   
  );
}

export default Category;
