/* eslint-disable react/require-default-props */
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import HomePage from './containers/HomePage';
// import Genres from './containers/Genres';
import Songs from './containers/Songs';
import Genres from './containers/Genres';

function App(props) {
  const { testId } = props;
  return (
    <div data-testId={testId}>
      <Router>
        <Switch>
          <Route path="/genres">
            <Genres />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
App.propTypes = {
  testId: PropTypes.string,
};
export default App;
