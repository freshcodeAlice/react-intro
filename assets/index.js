'use strict'

//React
//ReactDOM

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    render () {
        const {counter } = this.state;
        console.log(counter);
        return React.createElement(React.Fragment, null, 
            React.createElement('h1', null, counter), 
            React.createElement('button',null, '+'), 
            React.createElement('button',null, '-')
        );
        
        
    }
}

const reactCounterElement = React.createElement(Counter, {});

ReactDOM.render(reactCounterElement, document.getElementById('root'));