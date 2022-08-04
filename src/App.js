// import { Switch, BrowserRouter as Router, Route, Link } from "react-router";
import { Routes ,Route } from 'react-router-dom';
import Navigation from './Navigation';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import Home from './pages/Home';

function App () {

  return (

    <div>

      <Routes>
          
        <Route path = '/' element = {<Home/>}/>
        
        <Route path = '/about-us' element = {<AboutUs/>}/>
        
        <Route path = "/registration" element = {<Registration/>}/>
        
      </Routes>

    </div>
    
  );

}

export default App;
