// todo: add @flow

import * as React from 'react';
import { Provider } from 'react-redux';
import ItemList from './ItemList';

import Store from '../store';
import ItemActions from '../actions/ItemActions';

type Props = {};

export default class App extends React.Component<Props> {
    componentDidMount() {
        ItemActions.read()
            .catch(error => {
                console.warn(error);
            });
    }

    render() {
        return (
            <Provider store={Store}>
                <ItemList />
            </Provider>
        );
    }
}