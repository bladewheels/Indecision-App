console.log('App is running...');

let count = 0;
const app = { 
    title: 'Indecision App'
    ,subTitle: 'Put your life in the hands of a computer'
    ,options: [ 'One', 'Two' ]
},
template = (
    <div>
        <h1>{ app.title }</h1>
        {
            // Use FEATURE of && i.e. returning last value evaluated and {[true|false|null|undefined]} NOT being evaluated to a displayable value in JSX.
        }
        { app && app.subTitle && <p>{app.subTitle}</p> }
        <p>{ (app && app.options && app.options.length > 0) ? 'Here are your options:' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
),
appRoot = document.getElementById('app'),

buttonIdForTemplateTwo = 'plus-one',
addOne = () => { console.log('Added 1') },
minusOne = () => { console.log('Subtracted 1') },
reset = () => { console.log('Reset') },
templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        {
            // 'class' is a reserved word in JS so we must specify the 'className' attribute (of a DOM Element) in JSX instead.
        }
        <button id={buttonIdForTemplateTwo} className='btn' onClick={addOne}>+1</button>
        <button id='plus-two' onClick={() => console.log('Added 2')}>+2</button>
        <button id='plus-two' onClick={minusOne}>-1</button>
        <button id='plus-two' onClick={reset}>Reset</button>
    </div>
);

// console.log(templateTwo.props);
ReactDOM.render(templateTwo, appRoot);
// ReactDOM.render(template, appRoot);