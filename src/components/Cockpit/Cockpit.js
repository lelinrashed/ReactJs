import React, { useEffect } from 'react';
import './Cockpit.css';


const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 2000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    const assignedClass = [];
    if(props.personsLength <=2) {
        assignedClass.push( 'red' );
    }
    if(props.personsLength <=1) {
        assignedClass.push( 'bold' );
    }

    return(
        <div className="Cockpit">        
            <h1>{props.title}</h1>
            <p className={assignedClass.join(' ')}>This is really working!</p>
            <button onClick={props.clicked}>Show/Hide List</button>
        </div>
    );
};

export default React.memo(Cockpit);
