

function Sliders_card(card) {
   
    
  return (
   
            
                <div className="sladers_item" id={card.id}>
                        <h5 className='heading_h4'>
                    
                    {card.text}
                </h5>
                <div className='sliders_card'>
                    <img src={card.photo} alt=''/>
                    <div className='sliders_name'>
                        <h3 className='name'>
                            {card.name}
                        </h3>
                        <p className='body_1'>
                            {card.from}
                        </p>
                    </div>
            
                </div>
                </div>
                

            
           
  );
}

export default Sliders_card;