import React from 'react';
import '../css/main.css'
import icon_3 from '../image/mainleft-icon-3.svg'
import type_img_1 from '../image/type-img-1.jpg'
import type_img_2 from '../image/type-img-2.jpg'
import type_img_3 from '../image/type-img-3.jpg'
import type_img_4 from '../image/type-img-4.jpg'
import type_img_5 from '../image/type-img-5.jpg'
import type_img_6 from '../image/type-img-6.jpg'
import type_img_7 from '../image/type-img-7.jpg'
import type_img_8 from '../image/type-img-8.jpg'

const BodyRight = () => {
  return (
    <section className='main__right'>
      <div className='main__right-dropdown'>
        <select className='main__right-dropdown__select'>
          <option value="flap">flap</option>
          <option value="flap_1">flap_1</option>
          <option value="flap_2">flap_2</option>
          <option value="flap_3">flap_3</option>
          <option value="flap_4">flap_4</option>
        </select>
        <img className='main__right-dropdown__icon' src={icon_3} alt="" />
      </div>
      <div className='main__right__select-type'>
        <div className='main__right__select__title'>
          Select Leather Type
        </div>
        <div className='main__right__select-type__price'>
          TUMBLED LEATHER  $110
        </div>
        <div className='main__right__select__option'> 
          <ul className='main__right__select-type__list'>
            <li className='main__right__select-type__item type__item--active'>
              <img src={type_img_1} alt="" />
              <span className='main__right__select-type__item-title'>TUMBLED</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_2} alt="" />
              <span className='main__right__select-type__item-title'>HELLO</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_3} alt="" />
              <span className='main__right__select-type__item-title'>NAME</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_4} alt="" />
              <span className='main__right__select-type__item-title'>I’M PHUOC</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_5} alt="" />
              <span className='main__right__select-type__item-title'>FANTASTIC</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_6} alt="" />
              <span className='main__right__select-type__item-title'>STAGNATE</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_7} alt="" />
              <span className='main__right__select-type__item-title'>COMPASSION</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_8} alt="" />
              <span className='main__right__select-type__item-title'>LUXURY</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='main__right__select-color'>
        <div className='main__right__select__title'>
          Select Leather color
        </div>
        <div className='main__right__select__option'>
          <ul className='main__right__select-color__list'>
            <li className='main__right__select-color__item color__item--active' id='color-1'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-2'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-3'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-4'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-5'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-6'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li id='color-center'></li>
            <li className='main__right__select-color__item' id='color-7'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-8'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-9'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-10'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-11'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
            <li className='main__right__select-color__item' id='color-12'>
              <span className='main__right__select-color__item-text'>MERINAL</span>
            </li>
          </ul>
        </div>

      </div>

      <div className='main__right__select-type'>
        <div className='main__right__select__title'>
          Select Pattern Type
        </div>
        <div className='main__right__select-type__price'>
          HUMBLE  $30
        </div>
        <div className='main__right__select__option'>
          <ul className='main__right__select-type__list'>
            <li className='main__right__select-type__item type__item--active'>
              <img src={type_img_1} alt="" />
              <span className='main__right__select-type__item-title'>TUMBLED</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_2} alt="" />
              <span className='main__right__select-type__item-title'>HELLO</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_3} alt="" />
              <span className='main__right__select-type__item-title'>NAME</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_4} alt="" />
              <span className='main__right__select-type__item-title'>I’M PHUOC</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_5} alt="" />
              <span className='main__right__select-type__item-title'>FANTASTIC</span>
            </li>
            <li className='main__right__select-type__item'>
              <img src={type_img_6} alt="" />
              <span className='main__right__select-type__item-title'>STAGNATE</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};


export default BodyRight;