import './Home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUs from './AboutUs';
import Registration from './Registration';

function Home () {

    return (

      <div className = "App" id="HomePage">
       
        <header className = "App-header"> <p> #RUN FOR WATER <br></br> 2022 ｜ 5K </p> </header>

        <p className = "App-slogan"> CLEAN WATER, ONE STRIDE AT A TIME </p>
        <p className = "App-info"> August 28, 2022 ｜ Busse Woods Grove 29 </p>
        <p className = "App-info"> Goals: 250 runners, $6000 donation </p>


          <div>

            <p>

            On <span className = "App-emph">August 28th</span>, join us in an opportunity to change a community’s life.
            In partnership with <span className = "App-emph">The Water Project</span>, we have organized the <span className = "App-emph">#RUNFORWATER 2022 5K</span>.
            Join us in our run and on our journey to raise money for a water well to help a community in <span className = "App-emph">Kenya, Africa</span>.

            </p>
        
          </div>

          <p className = "App-subheader"> THE TEAM </p>

      </div>

    );

}

export default Home;