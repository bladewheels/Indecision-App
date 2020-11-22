// const
// buttonIdForTemplateTwo = 'plus-one',
// addOne = () => { 
//     count++;
//     renderCounterApp();
// },
// minusOne = () => { 
//     count--;
//     renderCounterApp();
// },
// reset = () => {
//     count = 0;
//     renderCounterApp();
//  },
//  renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Count: {count}</h1>
//             {
//                 // 'class' is a reserved word in JS so we must specify the 'className' attribute (of a DOM Element) in JSX instead.
//             }
//             <button id={buttonIdForTemplateTwo} className='btn' onClick={addOne}>+1</button>
//             <button id='plus-two' onClick={() => {
//                 count++; 
//                 count++; 
//                 renderCounterApp(); 
//             }}>+2</button>
//             <button id='plus-two' onClick={minusOne}>-1</button>
//             <button id='plus-two' onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderCounterApp();

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
    resetCount() { console.log('Before: ',this.state.count); this.state.count = 0; console.log('After: ',this.state.count); }
    minusOne() { this.setState((prevState) => { return { count: prevState.count - 1 }; }); }
    plusOne() { this.setState((prevState) => { return { count: prevState.count + 1 }; }); }
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

ReactDOM.render(<Counter count={0} />, document.getElementById('app'));