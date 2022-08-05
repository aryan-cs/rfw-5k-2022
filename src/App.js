import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Navigation from './Navigation';

function App () {

  return (

    <div>

      <Navigation/>
        <Home/>
        <AboutUs/>
        <Registration/>
          
    </div>
    
  );

}

export default App;
