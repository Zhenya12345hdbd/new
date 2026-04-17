

import Button from '../header/button/button';








function Picture_text(pic) {

  return (
     
            <div className='picture_text'>
                    <h3 className='cup_1'>
                        {pic.text_h3} 
                    </h3>
                    <h1 className='heading_h1'>
                        {pic.text_h1} 

                    </h1>
                    <p className='body_1'>
                        {pic.text_p} 

                        
                    </p>
                    <Button text={'Discover our story >'} />
            </div>              
       

    
  );
}

export default Picture_text;