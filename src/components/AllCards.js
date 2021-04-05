import React, {useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Dropdown from './Dropdown';
import "./Dropdown.css"

import data from './projects.json'

function AllCards() {
  const projectData = data
  const [value, setValue] = useState(null)
  const [projectList, setProjectList] = useState(projectData)
  const tags = projectData.map((projects) => projects.tags)
  
  var tagList = [].concat.apply([], tags);

  const filterTags = Array.from(new Set(tagList));

  function setProjects(value){
    setProjectList(projectList.filter(project => project.tags.includes(value)));
  }
  function resetProjects(){
    setProjectList(projectData);
    setValue("")
  }

  
  function onChange(value) {
    setProjects(value);
    setValue(value);
  };
  
  function sortByDateAsc(){
    setProjectList(projectList.slice().sort((a, b) => new Date(a.date) - new Date(b.date)))
    console.log(projectList)
  }
  function sortByDateDesc(){
    setProjectList(projectList.slice().sort((a, b) => new Date(b.date) - new Date(a.date)))
  }


  return (
    <div className='cards'>
      <div className='filters'>
        <div className='dropdown'>
        <Dropdown
          options={filterTags}
          prompt = "Please select a language"
          value={value}
          onChange={value => onChange(value)}/>
        <button className='sortingButton' onClick= {() => resetProjects()}> Reset Selection </button>
        </div>
        <div className='dropdown'>
          <button className='sortingButton' value="desc" onClick={() => sortByDateDesc()} >Newest First</button>
          <button className='sortingButton' value="asc" onClick={() => sortByDateAsc()} >Oldest First</button>
        </div>
      </div>
      <div className='cardsContainer'>
        <div className='cardsWrapper'>
          {projectList.map(projectDatas => (
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
