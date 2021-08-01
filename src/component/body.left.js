import React from 'react';
import '../css/main.css'
import image14 from '../image/image-14.png'
import icon_1 from '../image/mainleft-icon-1.svg'
import icon_2 from '../image/mainleft-icon-2.svg'
import icon_3 from '../image/mainleft-icon-3.svg'

const BodyLeft = () => {
  return (
    <section className='main__left'>
      <div className='main__left-first'>
        <span>HOME</span>  -  <span>DESIGN YOUR OWN</span>  -  <span>CONVERTIBLE MINI MERINAL</span>
      </div>
      <div className='main__left-title'>Convertible Mini Merinal</div>

      <div className='main__left-frame'>
        <img src={image14} className='main__left-frame_img' alt="" />
        <div className='main__left-frame__icons'>
          <button><img src={icon_1} className='main__left-frame__icon-1' alt="" /></button>
          <button><img src={icon_2} className='main__left-frame__icon-2' alt="" /></button>
        </div>
      </div>

      <div className='main__left-dropdown'>
        <div className='main__left-dropdown__title'>PRODUCT DETAILS</div>
        <img src={icon_3} className='main__left-dropdown__icon' alt="" />
      </div>
    </section>
  );
};


export default BodyLeft;