import './Card.css'; 

function Card (props) {

    return (

        <div className = "Card">

            <div className = "Card-content">

                <img src = {process.env.PUBLIC_URL + "/assets/people/" + props.person + ".png"} className = "Card-image" alt = "" width = "200" height = "200"/>
                <p className = "Card-name"> {props.name.toUpperCase()} </p>
                <p className = "Card-role"> {props.role} </p>

            </div>

            <div className = "Card-links">

            <ul>

                {props.links.map((item, index) => {

                    if (item.includes("github")) {

                       return <button onClick = {() => window.open(item, '_blank', 'noopener, noreferrer')} className = "Card-button fa fa-github" key = {index} href = {item}>  </button>

                    }

                    else if (item.includes("linkedin")) {

                        return <button onClick = {() => window.open(item, '_blank', 'noopener, noreferrer')} className = "Card-button fa fa-linkedin" href = {item}/>
 
                    }

                    else if (item.includes("mail")) {

                        return <button onClick = {() => window.open(item, '_blank', 'noopener, noreferrer')} className = "Card-button fa fa-envelope" href = {item}/>
                    
                    }

                })}

            </ul>

            </div>
            
        </div>

    );
    
}

export default Card;