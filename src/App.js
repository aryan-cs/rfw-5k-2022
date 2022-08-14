import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Navigation from './Navigation';
import Partners from './pages/Partners';

function App () {

  return (

    <div>

      <Navigation/>
      <Home/>
      <AboutUs/>
      <Registration/>
      <Partners/>
          
    </div>
    
  );

}

export default App;
