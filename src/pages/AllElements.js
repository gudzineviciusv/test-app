import React from 'react';
import { Link } from 'react-router-dom';
import elementsData from '../API/elements.json';
import Images from '../images/index.js';
import Header from '../components/Header';


const AllElements = () => {
  const primeElements = elementsData.elements.filter(
    (element) => element.type === 'prime'
  );
  const coreElements = elementsData.elements.filter(
    (element) => element.type === 'core'
  );

  return (
    <div>
      <Header />
      <div>
        <h2>Prime Elements</h2>
        {primeElements.map((element) => (
          <Link key={element.id} to={`/element/${element.id}`}>
            <img src={Images[element.image]} alt={element.name} />
            <p>{element.name}</p>
          </Link>
        ))}
      </div>
      <div>
        <h2>Core Elements</h2>
        {coreElements.map((element) => (
          <Link key={element.id} to={`/element/${element.id}`}>
            <img src={Images[element.image]} alt={element.name} />
            <p>{element.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllElements;
