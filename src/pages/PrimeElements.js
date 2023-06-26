import React from 'react';
import { Link } from 'react-router-dom';
import elementsData from '../API/elements.json';
import Images from '../images/index.js';
import '../CSS/Main.css';
import Header from '../components/Header';

const PrimeElements = () => {

  const primeElements = elementsData.elements.filter(
    (element) => element.type === 'prime'
  );

  return (
    <div>  
    <Header />
      <h2>Prime Elements</h2>
      {primeElements.map((element) => (
        <Link key={element.id} to={`/element/${element.id}`}>
          <img src={Images[element.image]} alt={element.name} />
          <p>{element.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default PrimeElements;
