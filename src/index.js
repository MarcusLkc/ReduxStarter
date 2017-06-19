import React from 'react';
import ReactDOM from 'react-dom';

// Create New Componenent to produce html

const App = () => {
	return <div>Hi!</div>;
}

// Take this component's generate html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));