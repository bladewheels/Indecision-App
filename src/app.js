class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App',
        subtitle = 'Put your life in the hands of a computer',
        options = ['Thing One','Thing Two','Thing Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <ResetOptions />
                <Options options={options}/>
                <AddOption />
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
    pickOption() { alert('Pickled Option'); }
    render() { return <button onClick={this.pickOption}>What should I do?</button>; }
}

class Options extends React.Component {
    resetOptions() { alert('TODO: Reset Options'); }
    render() {
        return (
            <div>
                <p>Your Options:</p>
                <ol>
                    { 
                        /* Map over the options, using the index as the HTML key attribute
                            (Apparently) duplicate the 'key' and 'index' props as the 'key' prop is reserved by React
                        */
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
    addOption(event) { 
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        if (option) {
        //     app.options.push(option);
        //     renderApp();
            alert(option); 
            event.target.elements.option.value = '';
        }
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
    resetOptions() { alert('TODO: Reset Options'); }
    render() {
        return (
            <div>
                <button onClick={this.resetOptions}>Reset Options</button>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));