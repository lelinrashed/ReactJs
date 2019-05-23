import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] Shourld component update');
    //     if(
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, PrevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] Component upadate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendaring...');
        return this.props.persons.map((person, index) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={person.name}  
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth={this.props.isAuthenticated} />
        });
    }    
};

export default Persons;