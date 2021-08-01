import React from 'react';
import '../css/main.css'
import BodyRight from './body.right';
import BodyLeft from './body.left';

const Body = () => {
  return (
    <main className='main'>
      <BodyLeft/>
      <BodyRight/>
    </main>
  );
};

export default Body;