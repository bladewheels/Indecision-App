import React from 'react';
import ReactDOM, { render } from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp subtitle={'Put your life in the hands of a computer'} />, document.getElementById('app'));