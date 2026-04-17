import { about_us_right_data } from "./about_us_right_data";

function About_us_right() {
        
  return (
              <div className='our_mission'>
                <h1 className='cup_1'>
                        {about_us_right_data[0]}
                </h1>
                <h2 className='heading_h3'>
                    {about_us_right_data[1]}
                </h2>
                <p className='body_1'>
                    {about_us_right_data[2]}
                </p>
               
            </div>

  );
}

export default About_us_right;