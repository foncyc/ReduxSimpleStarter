import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// npm install
// npm install --save youtube-api-search

const API_KEY = 'AIzaSyCH0Hc5ME8rxFgdiDKcM2zJ88sKXE0t3uk';

// Create new component. This should produce some html

// const App = function(){
//     return <div>Hi!</div>
// }

const App = () => {
    // return <div>Hi!</div>
    return (
        <div>
            <SearchBar /> 
        </div>
    );
}

// Test edit
// Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));
