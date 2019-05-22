import React, { Component } from 'react';
import  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}

	state = {
		persons : [
			{id: 'fef12', name: 'ratul', age: 28},
			{id: 'era45', name: 'aiub', age: 23},
			{id: 'refd3', name: 'younus', age: 24},
			{id: 'rxdf1', name: 'meraj', age: 24}
		],
		showPersons: false,
		showCockpit: true,
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] geDerivedStateFromProps');
		return state;
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((person) => {
			return person.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};    
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons
		})
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	render() {
		console.log('[App.js] render');
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					<Persons 
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}
						/>
				</div>	
			);
		};

		return (
			<div className="App">
				<button onClick={()=> {
					this.setState({ showCockpit:false });
				}}>Remove Cockpit</button>
				{this.state.showCockpit ? <Cockpit 
				title={this.props.title}
				personsLength={this.state.persons.length}
				clicked={this.togglePersonsHandler} /> : null}
				{persons}
			</div>
		);
	}
	
}

export default App;
