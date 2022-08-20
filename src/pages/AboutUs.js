import Card from './Card';
import './AboutUs.css'; 
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function AboutUs () {

    const slideLeft = () => {

      var slider = document.getElementById('AboutUsPage');
      var cards = document.getElementsByClassName('Card');
      slider.scrollLeft -= cards[0].offsetWidth * 1.1525;

    };  

    const slideRight = () => {

      var slider = document.getElementById('AboutUsPage');
      var cards = document.getElementsByClassName('Card');
      slider.scrollLeft += cards[0].offsetWidth * 1.1525;

    }
          
    return (

        <div className = "AboutUs" id = "AboutUsPage">

            <script src="https://kit.fontawesome.com/6f88151548.js" crossOrigin = "anonymous"></script>

            <MdChevronLeft size = {40} className = "Left-arrow" onClick = {slideLeft}/>
            <MdChevronRight size = {40} className = "Right-arrow" onClick = {slideRight}/>

          <Card id = "card" person = "shiven"
                name = "Shiven Patel"
                role = "Founder"
                links = {["https://www.linkedin.com/in/shiven-patel-467bb4233/", "https://mail.google.com/mail/?view=cm&fs=1&to=patelshiven1@gmail.com"]}/>
          
          <Card person = "aryan"
                name = "Aryan Gupta"
                role = "Graphics & Web Dev"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=aryan05g@gmail.com", "https://github.com/aryan-cs"]}/>
                                      
          <Card person = "sid"
                name = "Sid Dayaneni"
                role = "Web Dev"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=siddharth.dayaneni@gmail.com", "https://github.com/SidD11111"]}/>
          
          <Card person = "amani"
                name = "Amani Urban"
                role = "Fundraising"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=amani.urban@gmail.com"]}/>

          <Card person = "ankit"
                name = "Ankit Rath"
                role = "Marketing"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=ankitrath2000@gmail.com"]}/>
          
          <Card person = "andrea"
                name = "Andrea Kehaiova"
                role = "Advertising"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=andreakehaiova@gmail.com"]}/>

          <Card person = "nandu"
                name = "Nandana Voolapalli"
                role = "Legal"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=andreakehaiova@gmail.com"]}/>

            <div className = "Card">

                  <div className = "Card-content">

                      <img src = {process.env.PUBLIC_URL + "/assets/people/avi.png"} className = "Card-volunteer-image" alt = ""/>
                      <img src = {process.env.PUBLIC_URL + "/assets/people/siya.png"} className = "Card-volunteer-image" alt = ""/>
                      <img src = {process.env.PUBLIC_URL + "/assets/people/stephanie.png"} className = "Card-volunteer-image" alt = ""/>
                      <img src = {process.env.PUBLIC_URL + "/assets/people/reyna.png"} className = "Card-volunteer-image" alt = ""/>
                      <img src = {process.env.PUBLIC_URL + "/assets/people/ruchika.png"} className = "Card-volunteer-image" alt = ""/>
                      <img src = {process.env.PUBLIC_URL + "/assets/people/haren.png"} className = "Card-volunteer-image" alt = ""/>
                      <img src = {process.env.PUBLIC_URL + "/assets/people/conant.jpg"} className = "Card-volunteer-image" alt = "" style = {{ width: "80%"}}/>
                      
                      
                      <p className = "Card-name"> VOLUNTEERS </p>

                  </div>
          
            </div>

          {/* add kristin as well */}

          {/* <Card person = "gerard"
                name = "Gerard Genovese"
                role = "Swami of the Sacred Heart"
                links = {[]}/>

          <Card person = "rahul"
                name = "Rahul Patel"
                role = "rahul4realestate"
                links = {["https://www.linkedin.com/in/rahulpatel121"]}/> */}
          
          {/* <Card person = "avi"
                name = "Avi Shah"
                role = "First Aid"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=avishahavi@gmail.com"]}/> */}
           
          {/* <Card person = "siya"
                name = "Siya Jariwala"
                role = "Volunteer"
                links = {["https://www.linkedin.com/in/siya-jariwala/", "https://mail.google.com/mail/?view=cm&fs=1&to=siyacj08@gmail.com"]}/>
           
          <Card person = "stephanie"
                name = "Stephanie Filtcheva"
                role = "Volunteer"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=stephaniefiltcheva@gmail.com"]}/> */}
          
          {/* <Card person = "liam"
                name = "Liam Cunningham"
                role = "Volunteer"
                links = {["liampatrickstar06@gmail.com"]}/> */}

          {/* <Card person = "ruchika"
                name = "Ruchika Rout"
                role = "Volunteer"
                links = {["https://www.linkedin.com/in/ruchika-rout-285193226/"]}/> */}

          {/* <Card person = "reyna"
                name = "Reyna Shah"
                role = "Volunteer"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=reynapshah@gmail.com", "https://www.linkedin.com/in/reyna-shah-748311226/"]}/> */}
          
          {/* <Card person = "haren"
                name = "Haren Pylla"
                role = "Volunteer"
                links = {["https://mail.google.com/mail/?view=cm&fs=1&to=haren.pylla@gmail.com"]}/> */}
          
            
            </div>
            
    );

}

export default AboutUs;