import React from 'react';

import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import Options from './Options';

export default
class IndecisionApp extends React.Component {
    state = {
        title: this.props.title,
        subtitle: this.props.subtitle,
        options: [],
        selectedOption: undefined
    };
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'));
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (err) {
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options));
        }
    }

    handleResetOptions = () => {
        this.setState((prevState) => ({ options: [] }));
    };

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleAddOption = (newOption) => {
        if (!newOption) {
            return 'Enter valid value to add an option';
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'That option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(newOption) }));
    };

    handlePickOption = () => {
        this.setState(() => ({ selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)] }));
    };

    handlePickOptionDimissal = () => {
        console.log('selectedOption is : ', this.state.selectedOption);
        this.setState(() => ({ selectedOption: undefined }));
    };

    render() {
        return (
            <div>
                <Header 
                    title={this.state.title} 
                    subtitle={this.state.subtitle} 
                />

                <div className="container">
                    <Action
                        handlePickOption={this.handlePickOption} 
                        hasOptions={this.state.options.length > 0} 
                    />
                    <div className='widget'>
                        <Options 
                            handleRemoveOption={this.handleRemoveOption}
                            handleResetOptions={this.handleResetOptions} 
                            options={this.state.options} 
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>
                </div>

                <OptionModal 
                    handleDimissal={this.handlePickOptionDimissal}
                    selectedOption={this.state.selectedOption} 
                />
            </div>
        );
    }
}