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
            options: props.options
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
IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

};
Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
        return (
            <button disabled={!props.hasOptions} onClick={props.handlePickOption}>What should I do?</button>
        )
};

const Options = (props) => {    
    return (
        <div>
            <p>Your Options:</p>
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

const Option = (props) => {
    return <li key={props.index} >{props.text} <button onClick={(event) => { props.handleRemoveOption(props.text); }} >Remove</button></li>;
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    addOption(event) { 
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));
        event.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const ResetOptions = (props) => {    
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleResetOptions}>Reset Options</button>
        </div>
    );
};

ReactDOM.render(<IndecisionApp subtitle={'Put your life in the hands of a computer'} options={['one','two','three']} />, document.getElementById('app'));
