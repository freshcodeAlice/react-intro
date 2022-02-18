'use strict'

//React
//ReactDOM

class Heading extends React.Component {

    render(){
        console.log(this);
        const {titleForHeading, classForHeading, children} = this.props;
        
        return React.createElement('h1',{
            title: titleForHeading, 
            className: classForHeading
        }, 
        ...children)
    }
}

const reactElement = React.createElement(Heading, {
    titleForHeading: 'hi!',
    classForHeading: 'heading'
}, 'str1'); 

const reactElement2 = React.createElement(Heading, {
    classForHeading: 'new-heading'
}, 'New Heading');

const reactWrapperElement = React.createElement('div', null, reactElement, reactElement2);


ReactDOM.render(reactWrapperElement, document.getElementById('root'));