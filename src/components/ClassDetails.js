import React from 'react';
import { useParams } from 'react-router-dom';
import classesData from '../API/classes.json';

const ClassDetails = () => {
  const { classId } = useParams();
  const classData = classesData.classes.find((classData) => classData.id === classId);

  if (!classData) {
    return <div>Class not found.</div>;
  }

  return (
    <div className="class-details">
      <h1>{classData.name}</h1>
      <img src={`/images/${classData.image}.jpg`} alt={classData.name} />
      <p>{classData.description}</p>
      <p>Role: {classData.role}</p>
      <p>Type: {classData.type}</p>
      {/* Render additional class details as needed */}
    </div>
  );
};

export default ClassDetails;
