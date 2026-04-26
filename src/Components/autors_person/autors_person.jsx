import './autors_person.css';
import Autors_social from '../autors/autors_item/autors_social';
import person from '../../images/64043a1e644b6488af3f43f1ce44829b6bda5b37.png'


function Autors_person(rew) {
      const styles_social = {
      
      marginLeft: '0px',
      
  };

  return (
     

    <section>
        <container className="container autors_person">
            <img src={rew.photo} className='person' alt="" />
            <div className='autors_person_text'>
                <h1 className='heading_h1'>Hey there, I’m {rew.name} and welcome to my Blog</h1>
                <p className='body1 gray'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
                <Autors_social
                social={styles_social}
                />
            </div>
            
               
                    
        </container>

    </section> 
  );
}

export default Autors_person;