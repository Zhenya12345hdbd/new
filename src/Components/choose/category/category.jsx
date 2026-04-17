import { category } from "./category_data";








function Categort_all( categor) {

  return (
    
                    <div className='category_item'>
                        <img src={categor.icon}></img>
                        <h3 className='heading_h3'>{categor.name}</h3>
                        <p className='body_1'>{categor.profession}</p>
                    </div>
   
  );
}

export default Categort_all;