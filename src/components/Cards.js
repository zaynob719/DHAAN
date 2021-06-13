import React from 'react';
import './Cards.css';
import CardItems from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1> Helping farmers in India!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src='images/doctor.jpg'
              text='Upload an image of your crop for an instant diagnosis of what might be wrong with your crops.'
              label='CROP DOCTOR'
              path='/services'
            />
            <CardItems
              src='images/crop1.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Module1'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src='images/crop1.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Module2'
              path='/services'
            />
            <CardItems
              src='images/crop1.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Module3'
              path='/services'
            />
            <CardItems
              src='images/crop1.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Module4'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;