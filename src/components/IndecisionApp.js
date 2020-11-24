import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import ResetOptions from './ResetOptions';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

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
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePickOption={this.handlePickOption} 
                />
                <ResetOptions 
                    hasOptions={this.state.options.length > 0} 
                    handleResetOptions={this.handleResetOptions} 
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleDimissal={this.handlePickOptionDimissal}
                />
            </div>
        );
    }
}