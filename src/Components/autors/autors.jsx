import './autors.css';

import { autors_data } from './autors_item/autors_data';

import Autors_big_text from './autors_big_text/autors_big_text';
import Autors_item from './autors_item/autors_item';


let autors_mas

let filters





function Autors(aut) {
   
  

  return (
    <section>
        <container className="container autors">
            <Autors_big_text text={'List of Authors'} />
            <div className='autors_list'>
            {autors_mas = aut.filt.map(writers =>
                 <Autors_item 
                 name={writers.name}
                 photo={writers.photo}
                 profession={writers.profession}

             />

            )}
            </div>
           
        </container>

    </section> 
  );
}

export default Autors;