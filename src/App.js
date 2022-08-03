import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './Navigation';

function App() {

  return (

    <div className = "App">

      <img src = "/logo.png" alt = "" className = "App-logo" />
      <Navigation/>

      <header className = "App-header"> <p> #RUN FOR WATER </p> <p> 2022 ｜ 5K </p> </header>

      <div>
        <p>
            On August 28th, join us with an opportunity to change a community’s life.  In partnership with The Water Project, we have organized our Run For Water 5k.  
          We are inviting everyone of all ages to join us in our run to raise money for a water spring to help a community in Kenya, Africa.
        </p>
      </div>

    </div>

  );

}

export default App;
