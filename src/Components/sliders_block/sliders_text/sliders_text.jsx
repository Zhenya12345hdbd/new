
function Sliders_text(sliders_text) {
   
    
  return (
    
        
            <div className='sliders_text '>
                <h2 className='cup_1'>
                    
                    {sliders_text.text}
                </h2>
                <h1 className='heading_h2'>
                  
                    {sliders_text.big_text}
                </h1>
                <p className='body_1'>
                    
                    {sliders_text.small_text}
                </p>
            </div>
          
  );
}

export default Sliders_text;