import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import User from './User';

describe('User component', () => {
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<User />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<User name='User' />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
 });