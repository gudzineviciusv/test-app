import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllElements from './pages/AllElements';
import SingleElement from './pages/SingleElement';
import AllMagic from './pages/AllMagic';
import SingleMagic from './pages/SingleMagic';
import PureMagic from './pages/PureMagic';
import MixedMagic from './pages/MixedMagic';
import MagicBuilder from './pages/MagicBuilder';
import AllClasses from './pages/AllClasses';
import ClassDetails from './components/ClassDetails';
import BasicClass from './pages/BasicClass';
import AdvancedClass from './pages/AdvancedClass';
import MasterClass from './pages/MasterClass';
import SingleClass from './pages/SingleClass';
import Reviews from './pages/Reviews';
import CoreElements from './pages/CoreElements';
import PrimeElements from './pages/PrimeElements';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/elements" element={<AllElements />} />
        <Route path="/element/:id" element={<SingleElement />} />
        <Route exact path="/magic-builder" element={<MagicBuilder />} />
        <Route exact path="/magic" element={<AllMagic />} />
        <Route path="/magic/:id" element={<SingleMagic />} />
        <Route path="/pure-magic" element={<PureMagic />} />
        <Route path="/mixed-magic" element={<MixedMagic />} />
        <Route path="/classes" element={<AllClasses />} />
        <Route path="/class/:classId" element={<ClassDetails />}>
          <Route index element={<SingleClass />} />
        </Route>
        <Route path="/basic-classes" element={<BasicClass />} />
        <Route path="/advanced-classes" element={<AdvancedClass />} />
        <Route path="/master-classes" element={<MasterClass />} />
        <Route path="/reviews" element={<Reviews />} /> 
        <Route path="/core-elements" element={<CoreElements />} />
        <Route path="/prime-elements" element={<PrimeElements />} />
      </Routes>
    </Router>
  );
};

export default App;
