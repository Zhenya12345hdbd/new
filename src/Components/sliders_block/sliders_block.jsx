import './sliders_block.css';
import comment1 from '../../images/comment_item.png'
import { useState } from 'react';
import { click_down } from './hand';
import { click_up } from './hand';
import { comment_data } from './comment_data/comment_data';
import Sliders_card from './sliders_card/sliders_card';
import Sliders_text from './sliders_text/sliders_text';


let cards_item

function Sliders_block() {
   
    
  return (
    <section>
        <container className="container slider_pos">
            <Sliders_text 
                text={'TESTIMONIALs'}
                big_text={'What people say about our blog'}
                small_text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'}
            />
            <div className='slider' id="slider">
            {cards_item = comment_data.map( items =>
                    <Sliders_card  
                        id={items.id}
                        name={items.name}
                        from={items.from}
                        text={items.text}
                        photo={items.photo}

                                />

            )}
                
            </div>
            <div className='sliders_button'>
                                <div className='left' onClick={click_down}>
                                    
                                    <div className='arrow_left'>
                                    </div>
                                    <div className='line_left'>

                                    </div>
                                </div>
                                <div className='right' onClick={click_up}>
                                    <div className='arrow_right'>
                                    </div>
                                    <div className='line_right'>

                                    </div>
                                </div>
                                

                            </div>
            

           
        </container>

    </section> 
  );
}

export default Sliders_block;