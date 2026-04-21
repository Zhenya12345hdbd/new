import './about_mission.css';
import About_mission_item from './about_mission_item';
import { about_mission_data } from './about_mission_data';


let nua

function About_mission () {
    
  return (
    <section>
        <container className="container flex mission">
            {nua = about_mission_data.map(nuas =>
                <About_mission_item 
                text1={nuas.text1}
                text2={nuas.text2}
                text3={nuas.text3}
                />

            )}
            

        </container>
        
    
    </section>
    
    
  )
}

export default About_mission;