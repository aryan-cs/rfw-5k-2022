import './Card.css'; 

function Card (props) {

    return (

        <div className = "Card">

            <div className = "Card-content">

                <img src = {process.env.PUBLIC_URL + "/assets/people/" + props.person + ".png"} className = "Card-image" alt = "" width = "200" height = "200"/>
                <p className = "Card-name"> {props.name.toUpperCase()} </p>
                <p className = "Card-role"> {props.role} </p>

                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

                <button className = "Card-button"> <span className="material-symbols-outlined"> link </span> </button>

            </div>
            
        </div>

    );
    
}

export default Card;