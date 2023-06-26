import React from 'react';
import { useParams } from 'react-router-dom';
import magicData from '../API/magic.json';
import Images from '../images/index.js';
import '../CSS/Main.css';
import Header from '../components/Header';

const SingleMagic = () => {
  const { id } = useParams();
  const magic = magicData.magic.find(magic => magic.id === parseInt(id));

  if (!magic) {
    return <div>Magic not found!</div>;
  }

  return (
    <div>
      <Header />
      <img src={Images[magic.image]} alt={magic.name} />
      <h2>{magic.name}</h2>
      <p>{magic.description}</p>
      <p>Type: {magic.type}</p>
    </div>
  );
};

export default SingleMagic;
