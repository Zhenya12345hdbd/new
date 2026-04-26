import { category } from "./category_data";
import { Link } from "react-router";
import { NavLink } from "react-router";








function Categort_all( categor) {

  return (
                  <NavLink to={'/'+ categor.name}><div className='category_item black' style={categor.style3}>
                        <img src={categor.icon}></img>
                        <h3 className='heading_h3'>{categor.name}</h3>
                        <p className='body_1'>{categor.profession}</p>
                    </div></NavLink>
                    
   
  );
}

export default Categort_all;