import React, { useState } from "react";
import {Link} from 'react-scroll';
import styles from './Navigation.module.css';

function Navigation () {

    const [isActive, setActive] = useState(true);
    
    const toggleClass = () => { setActive(!isActive); };

    return (
        
        <div>

            <nav className = {styles.navBar}>

                <div>

                    <div className = {styles.menu}>

                        <img src = {process.env.PUBLIC_URL + "/assets/logo.png"} alt = "" className = {styles.logo}></img>

                        <ul className = "pageLinks">

                            <li className = {styles.navBarEntry}><Link activeClass = "active" to = 'RegistrationPage' smooth = {true} offset = {-70}  duration = {1000}  className = {styles.link}> Registration </Link></li>
                            <li className = {styles.navBarEntry}><Link activeClass = "active" to = 'AboutUsPage' smooth = {true} offset = {-70}  duration = {750}  className = {styles.link}> About Us </Link></li>
                            <li className = {styles.navBarEntry}><Link activeClass = "active" to = 'HomePage' smooth = {true} offset = {-70}  duration = {750}  className = {styles.link}> Home </Link></li>
                        </ul>

                    </div>

                </div>

            </nav>

            <button className = {styles.menuButton} onClick = {toggleClass}>

                        <span className = {styles.buttonLine}></span>
                        <span className = {styles.buttonLine}></span>
                        <span className = {styles.buttonLine}></span>

            </button>

            <div className= {isActive ? styles.mobileMenuSection : null}>
                
                <nav className = {styles.mobileNavBar}>

                    <ul className = {styles.doNothing}>

                        <li className = {styles.mobileNavBarEntry}><Link activeClass = "active" to = 'HomePage' smooth = {true} offset = {-70}  duration = {750}  className = {styles.mobileLink}> Home </Link></li>
                        <li className = {styles.mobileNavBarEntry}><Link activeClass = "active" to = 'AboutUsPage' smooth = {true} offset = {-70}  duration = {750}  className = {styles.mobileLink}> About Us </Link></li>
                        <li className = {styles.mobileNavBarEntry}><Link activeClass = "active" to = 'RegistrationPage' smooth = {true} offset = {-70}  duration = {1000}  className = {styles.mobileLink}> Registration </Link></li>

                    </ul>

                </nav>
            </div>

        </div>
    );
}

export default Navigation;