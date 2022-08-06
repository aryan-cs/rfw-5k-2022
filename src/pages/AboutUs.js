import Card from './Card';
import './AboutUs.css'; 
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function AboutUs () {

    const slideLeft = () => {

        var slider = document.getElementById('AboutUsPage');
        var cards = document.getElementsByClassName('Card');
        slider.scrollLeft -= cards[0].offsetWidth * 1.15;
    };  

    const slideRight = () => {

        var slider = document.getElementById('AboutUsPage');
        var cards = document.getElementsByClassName('Card');
        slider.scrollLeft += cards[0].offsetWidth * 1.15;

    }
          
    return (

        <div className = "AboutUs" id = "AboutUsPage">

            <MdChevronLeft size = {40} className = "Left-arrow" onClick = {slideLeft}/>
            <MdChevronRight size = {40} className = "Right-arrow" onClick = {slideRight}/>
             {/* <div id = 'slider' className = "slider"> */}

                <Card id = "card" person = "shiven"
                      name = "Shiven Patel"
                      role = "Founder"
                      links = {["https://www.linkedin.com/in/shiven-patel-467bb4233/", "https://mail.google.com/mail/?view=cm&fs=1&to=patelshiven1@gmail.com"]}/>

                <Card person = "aryan"
                      name = "Aryan Gupta"
                      role = "Head of Graphics & Web Dev"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=aryan05g@gmail.com", "https://github.com/aryan-cs"]}/>
                                            
                <Card person = "sid"
                      name = "Sid Dayaneni"
                      role = "Head of Web Dev"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.dayaneni@gmail.com", "https://github.com/SidD11111"]}/>

                <Card person = "amani"
                      name = "Amani Urban"
                      role = "Head of Fundraising"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=amani.urban@gmail.com"]}/>

                <Card person = "andrea"
                      name = "Andrea Kehaiova"
                      role = "Head of Advertising"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=andreakehaiova@gmail.com"]}/>

                <Card person = "stephanie"
                      name = "Stephanie Filtcheva"
                      role = "Fundraising"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=stephaniefiltcheva@gmail.com"]}/>

                <Card person = "liam"
                      name = "Liam Cunningham"
                      role = "Fundraising"
                      links = {[]}/>

                <Card person = "reyna"
                      name = "Reyna Shah"
                      role = "Outreach"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=reynapshah@gmail.com", "https://www.linkedin.com/in/reyna-shah-748311226/"]}/>

                <Card person = "avi"
                      name = "Avi Shah"
                      role = "First Aid"
                      links = {[]}/>

                <Card person = "ankit"
                      name = "Ankit Rath"
                      role = "Commanding Officer of Emotional Support Squadron"
                      links = {["https://mail.google.com/mail/?view=cm&fs=1&to=ankitrath2000@gmail.com"]}/>

                <Card person = "siya"
                      name = "Siya Jariwala"
                      role = "Volunteer"
                      links = {["https://www.linkedin.com/in/siya-jariwala/", "https://mail.google.com/mail/?view=cm&fs=1&to=siyacj08@gmail.com"]}/>

                <Card person = "ruchika"
                      name = "Ruchika Rout"
                      role = "Volunteer"
                      links = {["https://www.linkedin.com/in/ruchika-rout-285193226/"]}/>
            
            </div>
            
        // </div>

    );

}

export default AboutUs;