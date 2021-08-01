import React from 'react';
import '../css/header.css'
import icon_1 from '../image/header-icon-1.svg'
import icon_2 from '../image/header-icon-2.svg'
import icon_3 from '../image/header-icon-3.svg'
import icon_4 from '../image/header-icon-4.svg'
import logo from '../image/logo.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className="header-left">
        <ul className="header-left__list">
          <li className='header-left__item'>
            <a href="/abc" className='header-left__item__link'>
              <img src={icon_1} className='header-left__item__link-icon' alt="" />
              <span className='header-left__item__link-content'>English</span>
            </a>
          </li>
          <li className='header-left__item header-left__item--bg-border'>
            <a href="/abc" className='header-left__item__link'>
              <img src={icon_2} className='header-left__item__link-icon' alt="" />
              <span className='header-left__item__link-content'>Log In</span>
            </a>
          </li>
          <li className='header-left__item'>
            <a href="/abc" className='header-left__item__link'>
              <img src={icon_3} className='header-left__item__link-icon' alt="" />
            </a>
          </li>
          <li className='header-left__item'>
            <a href="/abc" className='header-left__item__link'>
              <img src={icon_4} className='header-left__item__link-icon' alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="header-center">
        <img src={logo} className="header-center_logo" alt="logo" />
      </div>
      <div className="header-right">
        <ul className='header-right__list'>
          <li className="header-right__item">
            <a href="/abc" className="header-right__item-link">Design your own</a>
          </li>
          <li className="header-right__item">
            <a href="/abc" className="header-right__item-link">Collection</a>
          </li>
          <li className="header-right__item header-right__item--active">
            <a href="/abc" className="header-right__item-link">Bags</a>
          </li>
          <li className="header-right__item">
            <a href="/abc" className="header-right__item-link">Our story</a>
          </li>
          <li className="header-right__item">
            <a href="/abc" className="header-right__item-link">News</a>
          </li>
          <li className="header-right__item">
            <a href="/abc" className="header-right__item-link">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};


export default Header;