'use strict'

//React
//ReactDOM

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }

    increment = () => {
       this.setState({
           counter: this.state.counter + 1
       })
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render () {
        const {counter } = this.state;
        console.log(counter);
        return React.createElement(React.Fragment, null, 
            React.createElement('h1', null, counter), 
            React.createElement('button',{
                onClick: this.increment
            }, '+'),
            React.createElement('button',{
                onClick: this.decrement
            }, '-')
        );
        
        
    }
}

const reactCounterElement = React.createElement(Counter, {});

ReactDOM.render(reactCounterElement, document.getElementById('root'));