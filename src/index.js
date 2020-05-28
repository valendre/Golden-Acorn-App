import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let counter = 0;

function Button(props) {
    return (
        <button
            className="square" onClick={function() { 
                alert(counter); 
                }}
        >
            {props.label}
        </button>
    );
}

function Display(props) {
    return <p>{props.children}</p>
}

class App extends React.Component {

    render() {
        return (
            <main>
                <Button label="Buy one" value={counter} />
                <Display>
                    {counter}
                </Display>
                <Button label="Eat one" value={counter}/>
            </main>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
