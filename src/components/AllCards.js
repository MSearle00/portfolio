import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Dropdown from './Dropdown';
import "./Dropdown.css"

import data from './projects.json'

function AllCards() {
  const projectData = data
  const [value, setValue] = useState(null)
  const tags = projectData.map((projects) => projects.tags)
  
  var tagList = [].concat.apply([], tags);

  const filterTags = Array.from(new Set(tagList));

  function filterProjects(){
    
  }

  return (
    <div className='cards'>
      <div className='dropdown'>
      <Dropdown
        options={filterTags}
        prompt = "Please select a language"
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
