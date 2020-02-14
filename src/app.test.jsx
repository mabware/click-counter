import React from 'react';
import { mount } from 'enzyme';
import App from './app';
import ClickCounter from './components/ClickCounter';

describe('<App />', () => {
  it('renders <ClickCounter /> components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ClickCounter)).toHaveLength(1);
  });
});
