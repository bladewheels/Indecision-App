import React from 'react';

const Option = (props) => {
    return <li key={props.index} >{props.text} <button onClick={(event) => { props.handleRemoveOption(props.text); }} >Remove</button></li>;
};
export default Option;