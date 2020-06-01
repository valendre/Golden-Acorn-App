import React from 'react';
import './index.css';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router>
                <main>
                    <nav>
                        <Link to="/">Home page</Link>
                        <Link to="/simple/states/">With states</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/simple/states/">
                            <SimpleGoldenAcornApp />
                        </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

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

function HomePage() {
    return <h1>Golden Acorn is life! 🌰</h1>
}

class SimpleGoldenAcornApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    changeValue(i) {
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
            <content>
                <h1>Golden Acorn application with states 🌰</h1>
                <Button
                    label="Buy one"
                    onClick={() => this.changeValue(1)}
                />
                <Display>
                    {this.state.value}
                </Display>
                <Button
                    label="Eat one"
                    onClick={() => this.changeValue(-1)}

                />
            </content>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
