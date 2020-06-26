import React from 'react';

const Card = (props) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src="https://robohash.org/test?200*200" alt="Anime" />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;