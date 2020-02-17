import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'antd';
import ClickCounter from './ClickCounter';

describe('<ClickCounter />', () => {
  it('renders count and button', () => {
    const wrapper = mount(<ClickCounter />);
    expect(wrapper.find('#count')).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('initialises with count of 0', () => {
    const wrapper = mount(<ClickCounter />);
    expect(wrapper.find('#count').text()).toEqual('Clicks: 0');
  });

  it('increases counter when button is clicked', () => {
    const wrapper = mount(<ClickCounter />);
    wrapper.find(Button).simulate('click');
    expect(wrapper.find('#count').text()).toEqual('Clicks: 1');
  });
});
