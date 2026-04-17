import './choose.css';
import { category } from './category/category_data';
import Categort_all from './category/category';
import Autors_big_text from '../autors/autors_big_text/autors_big_text';

let block





function Choose() {

  return (
    <section>
        <container className="container choose">
                <Autors_big_text text={'Choose A Catagory'} />
                <div className='category'>
                    { block = category.map(blokus =>
                        <Categort_all icon={blokus.icon}
                                      name={blokus.category}
                                      profession={blokus.profession}
                                    />
                    )}
                    
                </div>
        </container>

    </section> 
  );
}

export default Choose;