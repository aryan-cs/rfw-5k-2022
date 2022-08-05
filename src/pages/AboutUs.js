import Card from './Card';
import './AboutUs.css'; 

function AboutUs () {

    return (

        <div className = "AboutUs" id = "AboutUsPage">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />

            <Card person = "shiven"
                  name = "Shiven Patel"
                  role = "Founder"
                  links = {["google.com", "google.com"]}/>

            <Card person = "aryan" name = "Aryan Gupta" role = "Head of Graphics & Web Dev"/>
            <Card person = "sid" name = "Sid Dayaneni" role = "Web Dev"/>

            <Card person = "Gerard" name = "Gerard Smith" role = "Swami Guru"/>


        </div>

    );

}

export default AboutUs;