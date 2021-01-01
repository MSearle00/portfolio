import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function AllCards(props) {

  return (
    <div className='cards'>
      <div className='cardsContainer'>
        <div className='cardsWrapper'>
          <ul className='cardsItems'>
          <CardItem
              src={process.env.PUBLIC_URL + '/images/BasicWeb.png'}
              text='A basic webpage discussing git and unix.'
              label='HTML | CSS'
              path='https://github.com/MSearle00/Project-1'
              date='11/08/2020' //Week 1
            />
          <CardItem
              src={process.env.PUBLIC_URL + '/images/TravelSPA.png'}
              text='A basic SPA about travelling.'
              label='HTML | CSS'
              path='https://github.com/MSearle00/project-2-travel-bucketlist'
              date='18/08/2020' //Week 2
            />
          <CardItem
              src={process.env.PUBLIC_URL + '/images/Quiz.png'}
              text='A quiz template.'
              label='HTML | Javascript | CSS'
              path='https://github.com/MSearle00/project-3-quiz'
              date='25/08/2020' //Week 3
            />
          </ul>
          <ul className='cardsItems'>
          <CardItem
              src={process.env.PUBLIC_URL + '/images/Game.png'}
              text='A javascript game made with OOP methods.'
              label='Javascript | HTML | CSS'
              path='https://github.com/MSearle00/project-4-game'
              date='01/09/2020' //Week 4
            />
          <CardItem
              src={process.env.PUBLIC_URL + '/images/Ceaser.png'}
              text='A ceaser cipher'
              label='Javascript | HTML | CSS'
              path='https://github.com/MSearle00/project-5-ceaserCipher'
              date='08/09/2020' //Week 5
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/CalculatorApp.png'}
              text='A Calculator application, with memory functions.'
              label='React.js | CSS | SCSS | HTML'
              path='https://github.com/MSearle00/project-7-calculator'
              date='15/09/2020' //Week 6
            />
          </ul>
          <ul className='cardsItems'>
            <CardItem
              src={process.env.PUBLIC_URL + '/images/SocialSite.png'}
              text='A start on a social site template'
              label='React.js | CSS | HTML'
              path='https://github.com/MSearle00/project-8-social-site'
              date='22/09/2020' //Week 7
            />
            <CardItem
              src={process.env.PUBLIC_URL + '/images/OldPortfolio.png'}
              text='My first attempt at a portfolio site, a play around with CSS'
              label='CSS | HTML'
              path='https://github.com/MSearle00/project-9-portfolio-site'
              date='29/09/2020' //Week 8
            />
             <CardItem
              src={process.env.PUBLIC_URL + '/images/WeatherApp.png'}
              text='A vanilla JS Weather App with search function using OpenWeatherMap API'
              label='Javascript | HTML | CSS'
              path='https://github.com/MSearle00/project-11-weatherapp'
              date='14/10/2020' //Week 10
            />
          <CardItem
              src={process.env.PUBLIC_URL + '/images/EventApp.png'}
              text='An event app with a user log-in and sign-up managed by MongoDB.'
              label='React.js | Mongo | Express.js | Node.js | CSS | HTML'
              path='https://github.com/MSearle00/project-12-eventapp'
              date='28/10/2020' //Week 12
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AllCards;
