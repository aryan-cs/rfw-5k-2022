import './Registration.css'; 
import Link from "./Link";
import "./Link.css";
import './Home.css'; 

function Registration () {

    return (

        <div className = "Registration" id = "RegistrationPage">

            <button onClick = {() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe2R-ddiU4X2_wGuil-8-2UVRTYji9q0Ign8S6Br8RW7dAx7Q/viewform?usp=sf_link", '_blank', 'noopener, noreferrer')} className = "Registration-link" rel = "noreferrer" target="_blank" href = "https://docs.google.com/forms/d/e/1FAIpQLSe2R-ddiU4X2_wGuil-8-2UVRTYji9q0Ign8S6Br8RW7dAx7Q/viewform?usp=sf_link">

                REGISTER

            </button>

            <p className = "App-subheader"> PAYMENT & DONATION OPTIONS </p>
            <p> Registration fees & donations can be sent to Shiven Patel via Google Pay, Apple Pay, and Zelle </p>
            <p>

                WHEN PAYING THE REGISTRATION FEE, <br/><span className = "App-emph">PLEASE INCLUDE YOUR FULL NAME IN THE MEMO</span><br/> SO YOU CAN BE VERIFIED ON RACE DAY.
                <br/><span className = "App-emph">PAYMENTS WITH NO NAME WILL BE CONSIDERED DONATIONS TO OUR CAUSE</span>
                
            </p>

            <div className = "donationDiv">

                <Link code = "/assets/links/googlecode.png"
                      image = "/assets/links/google.png"
                      alt = "Google Pay"
                      link = "https://gpay.app.goo.gl/pay-O6d1RyMjBIT"/>

                <Link code = "/assets/links/zellecode.png"
                      image = "/assets/links/zelle.png"
                      alt = "Zelle"
                      link = "https://enroll.zellepay.com/qr-codes?data=ewogICJuYW1lIiA6ICJTSElWRU4iLAogICJ0b2tlbiIgOiAiODQ3NDc3NDE0MCIsCiAgImFjdGlvbiIgOiAicGF5bWVudCIKfQ=="/>

                <div className = "Link">

                    <img src = {process.env.PUBLIC_URL + "assets/links/apple.png"}
                        className = 'Link-type'
                        alt = "Apple Pay"
                        rel = "noreferrer"
                        target = "_blank"/>   

                    <p> For Apple Pay, forward money to <br/> <span className = "App-emph">+1 847-477-4140</span> </p>

                </div>

            </div>

        </div>

    );

}

export default Registration;