console.log('App is running...');

var template = (
    <div>
        <h1>This is all JSX, compiled by Babel's watch</h1>
        <p>This is a paragraph</p>
        <ol>
            <li>an item</li>
            <li>another item</li>
        </ol>
    </div>
),
templateTwo = (

    <div>
        <h1>Michael</h1>
        <p>Age: 62</p>
        <p>Location: Bedroom</p>
    </div>
);

/* 
 - CHALLENGE:
    Create a templateTwo var JSX expr
    div
        h1 -> Michael
        p -> Age: 62
        p -> Location: Bedroom
    
        render this template
*/
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);