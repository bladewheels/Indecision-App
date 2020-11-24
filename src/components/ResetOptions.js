import React from 'react';

const ResetOptions = (props) => {    
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleResetOptions}>Reset Options</button>
        </div>
    );
};
export default ResetOptions;
