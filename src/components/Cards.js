import React from 'react';
import './Cards.css';
import {Button} from './Button'
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cardsTitle'>Check out these top projects</h1>
      <div className='cardsContainer'>
          <ul className='cardsItems'>
          <CardItem
              src= '/images/EventApp.png'
              text='An event app with a user log-in and sign-up managed by MongoDB.'
              label='React.js | Mongo | Express.js | Node.js | CSS | HTML'
              path='https://github.com/MSearle00/project-12-eventapp'
              date='28/10/2020'
            />
            <CardItem
              src='/images/CalculatorApp.png'
              text='A Calculator application, with memory functions.'
              label='React.js | CSS | SCSS | HTML'
              path='https://github.com/MSearle00/project-7-calculator'
              date='15/10/2020'
            />
          </ul>
          <ul className='cardsItems'>
          <CardItem
              src='/images/WeatherApp.png'
              text='A vanilla JS Weather App with search function using OpenWeatherMap API'
              label='Javascript | HTML | CSS'
              path='https://github.com/MSearle00/project-11-weatherapp'
              date='14/10/2020'
            />
          <CardItem
              src='/images/TravelSPA.png'
              text='A basic SPA about travelling.'
              label='HTML | CSS'
              path='https://github.com/MSearle00/project-2-travel-bucketlist'
              date='18/08/2020'
            />
            <CardItem
              src='/images/SocialSite.png'
              text='A start on a social site template'
              label='React.js | CSS | HTML'
              path='https://github.com/MSearle00/project-8-social-site'
              date='22/09/2020'
            />
          </ul>
          <Link to="/projects">
          <Button buttonStyle='buttonBlack'>Click here to view more projects!</Button>
          </Link>
        </div>
    </div>
  );
}

export default Cards;
