

function About_picture_text (pic) {
    
  return (
    
            <div className='About_picture_text'>
                <h2 className='heading_h2'>
                    {pic.text1}
                </h2>
                <h3 className='heading_h4'>
                    {pic.text2}
                </h3>
                <p className='body_1'>
                    {pic.text3}
                    
                </p>
            </div>
          
  )
}

export default About_picture_text;