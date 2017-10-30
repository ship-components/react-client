// todo: add @flow

import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';

import Home from './Home';
import ItemList from './ItemList';

import Store from '../store';
import ItemActions from '../actions/ItemActions';

type Props = {};

export default class AppContainer extends React.Component<Props> {
  componentDidMount() {
    ItemActions.read().catch(error => {
      // console.warn(error);
      // swallow error for now
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>AppContainer</h1>
          <Provider store={Store} >
            <Route path='/' component={ItemList} />
          </Provider>
        </div>
      </BrowserRouter>
    );
  }
}
