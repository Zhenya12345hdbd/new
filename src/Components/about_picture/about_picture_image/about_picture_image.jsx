

function About_picture_image (image) {
 
   
  return (
 
            <div className='About_picture_image' style={image.style1}>
                <img src={image.picture} alt="" />
                <div style={image.style} >

                </div>
            </div>
  
    
  )
}

export default About_picture_image;