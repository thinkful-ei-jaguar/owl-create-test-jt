import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
// import { listenerCount } from 'cluster';

  describe('List component', () => {
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List users={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List users={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
 })