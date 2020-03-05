import './styles/style.css';
import './sass/style.sass';
import img from './img/logo.svg';

import React from 'react';
import {render} from 'react-dom';

import $ from 'jquery';
import {Post} from './components/Post.js';

import {showUsers} from './components/babel.js';

const post = new Post('WEBPACK POST TITLE', img);

$('pre').addClass('card').html(post.toString());

let url = 'https://jsonplaceholder.typicode.com/users';
showUsers(url);

const App = () => (
	<div className="container">
		<h1>Webpack Practise with React</h1>
		<p>Same text after</p>
	</div>
);

render(<App />, document.getElementById('app'));