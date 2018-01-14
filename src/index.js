import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import API from './API';
import './App.css';
import SearchBar from './components/SearchBar';

API({q: 'surfboards'}, (data) => console.log(data));

const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));