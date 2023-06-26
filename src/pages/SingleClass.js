import React from 'react';
import classesData from '../API/classes.json';
import Images from '../images/index.js';
import Header from '../components/Header';

const SingleClass = ({ match }) => {
  const classId = match.params.id;
  const selectedClass =  classesData.classes.find((cls) => cls.id === classId);

  if (!selectedClass) {
    return <div>Class not found</div>;
  }

  const {
    image,
    name,
    description,
    type,
    weapon,
    combatStyle,
    damageType,
    role
  } = selectedClass;

  return (
    <div>
      <Header />
      <img src={Images[image]} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Type: {type}</p>
      <p>Weapon: {weapon}</p>
      <p>Fighting Style: {combatStyle}</p>
      <p>Damage Type: {damageType}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default SingleClass;
