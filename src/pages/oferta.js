import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Oferta.css';
import schedule from "../img/schedule.jpg";

const oferts = [
    {
        id: 1,
        title: "Pierwsza wizyta",
        price: "100 zł",
    },
    {
        id: 2,
        title: "Wizyta kontrolna",
        price: "50 zł",
    },
    {
        id: 3,
        title: "Jadłospis",
        price: "150 zł",
    },
    {
        id: 4,
        title: "Konsultacja on-line",
        price: "50 zł",
    },
]


function Oferta() {

    const test = oferts.map(ofert =>
        <>
            <li key={ofert.id} ><a href="">{ofert.title} </a>
            </li>
            <li key={ofert.id} className="prices"> {ofert.price}</li>
        </>
    )
    // const history = useHistory();
    // function handleClick() {
    //     history.push('/');
    // }


    return (
        <>

            <h1 className="name">Oferta</h1>
            <hr />
            <div className="mainPhoto">
                <img src={schedule} />
            </div>
            <div className="back">
                <ul className="oferta">{test}</ul>
                <NavLink to="/">Powrót</NavLink></div>
        </>
    );
};
export default Oferta;