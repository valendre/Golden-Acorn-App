import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home page</Link>
              </li>
              <li>
                <Link to="/simple/states/">With states</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/simple/states/">
              <SimpleGoldenAcornApp />
            </Route>
          </Switch>
        </div>
      </Router>
    );
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

function HomePage(){
    return <h1>Golden Accorn is life! 🌰</h1>
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
            <h1>Golden Accorn application with states 🌰</h1>
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
    <App />,
    document.getElementById('root')
);
