'use strict'


class Greeting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'User',
            lastName: 'Userovich'
        }
    }

    changeName = () => {
        this.setState({
            name: 'Anonym',
            lastName: 'Anonymus'
        })
    }

    render() {
        const {name, lastName} = this.state;

        return React.createElement(React.Fragment, null,
        React.createElement('p', null, name, lastName), 
        React.createElement('button', {onClick: this.changeName}, 'LogOut')
        );
    }


}


const reactCounterElement = React.createElement(Greeting, {});

ReactDOM.render(reactCounterElement, document.getElementById('root'));