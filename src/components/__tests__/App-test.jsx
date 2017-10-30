/**
 * Test App component
 */

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import AppContainer from '../AppContainer';

describe('AppContainer', () => {

  it('should render without error', () => {
    let element = React.createElement(
       AppContainer
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

});
