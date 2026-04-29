import './contact_us.css';
import Button from '../header/button/button';

function Contact_us_form(rew) {
    
  return (
     

            <div className='contact_us_form'>
                <input type='text' className='body_1 area' placeholder='Full Name'/>
                <input type='email' className='body_1 area' placeholder='Your Email'/>
                <div className='pad_left'>
                        &gt;
                    </div>
                <select className='body_1 area gray pad_right'>
                    <option value="1" className='body_1 pad_right'>Query Related </option>
                   <option value="1" className='body_1 '>two</option>
                     <option value="1 " className='body_1 '>tree</option>
                    <option value="1" className='body_1 '>four</option>

                </select>
                <input type='text' className='body_1 text' placeholder='Message'/>

                <Button 
                text={'Send Message'}
                style={rew.style}
                />
            </div>
            

           
    
  );
}

export default Contact_us_form;