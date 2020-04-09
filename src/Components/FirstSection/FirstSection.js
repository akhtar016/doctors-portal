import React from 'react';
import Navbar from './Navbar/Navbar';
import './FirstSection.css';
import MiddlePart from './MiddlePart/MiddlePart';
import FinalPart from './FinalPart/FinalPart';

const FirstSection = () => {
    return (
        <div className="bg-image component-firstSec">
            <Navbar/>
            <MiddlePart/>
            <FinalPart/>

        </div>
        
    );
};

export default FirstSection;