import React from 'react';

const Card = ({country}) => {
    console.log(country);
    return (
       <li className="card">
        <img src={country.flags.svg} alt="drapeau" />
        <div className='infos'>
            <h2>Nom du pays</h2>
        </div>
       </li>
    );
};

export default Card;