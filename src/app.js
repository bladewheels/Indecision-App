class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App',
        subtitle = 'Put your life in the hands of a computer',
        options = ['Thing One','Thing Two','Thing Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
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
    render() { return <button>What should I do?</button>; }
}

class Options extends React.Component {
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
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
//         <IndecisionApp />
//     </div>
// )
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));