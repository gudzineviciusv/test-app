import React from 'react';
import { Link } from 'react-router-dom';
import magicData from '../API/magic.json';
import '../CSS/Main.css';
import Images from '../images/index.js';

const AllMagic = () => {
  const pureMagic = magicData.magic.filter(magic => magic.type === 'pure');
  const mixedMagic = magicData.magic.filter(magic => magic.type === 'mixed');

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Pure Magic</h2>
          {pureMagic.map(magic => (
            <Link to={`/magic/${magic.id}`} key={magic.id} className="magic-link">
              <div className="magic-item">
                <img src={Images[magic.image]} alt={magic.name} />
                <h3>{magic.name}</h3>
                <p>{magic.description}</p>
              </div>
            </Link>
          ))}
          <Link to="/pure-magic" className="magic-link">
            <div className="magic-item">
              <h3>View All Pure Magic</h3>
            </div>
          </Link>
        </div>
        <div className="col-md-6">
          <h2>Mixed Magic</h2>
          {mixedMagic.map(magic => (
            <Link to={`/magic/${magic.id}`} key={magic.id} className="magic-link">
              <div className="magic-item">
              <img src={Images[magic.image]} alt={magic.name} />
                <h3>{magic.name}</h3>
                <p>{magic.description}</p>
              </div>
            </Link>
          ))}
          <Link to="/mixed-magic" className="magic-link">
            <div className="magic-item">
              <h3>View All Mixed Magic</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMagic;
