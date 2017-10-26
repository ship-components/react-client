/**
 * Test ItemList component using redux-mock-store
 */

import React from 'react';
import configureStore from 'redux-mock-store';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import Immutable from 'immutable';
import ItemList from '../ItemList';

describe('ItemList', () => {
  const initialState = Immutable.fromJS({items: require('../../mockserver/responses/read.json')});
  const mockStore = configureStore();
  var store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState)
  });

  it('renders', () => {
    wrapper = mount(<ItemList store={store} />);
    expect(wrapper.find(ItemList).length).toBe(1);
  });

  it('maps store state to props', () => {
    wrapper = shallow(<ItemList store={store} />);      
    expect(wrapper.prop('items')).toEqual(initialState.get('items'));
  })

  it('renders without error', () => {
    let wrapper = mount(
        <Provider store={store}>
            <ItemList />
        </Provider>
    );

    expect(wrapper.find(ItemList).length).toBe(1);
    // expect(wrapper.find(ItemList).prop('items')).toEqual(initialState.get('items'));    
  });

});
