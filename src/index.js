import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import API from './api_key';
import SearchBar from './components/SearchBar';

const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));