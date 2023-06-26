import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import Header from '../components/Header';

const MasterClass = () => {
  const masterClasses =  classesData.classes.filter((cls) => cls.type === 'master');

  return (
    <div>
      <Header />
      <h1>Master Classes</h1>
      {masterClasses.map((cls) => (
        <Link to={`/class/${cls.id}`} key={cls.id}>
          <div>
            <img src={Images[cls.image]} alt={cls.name} />
            <p>{cls.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MasterClass;
