import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.text}</p>
        <button 
            className="button button--link" 
            onClick={(event) => { props.handleRemoveOption(props.text); }} >
        Remove
        </button>
    </div>
);
export default Option;