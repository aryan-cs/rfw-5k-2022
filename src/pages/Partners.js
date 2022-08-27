import './Partners.css';

function Partners () {
    
    return (

        <div>

            <p className = "Partner-subheader"> THANK YOU TO OUR PARTNERS </p>

            <div className = "Partners">

                <div className = 'sponsor-section'>
                    <img src = {process.env.PUBLIC_URL + "/assets/partners/palatinepack.png" }
                        onClick = {() => window.open("https://palatinepack.com/", '_blank', 'noopener, noreferrer')}
                        className = 'Partner-link'
                        alt = "Palatine Pack"
                        rel = "noreferrer"
                        target = "_blank"
                        href = "https://palatinepack.com/"/>  

                        <p className='sponsor-name'>Palatine Pack</p>
                </div>
                <div className = 'sponsor-section'>
                    <img src = {process.env.PUBLIC_URL + "/assets/partners/waterproject.png" }
                        onClick = {() => window.open("https://thewaterproject.org/", '_blank', 'noopener, noreferrer')}
                        className = 'Partner-link'
                        alt = "The Water Project" 
                        rel = "noreferrer" 
                        target = "_blank" 
                        href = "https://thewaterproject.org/"/>  
                        
                        <p className='sponsor-name'>The Water Project</p>
                </div>

                <div className = 'sponsor-section'>
                    <img src = {process.env.PUBLIC_URL + "/assets/partners/superiorcapital.png"}
                        onClick = {() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=Rahul@SuperiorCapital1.com", '_blank', 'noopener, noreferrer')}
                        className = 'Partner-link' 
                        alt = "Superior Capital"
                        rel = "noreferrer" 
                        target = "_blank" 
                        href = "https://mail.google.com/mail/?view=cm&fs=1&to=Rahul@SuperiorCapital1.com"/>  
                        
                        <p className='sponsor-name'>Superior Capital</p>
                </div>

                <div className = 'sponsor-section'>
                    <img src = {process.env.PUBLIC_URL + "/assets/partners/addison.png"}
                        onClick = {() => window.open("https://www.addisonrx.com/", '_blank', 'noopener, noreferrer')}
                        className = 'Partner-link' 
                        alt = "Addison Pharmacy"
                        rel = "noreferrer" 
                        target = "_blank" 
                        href = "https://www.addisonrx.com/"/>  
                        
                        <p className='sponsor-name'>Addison Pharmacy</p>
                </div>

                <div className = 'sponsor-section'>
                    <img src = {process.env.PUBLIC_URL + "/assets/partners/mara.png"}
                        className = 'Partner-link' 
                        alt = "Mara Pharmacy"
                        rel = "noreferrer" 
                        target = "_blank"/>  
                        
                        <p className='sponsor-name'>Mara Pharmacy</p>
                </div>


            </div>

        </div>

    );
}

export default Partners;