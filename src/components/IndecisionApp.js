import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import ResetOptions from './ResetOptions';
import Header from './Header';
import Action from './Action';

export default
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle,
            options: []
        }
    }

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

    resetOptions() {
        this.setState((prevState) => ({ options: [] }));
    }

    deleteOption(optionToRemove) {
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    addOption(newOption) {
        if (!newOption) {
            return 'Enter valid value to add an option';
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'That option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(newOption) }));
    }

    pickOption() {
        alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePickOption={this.pickOption} />
                <ResetOptions hasOptions={this.state.options.length > 0} handleResetOptions={this.resetOptions} />
                <Options options={this.state.options} handleRemoveOption={this.deleteOption}/>
                <AddOption handleAddOption={this.addOption} />
            </div>
        );
    }
}