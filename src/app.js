class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle,
            options: []
        }
    }

    resetOptions() {
        this.setState((prevState) => { 
            return { options: [] }; 
        }); 
    }

    addOption(newOption) {
        this.setState((prevState) => { 
            prevState.options.push(newOption);
            return { options: prevState.options }; 
        }); 
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
                <Options options={this.state.options} />
                <AddOption handleAddOption={this.addOption} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() { 
        return (
            <button disabled={!this.props.hasOptions} onClick={this.props.handlePickOption}>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Your Options:</p>
                <ol>
                    { 
                        this.props.options.map((option, index) => {
                            return <Option key={index} index={index} text={option}/>;
                        })
                    }
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <li key={this.props.index}>{this.props.text}</li>;
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
    }
    addOption(event) { 
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
            this.props.handleAddOption(option);
        }
        event.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

class ResetOptions extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handleResetOptions}>Reset Options</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp title={'Indecision App'} subtitle={'Put your life in the hands of a computer'} />, document.getElementById('app'));