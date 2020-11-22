const
buttonIdForTemplateTwo = 'plus-one',
addOne = () => { 
    count++;
    renderCounterApp();
},
minusOne = () => { 
    count--;
    renderCounterApp();
},
reset = () => {
    count = 0;
    renderCounterApp();
 },
 renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            {
                // 'class' is a reserved word in JS so we must specify the 'className' attribute (of a DOM Element) in JSX instead.
            }
            <button id={buttonIdForTemplateTwo} className='btn' onClick={addOne}>+1</button>
            <button id='plus-two' onClick={() => {
                count++; 
                count++; 
                renderCounterApp(); 
            }}>+2</button>
            <button id='plus-two' onClick={minusOne}>-1</button>
            <button id='plus-two' onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderCounterApp();