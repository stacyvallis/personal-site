import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Stacy Vallis</h2>
        <p><a href="mailto:stacy.vallis@aut.ac.nz">stacy.vallis@aut.ac.nz</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Stacy!
        I am a Lecturer in Architecture and Emerging Technologies
        at Auckland University of Technology (AUT).
        Please contact me if you are interested in collaborating!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Stacy Vallis <Link to="/">stacyvallis.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
