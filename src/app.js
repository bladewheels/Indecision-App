console.log('App is running...');

let count = 0;
const app = { 
    title: 'Indecision App'
    ,subTitle: 'Put your life in the hands of a computer'
    ,options: []
},
addOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option);{
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
},
appRoot = document.getElementById('app'),
renderApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
            {
                // Use FEATURE of && i.e. returning last value evaluated and {[true|false|null|undefined]} NOT being evaluated to a displayable value in JSX.
            }
            { app && app.subTitle && <p>{app.subTitle}</p> }
            <p>{ (app && app.options && app.options.length > 0) ? 'Here are your options:' : 'No options' }</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();