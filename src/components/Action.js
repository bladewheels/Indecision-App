import React from 'react';

const Action = (props) => {
    return (
        <button disabled={!props.hasOptions} onClick={props.handlePickOption}>What should I do?</button>
    )
};
export default Action;