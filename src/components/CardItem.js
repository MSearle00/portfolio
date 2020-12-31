import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cardsItem'>
        <a className='cardsItemLink' href={props.path}>
          <figure className='cardsItemPicWrap' data-category={props.label}>
            <img
              className='cardsItemImg'
              alt='Project Image'
              src={props.src}
            />
          </figure>
          <div className='cardsItemInfo'>
            <h5 className='cardsItemText'>{props.text}</h5>
            <div className='cardsItem__date'> {props.date}</div>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
