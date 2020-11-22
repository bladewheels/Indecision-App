class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
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
                    <Option />
                </ol>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return <li>This is an option</li>;
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