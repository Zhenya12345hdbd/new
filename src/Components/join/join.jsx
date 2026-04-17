import './join.css';
import Button from '../header/button/button'



let cards_item

function Join() {
   
    
  return (
    <section>
        <container className="container join_pos">
            <div className='join_text'>
                <h2 className='heading_h2'>
                    Join our team to be a part of our story
                </h2>
                <p className='body_1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
                    <Button 
                    text={'Join Now'}
                    />
            </div>
        </container>

    </section> 
  );
}

export default Join;