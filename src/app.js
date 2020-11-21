console.log('App is running...');

const app = { 
    title: 'Indecision App'
    ,subTitle: 'Put your life in the hands of a computer'
    ,options: [ 'One', 'Two' ]
},
template = (
    <div>
        <h1>{ app.title }</h1>
        {
            // Use FEATURE of AND returning last value evaluated and {[true|false|null|undefined]} NOT being evaluated to a displayable value in JSX.
        }
        { app && app.subTitle && <p>{app.subTitle}</p> }
        <p>{ (app && app.options && app.options.length > 0) ? 'Here are your options:' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
),
appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);