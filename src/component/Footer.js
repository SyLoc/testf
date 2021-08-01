import React from 'react';
import '../css/footer.css'
import btnChecked from '../image/footer-icon-1.svg'
import btnUnCheck from '../image/footer-icon-2.svg'
import imgFooter from '../image/footer-img.jpg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__left">
        <ul className="footer__left-list">
          <li className="footer__left-item">
            <span className="footer__left-item-title">FLAP</span>
            <button className="footer__left-item-button">
              <img src={btnChecked} alt="" />
            </button>
          </li>
          <li className="footer__left-item">
            <span className="footer__left-item-title">BODY</span>
            <button className="footer__left-item-button">
              <img src={btnChecked} alt="" />
            </button>
          </li>
          <li className="footer__left-item">
            <span className="footer__left-item-title">STRAP</span>
            <button className="footer__left-item-button">
              <img src={btnUnCheck} alt="" />
            </button>
          </li>
          <li className="footer__left-item">
            <span className="footer__left-item-title">HARDWARE</span>
            <button className="footer__left-item-button">
              <img src={btnUnCheck} alt="" />
            </button>
          </li>
          <li className="footer__left-item">
            <span className="footer__left-item-title">HANDLE</span>
            <button className="footer__left-item-button">
              <img src={btnUnCheck} alt="" />
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <div className="footer-right__img">
          <img src={imgFooter} alt="" />
        </div>
        <div className="footer-right__price">
          $1,340.00
        </div>
        <div className="footer-right__btn">
          <button>DONE & ADD TO CART</button>
        </div>
      </div>
    </footer>
  );
};


export default Footer;