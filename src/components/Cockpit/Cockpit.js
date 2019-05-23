import React, { useEffect, useRef } from 'react';
import './Cockpit.css';


const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 2000);
        toggleBtnRef.current.click();
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
            <button ref={toggleBtnRef} onClick={props.clicked}>Show/Hide List</button>
            <button onClick={props.login}>Login</button>
        </div>
    );
};

export default React.memo(Cockpit);
