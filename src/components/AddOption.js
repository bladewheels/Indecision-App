import React from 'react';

export default
class AddOption extends React.Component {;
    state = {
        error: undefined
    };
    handleAddOption = (event) => { 
        event.preventDefault();
        // console.log(testtting," webpack's support for source maps, see the runtime error in the browser console and a link to this line.");
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        event.target.elements.option.value = '';
    };
    render() {
        return (
            <div>
                { this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}