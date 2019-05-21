import React from 'react';
import './Cockpit.css';


const Cockpit = (props) => {

    const assignedClass = [];
    if(props.persons.length <=2) {
        assignedClass.push( 'red' );
    }
    if(props.persons.length <=1) {
        assignedClass.push( 'bold' );
    }

    return(
        <div className="Cockpit">        
            <h1>Hello, I'm React App</h1>
            <p className={assignedClass.join(' ')}>This is really working!</p>
            <button onClick={props.clicked}>Show/Hide List</button>
        </div>
    );
};

export default Cockpit;
