import React from "react";

const Card = () =>{
    return (
    <div className="card" >
        <img src="https://img.freepik.com/premium-photo/cyberpunk-industrial-abstract-future-wallpaper-futuristic-concept-pink-evening-urban-landscape-3d-illustration_743201-3182.jpg" 
        class="card-img-top" alt="imagen1"/>
        <div class="card-body">
            <h5 class="card-title">Cyber Punk Era</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    );
};

export default Card;