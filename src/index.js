import './styles/style.css';
import './sass/style.sass';
import img from './img/logo.svg';

import $ from 'jquery';
import {Post} from './components/Post.js';

import {showUsers} from './components/babel.js';

const post = new Post('WEBPACK POST TITLE', img);

$('pre').addClass('card').html(post.toString());

let url = 'https://jsonplaceholder.typicode.com/users';
showUsers(url);