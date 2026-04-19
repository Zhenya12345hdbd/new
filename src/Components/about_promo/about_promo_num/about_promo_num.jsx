





function About_promo_num (about) {
    
  return (
  
                <div className='about_promo_num_item'> 
                    <h1 className='display'>
                        {about.num}
                    </h1>
                    <p className='body_1'>
                        {about.text}
                    </p>

                </div>
               
  )
}

export default About_promo_num;