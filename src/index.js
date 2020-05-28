import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string
}

function Display(props) {
    return <p>{props.children}</p>
}

class SimpleGoldenAcornApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    handleClick(i) {
        this.setState({
            value: this.state.value + i,
        });
        if (this.state.value + i < 0) {
            this.setState({
                value: 0,
            });
        }
    }

    render() {
        return (
            <main>
                <Button
                    label="Buy one"
                    onClick={() => this.handleClick(1)}
                />
                <Display>
                    {this.state.value}
                </Display>
                <Button
                    label="Eat one"
                    onClick={() => this.handleClick(-1)}

                />
            </main>
        );
    }
}

ReactDOM.render(
    <SimpleGoldenAcornApp />,
    document.getElementById('root')
);
