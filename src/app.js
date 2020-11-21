console.log('App is running...');

var app = { title: 'Indecision App', subTitle: 'This is some info' },
template = (
    <div>
        <h1>{ app.title }</h1>
        <p>{ app.subTitle }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
),
appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);