console.log('App is running...');

var app = { 
    title: 'Indecision App'
    ,subTitle: 'This is some info'
    ,options: [ 'One', 'Two' ]
},
template = (
    <div>
        <h1>{ app.title }</h1>
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