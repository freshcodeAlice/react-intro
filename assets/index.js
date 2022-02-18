'use strict'

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
    decrement = (event) => {
        console.log(event)
        if(this.state.counter > 0 ) {
            this.setState({
                counter: this.state.counter - 1
            })
        }
    }

    greeting = () => {
        console.log('Hello to you!');
    }


    render () {
        const {counter } = this.state;
        console.log(this);
        return React.createElement(React.Fragment, null, 
            React.createElement('h1', null, counter), 
            React.createElement('button',{
                onClick: this.increment
            }, '+'),
            React.createElement('button',{
                onClick: this.decrement,
                onMouseOver: this.greeting
            }, '-')
        );
        
        
    }
}

const reactCounterElement = React.createElement(Counter, {});

ReactDOM.render(reactCounterElement, document.getElementById('root'));