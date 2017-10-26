/**
 * Test ItemList component using redux-mock-store
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import Immutable from 'immutable';
import TestUtils from 'react-dom/test-utils';
const ItemList = require('../ItemList').default;

describe('ItemList', () => {
  const initialState = Immutable.fromJS({items: require('../../mockserver/responses/read.json')});
  const mockStore = configureStore();
  var store, wrapper;

  beforeEach(()=>{
    store = mockStore(initialState)
    wrapper = shallow(<ItemList store={store} />);  
  });

  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });

  it('maps store state to props', () => {
    expect(wrapper.prop('items')).toEqual(initialState.get('items'));
  })

  // it('renders without error', () => {
  //   let wrapper = mount(
  //       <Provider store={Store}>
  //           <ItemList />
  //       </Provider>
  //   );

  //   expect(wrapper).toBeDefined();
  // });

});
