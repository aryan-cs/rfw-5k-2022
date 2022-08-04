import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation(){
    return ( 
            <nav className={styles.navBar}>
                <div>
                    <div className={styles.menu}>
                        <ul className>
                            <li className={styles.navBarEntry}><Link to = '/' className={styles.link}>About Us</Link></li>
                            <li className={styles.navBarEntry}><Link to = '/' className={styles.link}>Register</Link></li>
                            <li className={styles.navBarEntry}><Link to = '/' className={styles.link}>Donate</Link></li>
                            <li className={styles.navBarEntry}><Link to = '/' className={styles.link}>Learn More</Link></li>
                        </ul>
                    </div>
                    <button className={styles.menuButton}>
                        <span className={styles.buttonLine}></span>
                        <span className={styles.buttonLine}></span>
                        <span className={styles.buttonLine}></span>
                    </button>
                </div>
            </nav>
    );
}

export default Navigation;