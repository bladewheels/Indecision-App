// NOT sure when this was added (by VS Code?!): import { checkPropTypes } from 'prop-types';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp subtitle={'Put your life in the hands of a computer'} />, document.getElementById('app'));