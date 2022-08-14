import './Partners.css';

function Partners () {
    
    return (

        <div>

            <p className = "Partner-subheader"> THANK YOU TO OUR PARTNERS </p>

            <div className = "Partners">

                <img src = {process.env.PUBLIC_URL + "/assets/partners/palatinepack.png" } onClick = {() => window.open("https://palatinepack.com/", '_blank', 'noopener, noreferrer')} className = 'Partner-link' alt = "Palatine Pack" rel = "noreferrer" target="_blank" href = "https://palatinepack.com/"/>  
                <img src = {process.env.PUBLIC_URL + "/assets/partners/waterproject.png" } onClick = {() => window.open("https://thewaterproject.org/", '_blank', 'noopener, noreferrer')} className = 'Partner-link' alt = "The Water Project" rel = "noreferrer" target="_blank" href = "https://thewaterproject.org/"/>  
                <img src = {process.env.PUBLIC_URL + "/assets/partners/superiorcapital.png"} onClick = {() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=Rahul@SuperiorCapital1.com", '_blank', 'noopener, noreferrer')} className = 'Partner-link' alt = "Superior Capital" rel = "noreferrer" target="_blank" href = "https://mail.google.com/mail/?view=cm&fs=1&to=Rahul@SuperiorCapital1.com"/>  
                {/* <img src = {process.env.PUBLIC_URL + "/assets/partners/rrpharmacy.png" } onClick = {() => window.open("http://ranareaganpharmacy.com/", '_blank', 'noopener, noreferrer')} className = 'Partner-link' alt = "Rana-Reagan Pharmacy" rel = "noreferrer" target="_blank" href = "http://ranareaganpharmacy.com/"/> */}

            </div>

        </div>

    );
}

export default Partners;