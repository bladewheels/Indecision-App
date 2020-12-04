import React from 'react';

const ResetOptions = (props) => {    
    return (
        <div>
            <button className="button button--link" disabled={!props.hasOptions} onClick={props.handleResetOptions}>Reset All</button>
        </div>
    );
};
export default ResetOptions;
