import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendaring...')
        return (
            <WithClass classes="Person">
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>This is a {this.props.name} And I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </WithClass>        
        )
    }    
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
}

export default Person;