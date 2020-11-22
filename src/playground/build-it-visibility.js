// console.log('App is running...');

// const app = { title: 'Visibility Toggle' },
// toggle = () => {
//     detailsShown = !detailsShown;
//     render();
// },
// appRoot = document.getElementById('app'),
// render = () => {
//     const jsx = (
//         <div>
//             <h1>{ app.title }</h1>
//             { detailsShown ? <button onClick={toggle}>Hide details</button> : <button onClick={toggle}>Show details</button> }
//             { detailsShown && <p>Some details...</p> /* The && operator acts like an IF statement here */ }
//         </div>
//     );
//     ReactDOM.render(jsx, appRoot);
// };
// let detailsShown = false;

// render();

class Visibility extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            title: 'Visibility ' + this.props.title,
            show: false
        }
    }

    toggle() {
        this.setState((prevState) => { 
            return { show: !prevState.show }; 
        }); 
    }

    render() {
        return (
                    <div>
                        <h1>{ this.state.title }</h1>
                        { this.state.show ? <button onClick={this.toggle}>Hide details</button> : <button onClick={this.toggle}>Show details</button> }
                        { this.state.show && <p>Some details...</p> /* The && operator acts like an IF statement here */ }
                    </div>
        );
    }
}

ReactDOM.render(<Visibility title={'Toggle'} />, document.getElementById('app'));