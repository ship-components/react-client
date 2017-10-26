/**
 * Test App component
 */

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import App from '../App';

describe('App', () => {

  it('should render without error', () => {
    let element = React.createElement(
       App
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

});
