import React, {useState, useEffect} from 'react';
import '../../App.css';
import AllCards from '../AllCards'
import Footer from '../Footer';

export default function Projects() {
  return (
  <div className='projects'>
    <h1>PROJECTS</h1>
  <AllCards />
  <Footer />
  </div>
  );
}
