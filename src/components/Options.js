import React from 'react';
import Option from './Option';

const Options = (props) => {    
    return (
        <div>
            <p>Your Options:</p>
            { props.options.length === 0 && <p>Please add an Option to get started</p> }
            <ol>
                { 
                    props.options.map((option, index) => {
                        return <Option key={index} index={index} text={option} handleRemoveOption={props.handleRemoveOption}/>;
                    })
                }
            </ol>
        </div>
    );
};
export default Options;