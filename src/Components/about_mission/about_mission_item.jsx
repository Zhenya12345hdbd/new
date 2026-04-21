import './about_mission.css';


let num

function About_mission_item (item) {
    
  return (
   
            <div className='about_mission_text'>
                <h2 className='cup_1'>{item.text1}</h2>
                <h3 className='heading_h3'>
                    {item.text2}
                </h3>
                <p className='body_1'>
                    {item.text3}
                </p>

            </div>
            

  )
}

export default About_mission_item;