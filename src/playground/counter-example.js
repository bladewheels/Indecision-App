class Counter extends React.Component {
    constructor(props) {
        super(props);
        // this.count = props.count;
        this.resetCount = this.resetCount.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.plusOne = this.plusOne.bind(this);
        this.state = {
            count: props.count
        }
    }
    resetCount() { 
        this.setState(() => { 
            return { count: this.props.count }; 
        }); 
    }
    minusOne() { 
        this.setState((prevState) => { 
            return { count: prevState.count - 1 }; 
        }); 
    }
    plusOne() { 
        this.setState((prevState) => { 
            return { count: prevState.count + 1 }; 
        }); 
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter count={100} />, document.getElementById('app'));