import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Dropdown from './Dropdown';
import "./Dropdown.css"

import data from './projects.json'
import { initialValue } from 'rbx/components/dropdown/dropdown-context';

function AllCards() {
  const projectData = data
  const [value, setValue] = useState(null)
  const tags = projectData.map((projects) => projects.tags)
  
  var tagList = [].concat.apply([], tags);

  const filterTags = Array.from(new Set(tagList));
  console.log(filterTags)


  return (
    <div className='cards'>
      <div className='dropdown' style={{width:200}}>
      <Dropdown
        options={filterTags}
        value={value}
        onChange={val => setValue(val)}/>
      </div>
      <div className='cardsContainer'>
        <div className='cardsWrapper'>
          {projectData.map(projectDatas => (
            <CardItem
                  src= {projectDatas.src}
                  text= {projectDatas.text}
                  label= {projectDatas.tags}
                  path= {projectDatas.path}
                  date= {projectDatas.date}
                />
                ))}
        </div>
      </div>
    </div>
  );
  }
export default AllCards;
