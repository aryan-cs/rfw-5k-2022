import React from 'react';
import {RGF} from 'react-google-forms';

function Registration () {
    return (
        <div className = "registration" id = "RegistrationPage">
            <RGF config={"https://docs.google.com/forms/d/e/1FAIpQLSe2R-ddiU4X2_wGuil-8-2UVRTYji9q0Ign8S6Br8RW7dAx7Q/viewform?embedded=true"} />
        </div>
    );
}

export default Registration;