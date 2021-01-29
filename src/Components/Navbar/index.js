import React from 'react';
import './Navbar.scss';
import logo from 'assets/svgs/logo.svg';
import home from 'assets/svgs/home.svg';
import divisions from 'assets/svgs/divisions.svg';
import entries from 'assets/svgs/entries.svg';
import bell2 from 'assets/svgs/bell2.svg';
import user from 'assets/svgs/user.svg';
import downCaret from 'assets/svgs/downCaret.svg';
import search from 'assets/svgs/Search.svg';
import { NavLink } from 'react-router-dom';

const pageLinks = [
  {
    name: 'Home',
    to: '/home',
    icon: home,
  },
  {
    name: 'Entries',
    to: '/entries',
    icon: entries,
  },
  {
    name: 'Divisions',
    to: '/divisions',
    icon: divisions,
  },
];

function Link({ name, to, icon }) {
  return (
    <NavLink
      to={to}
      className='navbar__link'
      activeClassName='navbar__link--active'
    >
      <img className='navbar__link-icon' alt={name} src={icon} /> {name}{' '}
    </NavLink>
  );
}

const Search = ({ value, onChange }) => (
  <div className="search">
  <img src={search} alt="searchIcon" className='search-input-icon' />
    <input type='search' className='search-input' />
  </div>
);

function Navbar() {
  return (
    <nav className='d-flex justify-content-between navbar'>
      <div className='navbar__wrapper'>
        <div className='navbar__logo-n-links'>
          <div className='d-flex align-items-center'>
            <img width='32px' height='27px' src={logo} alt='logo' />
            <p>FE Engineer Test 1</p>
          </div>

          <div className='navbar__links'>
            {pageLinks.map((each, index) => (
              <Link key={index} name={each.name} to={each.to} icon={each.icon} />
            ))}
          </div>
        </div>
        <div className='navbar__search-n-icon'>
          <Search />
          <img
            src={bell2}
            alt='notification'
            width='15.79px'
            height='16.92px'
          />
          <div className='navbar__profile'>
            <img width='15px' height='16px' src={user} alt='profile' />
          </div>
          <img
            src={downCaret}
            alt='notification'
            width='15.79px'
            height='16.92px'
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
