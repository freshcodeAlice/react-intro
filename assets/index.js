'use strict'

//React
//ReactDOM



const reactElement = React.createElement('h1', {
    title: 'hello', 
    className: 'heading'
}, 
'Hello, React.js!')


ReactDOM.render(reactElement, document.getElementById('root'));