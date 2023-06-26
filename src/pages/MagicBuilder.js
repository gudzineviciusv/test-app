import React, { useState, useEffect } from 'react';
import '../CSS/Main.css';
import Images from '../images/index.js';
import Header from '../components/Header';

const MagicBuilder = () => {
  const [elements, setElements] = useState([]);
  const [element1, setElement1] = useState('');
  const [element2, setElement2] = useState('');
  const [element1Image, setElement1Image] = useState('');
  const [element2Image, setElement2Image] = useState('');
  const [magicDescription, setMagicDescription] = useState('');

  useEffect(() => {
    fetch('API/elements.json')
      .then(response => response.json())
      .then(data => setElements(data.elements))
      .catch(error => console.log('Error:', error));
  }, []);

  const handleElement1Change = (event) => {
    const element1Value = event.target.value;
    setElement1(element1Value);
    const selectedElement1 = elements.find(element => element.name === element1Value);
    setElement1Image(selectedElement1.image);
  };

  const handleElement2Change = (event) => {
    const element2Value = event.target.value;
    setElement2(element2Value);
    const selectedElement2 = elements.find(element => element.name === element2Value);
    setElement2Image(selectedElement2.image);
  };

  const handleLearnMagic = () => {

    const magicResult = `You have created a powerful ${element1}-${element2} magic!`;
    setMagicDescription(magicResult);
  };

  return (
    <div>
      <Header />
      <h1>Magic Builder</h1>

      <div>
        <label htmlFor="element1">Element 1:</label>
        <select id="element1" name="element1" value={element1} onChange={handleElement1Change}>
          <option value="">Pick your element</option>
          {elements.map((element) => (
            <option key={element.name} value={element.name}>{element.name}</option>
          ))}
        </select>
        <img src={Images[element1Image]} width="55" height="55" alt="" />
      </div>

      <div>
        <label htmlFor="element2">Element 2:</label>
        <select id="element2" name="element2" value={element2} onChange={handleElement2Change}>
          <option value="">Pick your element</option>
          {elements.map((element) => (
            <option key={element.name} value={element.name}>{element.name}</option>
          ))}
        </select>
        <img src={Images[element2Image]} width="55" height="55" alt="" />
      </div>

      <button onClick={handleLearnMagic}>Learn Magic</button>

      <div>
        <h2>Magic Result:</h2>
        <p>{magicDescription}</p>
      </div>
    </div>
  );
};

export default MagicBuilder;
