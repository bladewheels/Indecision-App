class Counter extends React.Component {
    constructor(props) {
        super(props);
        // this.count = props.count;
        this.resetCount = this.resetCount.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.plusOne = this.plusOne.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        try {
            const storedCount = localStorage.getItem('count');
            if (storedCount) {
                const count = parseInt(storedCount);
                if (!isNaN(count)) {
                    this.setState(() => ({ count }));
                }
            }
        } catch (err) {
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    resetCount() { 
        this.setState(() => { 
            return { count: 0 }; 
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

ReactDOM.render(<Counter />, document.getElementById('app'));