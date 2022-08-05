import React from 'react';
import {Link} from 'react-scroll';
import styles from './Navigation.module.css';

function Navigation () {

    return ( 

        <nav className = {styles.navBar}>

            <div>

                <div className = {styles.menu}>
                    <img src = {process.env.PUBLIC_URL + "/assets/" + "logo.png"}className={styles.logo}></img>

                    <ul>
                        
                        <li className = {styles.navBarEntry}><Link activeClass = "active" to = 'HomePage' smooth = {true} offset = {-70}  duration = {750}  className = {styles.link}> Home </Link></li>
                        <li className = {styles.navBarEntry}><Link activeClass = "active" to = 'AboutUsPage' smooth = {true} offset = {-70}  duration = {750}  className = {styles.link}> About Us </Link></li>
                        <li className = {styles.navBarEntry}><Link activeClass = "active" to = 'RegistrationPage' smooth = {true} offset = {-70}  duration = {1000}  className = {styles.link}> Registration </Link></li>

                    </ul>

                </div>

                <button className = {styles.menuButton}>

                    <span className = {styles.buttonLine}></span>
                    <span className = {styles.buttonLine}></span>
                    <span className = {styles.buttonLine}></span>

                </button>

            </div>

        </nav>

    );
    
}

export default Navigation;