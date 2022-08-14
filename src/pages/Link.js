import "./Link.css";

function Link (props) {
    
     return (

        <div className = "Link">

            <img src = {process.env.PUBLIC_URL + props.code} onClick = {() => window.open(props.link, '_blank', 'noopener, noreferrer')} className = 'Link-code' alt = "Palatine Pack" rel = "noreferrer" target="_blank" href = {props.link}/>   
            <img src = {process.env.PUBLIC_URL + props.image} onClick = {() => window.open(props.link, '_blank', 'noopener, noreferrer')} className = 'Link-type' alt = "Palatine Pack" rel = "noreferrer" target="_blank" href = {props.link}/>   
            
        </div>

     );
     
}

export default Link;