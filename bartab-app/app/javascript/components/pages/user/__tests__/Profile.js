import React from 'react';
import Profile from '../Profile';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'reactstrap'

Enzyme.configure({ adapter: new Adapter() });


describe('<Profile/>', () => {
    const wrapper = shallow(<button />)
    it('renders', () => {
        expect(wrapper.exists()).toBe(true)
    })
})