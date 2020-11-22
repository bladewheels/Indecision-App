console.log('App is running...');

const app = { 
    title: 'Indecision App'
    ,subTitle: 'Put your life in the hands of a computer'
    ,options: []
},
addOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
},
resetOptions = () => {
    app.options = [];
    renderApp();
},
optionsAsList = () => {
    app.options.map((option) => {
        <li>option</li>
    });
},
appRoot = document.getElementById('app'),
renderApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            { app && app.subTitle && <p>{app.subTitle}</p> }
            <p>{ (app && app.options && app.options.length > 0) ? 'Here are your options:' : 'No options' }</p>
            <button onClick={resetOptions}>Reset Options</button>
            <ol>
            { /* Map over the options, using the index as the HTML key attribute */
                app.options.map((option, index) => {
                    return <li key={index}>{option}</li>;
                })
            }
            </ol>

            <form onSubmit={addOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
let count = 0;

renderApp();