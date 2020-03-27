import React from 'react';
import '../style/Menu.css';

import Home from "../pages/Home";
import Wspolpraca from "../pages/wspolpraca";
import About from "../pages/About";
import Oferta from "../pages/oferta";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import header from "../img/tlo.jpg"
function Menu() {
    return (

        <Router>

            <div className=" layout">

                <header > <img src={header} className="col-8" /></header>
                <nav className="col-4" >

                    <ul className="Menu" >
                        <li>
                            <Link to="/">Strona główna</Link>
                        </li>
                        <li><Link to="/oferta">Oferta</Link></li>
                        <li><Link to="/wspolpraca">Współpraca</Link></li>
                        <li><Link to='/about'>O mnie</Link></li>
                        <li><Link to='/blog'>Dietetyczne ciekawostki</Link></li>
                        <li><Link to="/contact">Kontakt</Link></li>
                    </ul>
                </nav>

            </div>
            <div className="col-12">
                <Switch >
                    <Route exact path="/"><Home /></Route>
                    <Route path="/oferta"><Oferta /></Route>
                    <Route path="/wspolpraca"><Wspolpraca /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/blog"><Blog /></Route>
                    <Route path="/contact"><Contact /></Route>
                </Switch>

            </div>
        </Router >

    );
}

export default Menu;