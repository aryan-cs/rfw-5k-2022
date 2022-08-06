import './Registration.css'; 

function Registration () {

    return (

        <div className = "Registration" id = "RegistrationPage">

            <button onClick = {() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe2R-ddiU4X2_wGuil-8-2UVRTYji9q0Ign8S6Br8RW7dAx7Q/viewform?usp=sf_link", '_blank', 'noopener, noreferrer')} className = "Registration-link" rel = "noreferrer" target="_blank" href = "https://docs.google.com/forms/d/e/1FAIpQLSe2R-ddiU4X2_wGuil-8-2UVRTYji9q0Ign8S6Br8RW7dAx7Q/viewform?usp=sf_link">

                REGISTER

            </button>

        </div>

    );

}

export default Registration;