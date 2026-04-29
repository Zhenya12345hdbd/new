import './contact_us.css';
import Contact_us_next from './contact_us._next';
import Contact_us_form from './contact_us_form';

function Contact_us(rew) {
    const size = {
      fontSize: '24px',
  };
    
  return (
     

    <section>
        <container className="container contact_us">
            <div className='contact_us_text'>
                <h3 className='cup_3'>
                    Contact us
                </h3>
                <h1 className='heading_h1'>
                    Let’s Start a Conversation
                </h1>
                <p className='body_1 gray'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>

            </div>
            <Contact_us_next/>
            <Contact_us_form
            style={size}
            
            
            />
          
            

           
           
        </container>

    </section> 
  );
}

export default Contact_us;