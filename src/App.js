import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	
	state = {
		persons : [
			{id: 'fef12', name: 'ratul', age: 28},
			{id: 'era45', name: 'aiub', age: 23},
			{id: 'refd3', name: 'younus', age: 24},
			{id: 'rxdf1', name: 'meraj', age: 24}
		],
		showPersons: false
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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			border: '1px solid transparent',
			font: 'inherit',
			padding: '8px',
			cursor: 'pointer'
		}

		const classes = [];
		if(this.state.persons.length <=2) {
			classes.push('red');
		}
		if(this.state.persons.length <=1) {
			classes.push('bold');
		}

		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person 
							click={() => this.deletePersonHandler(index)}
							name={person.name} 
							key={person.id} 
							age={person.age}
							changed={(event) => this.nameChangedHandler(event, person.id)} />
					})}
				</div>
			);
			style.backgroundColor = 'red';
		};

		return (
			<div className="App">
				<h1>Hello, I'm React App</h1>
				<p className={classes.join(' ')}>This is really woring!</p>
				<button style={style} onClick={this.togglePersonsHandler}>Show/Hide List</button>
				{persons}
			</div>
		);
	}
	
}

export default App;
