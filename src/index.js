import './styles/style.css';
import img from './img/logo.svg';

import $ from 'jquery';
import {Post} from './components/Post.js';

const post = new Post('WEBPACK POST TITLE', img);

$('pre').addClass('card').html(post.toString());