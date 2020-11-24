import { checkPropTypes } from 'prop-types';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            {props.children}
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page, via props.content</p>
    </div>
);

// ReactDOM.render(<IndecisionApp subtitle={'Put your life in the hands of a computer'} />, document.getElementById('app'));
// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
ReactDOM.render((
    <Layout content={template}>
        <p>this is inline, via props.children</p>
    </Layout>)
    , document.getElementById('app'));
