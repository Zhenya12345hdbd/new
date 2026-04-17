import { about_us_left_data } from "./about_us_left_data";

function About_us_left() {
        
  return (
                <div className='about_us'>
                <h1 className='cup_1'>
                        {about_us_left_data[0]}
                </h1>
                <h2 className='heading_h2'>
                    {about_us_left_data[1]}
                </h2>
                <p className='body_1'>
                    {about_us_left_data[2]}
                </p>
                <a href=''> {about_us_left_data[3]} </a>
            </div>

  );
}

export default About_us_left;