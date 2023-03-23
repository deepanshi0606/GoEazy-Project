import React from 'react';
import './HomePage.css';
import GoEazyLogo from './goeazylogo.png';
import stationerylogo from './stationerylogo.gif';
import pharmacylogo from './pharmacylogo.gif';
import generalstorelogo from './generalstorelogo.gif';
// import './index.html';

function HomePage() {
  return (
    <div className="App-hp">
      <nav className="navbar-hp">
        <div className="navbar-container-hp">
          <div className="logo-hp">
            <img src={GoEazyLogo} alt="Go Eazy" />
          </div>
          <ul className="nav-menu-hp">
            <li><a href="#" target="_blank">My Profile</a></li>
            <li><a href="#">My Orders</a></li>
          </ul>
        </div>
      </nav>
      <div className="container-hp">
        <div className="sections-hp">
          <section className="section-stationery-hp">
           <a href='##chatbot'> <img src={stationerylogo} height="300" width="300" /> </a>
          </section>
          <section className="section-pharmacy-hp">
           <a href='##chatbot'> <img src={pharmacylogo} height="300" width="300" /> </a>
          </section>
          <section className="section-general-hp">
            <a href='##chatbot' > <img src={generalstorelogo} height="300" width="300" /> </a>
          </section>
        </div>
        <div className="timings-hp">
          <h2>Delivery Timings:</h2>
          <p>Wednesday - Monday: 5pm - 8pm</p>
          <p>Tuesday: 10am - 1pm , 4pm-8pm</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
