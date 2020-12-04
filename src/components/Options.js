import React from 'react';
import Option from './Option';
import ResetOptions from './ResetOptions';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options:</h3>
            <ResetOptions 
                handleResetOptions={props.handleResetOptions} 
                hasOptions={props.options.length > 0} 
            />
        </div>

        { props.options.length === 0 && <p className='widget-header__message'>Please add an Option to get started!</p> }
        <ol className='widget-header__options'>
            { 
                props.options.map((option, index) => {
                    return <Option count={index+1} key={index} index={index} text={option} handleRemoveOption={props.handleRemoveOption}/>;
                })
            }
        </ol>
    </div>
);
export default Options;