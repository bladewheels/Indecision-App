console.log('App is running...');

const app = { title: 'Visibility Toggle' },
toggle = () => {
    detailsShown = !detailsShown;
    render();
},
appRoot = document.getElementById('app'),
render = () => {
    const jsx = (
        <div>
            <h1>{ app.title }</h1>
            { detailsShown ? <button onClick={toggle}>Hide details</button> : <button onClick={toggle}>Show details</button> }
            { detailsShown && <p>Some details...</p> /* The && operator acts like an IF statement here */ }
        </div>
    );
    ReactDOM.render(jsx, appRoot);
};
let detailsShown = false;

render();